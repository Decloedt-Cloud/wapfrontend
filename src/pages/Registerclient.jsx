import React, { useState, useEffect, useRef } from 'react';
import { Eye, EyeOff, User, MapPin, Mail, Phone, Lock, Check } from 'lucide-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegisterClient = () => {
  const [formData, setFormData] = useState({
    name: '',
    sexe: '',
    nom: '',
    prenom: '',
    nationalite: '',
    adresse: '',
    indicatif: '',
    telephone: '',
    email: '',
    password: '',
    confirmPassword: '',
    conditions: false,
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [addressSuggestions, setAddressSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const autocompleteRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (window.google) {
      autocompleteRef.current = new window.google.maps.places.AutocompleteService();
    }
  }, []);

  const fetchAddressSuggestions = async (input) => {
    if (!input) {
      setAddressSuggestions([]);
      setShowSuggestions(false);
      return;
    }
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(input)}&addressdetails=1`
      );
      const data = await response.json();
      setAddressSuggestions(data.map((item) => ({ place_id: item.place_id, description: item.display_name })));
      setShowSuggestions(true);
    } catch (error) {
      console.error('Error fetching suggestions:', error);
      setAddressSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const validateField = (name, value) => {
    let error = '';

    switch (name) {
      case 'name':
        if (!value.trim()) error = 'Le nom complet est requis';
        else if (value.trim().length < 2) error = 'Le nom doit contenir au moins 2 caractères';
        break;
      case 'sexe':
        if (!value) error = 'Veuillez sélectionner un sexe';
        break;
      case 'nom':
        if (!value.trim()) error = 'Le nom de famille est requis';
        else if (value.trim().length < 2) error = 'Le nom doit contenir au moins 2 caractères';
        break;
      case 'prenom':
        if (value && value.trim().length < 2) error = 'Le prénom doit contenir au moins 2 caractères';
        break;
      case 'nationalite':
        const nationalityRegex = /^[A-Z]{2,3}$/;
        if (!value.trim()) error = 'La nationalité est requise';
        else if (!nationalityRegex.test(value)) error = 'La nationalité doit être un code de 2 ou 3 lettres (ex: MA)';
        break;
      case 'adresse':
        if (!value.trim()) error = 'L\'adresse est requise';
        break;
      case 'indicatif':
        if (value && value.trim().length > 10) error = 'L\'indicatif ne doit pas dépasser 10 caractères';
        break;
      case 'telephone':
        const phoneRegex = /^(\+212|\+31|\+33|0)[1-9]\d{8}$/;
        if (value && !phoneRegex.test(`${formData.indicatif}${value}`.replace(/[\s.-]/g, ''))) {
          error = 'Format de téléphone invalide (ex: +212612345678, +33612345678)';
        }
        break;
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.trim()) error = 'L\'adresse email est requise';
        else if (!emailRegex.test(value)) error = 'Format d\'email invalide';
        break;
      case 'password':
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!value) error = 'Le mot de passe est requis';
        else if (!passwordRegex.test(value)) {
          error = 'Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial (@$!%*?&)';
        }
        break;
      case 'confirmPassword':
        if (!value) error = 'Veuillez confirmer le mot de passe';
        else if (value !== formData.password) error = 'Les mots de passe ne correspondent pas';
        break;
      case 'conditions':
        if (!value) error = 'Vous devez accepter les conditions d\'utilisation';
        break;
      default:
        break;
    }

    return error;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: fieldValue,
    }));

    if (name === 'adresse') {
      fetchAddressSuggestions(value);
    }

    const error = validateField(name, fieldValue);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));

    if (name === 'password' && formData.confirmPassword) {
      const confirmError = validateField('confirmPassword', formData.confirmPassword);
      setErrors((prev) => ({
        ...prev,
        confirmPassword: confirmError,
      }));
    }
  };

  const handleSuggestionSelect = (suggestion) => {
    setFormData((prev) => ({
      ...prev,
      adresse: suggestion.description,
    }));
    setAddressSuggestions([]);
    setShowSuggestions(false);
    setErrors((prev) => ({
      ...prev,
      adresse: '',
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);

      try {
        const payload = {
          name: formData.name,
          email: formData.email,
          password: formData.password,
          password_confirmation: formData.confirmPassword,
          sexe: formData.sexe,
          nom: formData.nom,
          prenom: formData.prenom,
          nationalite: formData.nationalite,
          adresse: formData.adresse,
          indicatif: formData.indicatif,
          telephone: `${formData.indicatif}${formData.telephone}`,
          conditions: formData.conditions,
        };

        const response = await axios.post('http://wapback.hellowap.com/api/register-client', payload);

        if (response.status === 201) {
          // Store token in localStorage
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('user', JSON.stringify(response.data.user));
          
          // Show success popup
          setShowSuccessPopup(true);
          setTimeout(() => {
            setShowSuccessPopup(false);
            // Redirect to dashboard
            navigate('/Dashboard');
          }, 2000);

          // Reset form
          setFormData({
            name: '',
            sexe: '',
            nom: '',
            prenom: '',
            nationalite: '',
            adresse: '',
            indicatif: '',
            telephone: '',
            email: '',
            password: '',
            confirmPassword: '',
            conditions: false,
          });
          setErrors({});
          setAddressSuggestions([]);
          setShowSuggestions(false);
        } else {
          alert('Erreur lors de l\'inscription. Veuillez réessayer.');
        }
      } catch (error) {
        console.error('Erreur inscription:', {
          status: error.response?.status,
          data: error.response?.data,
          message: error.message,
        });
        if (error.response && error.response.data.errors) {
          setErrors(error.response.data.errors);
        } else {
          alert('Erreur serveur: ' + (error.response?.data.message || 'Veuillez réessayer plus tard.'));
        }
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const inputClasses = (fieldName) => {
    const baseClasses =
      'w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white';
    const errorClasses = errors[fieldName] ? 'border-red-500 bg-red-50' : 'border-gray-200 hover:border-gray-300';
    return `${baseClasses} ${errorClasses}`;
  };

  const ErrorMessage = ({ error }) => (
    error && (
      <p className="text-red-500 text-xs mt-1 flex items-center">
        <span className="w-4 h-4 mr-1">⚠</span>
        {Array.isArray(error) ? error[0] : error}
      </p>
    )
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12 px-4">
      <div className="max-w-xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl shadow-xl p-10 border border-gray-100">
          {showSuccessPopup && (
            <div className="fixed top-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg flex items-center">
              <Check className="w-5 h-5 mr-2" />
              <span>Inscrit avec succès ! Redirection vers le tableau de bord...</span>
              <button
                onClick={() => setShowSuccessPopup(false)}
                className="ml-4 text-white hover:text-gray-200"
                aria-label="Fermer la notification"
              >
                ✕
              </button>
            </div>
          )}

          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <User className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">S'inscrire & commencer l'essai gratuit</h1>
            <p className="text-gray-600 text-sm">Créez votre compte client en quelques clics</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <User className="w-4 h-4 inline mr-2" />
                Nom complet *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Entrez votre nom complet"
                className={inputClasses('name')}
                required
              />
              <ErrorMessage error={errors.name} />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <User className="w-4 h-4 inline mr-2" />
                Sexe *
              </label>
              <select
                name="sexe"
                value={formData.sexe}
                onChange={handleInputChange}
                className={inputClasses('sexe')}
                required
              >
                <option value="">Sélectionner le sexe</option>
                <option value="Homme">Homme</option>
                <option value="Femme">Femme</option>
              </select>
              <ErrorMessage error={errors.sexe} />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <User className="w-4 h-4 inline mr-2" />
                Nom de famille *
              </label>
              <input
                type="text"
                name="nom"
                value={formData.nom}
                onChange={handleInputChange}
                placeholder="Entrez votre nom de famille"
                className={inputClasses('nom')}
                required
              />
              <ErrorMessage error={errors.nom} />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <User className="w-4 h-4 inline mr-2" />
                Prénom
              </label>
              <input
                type="text"
                name="prenom"
                value={formData.prenom}
                onChange={handleInputChange}
                placeholder="Entrez votre prénom"
                className={inputClasses('prenom')}
              />
              <ErrorMessage error={errors.prenom} />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <MapPin className="w-4 h-4 inline mr-2" />
                Nationalité *
              </label>
              <input
                type="text"
                name="nationalite"
                value={formData.nationalite}
                onChange={handleInputChange}
                placeholder="Entrez votre nationalité (ex: MA)"
                className={inputClasses('nationalite')}
                required
              />
              <ErrorMessage error={errors.nationalite} />
            </div>

            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <MapPin className="w-4 h-4 inline mr-2" />
                Adresse *
              </label>
              <input
                type="text"
                name="adresse"
                value={formData.adresse}
                onChange={handleInputChange}
                onFocus={() => formData.adresse && fetchAddressSuggestions(formData.adresse)}
                placeholder="Votre adresse complète"
                className={inputClasses('adresse')}
                required
              />
              {showSuggestions && addressSuggestions.length > 0 && (
                <ul className="absolute z-10 w-full bg-white border border-gray-200 rounded-xl mt-1 max-h-60 overflow-auto shadow-lg">
                  {addressSuggestions.map((suggestion) => (
                    <li
                      key={suggestion.place_id}
                      className="px-4 py-2 hover:bg-blue-50 cursor-pointer text-sm text-gray-700 flex items-center"
                      onClick={() => handleSuggestionSelect(suggestion)}
                    >
                      <MapPin className="w-4 h-4 mr-2 text-gray-500" />
                      {suggestion.description}
                    </li>
                  ))}
                </ul>
              )}
              <ErrorMessage error={errors.adresse} />
            </div>

            <div className="flex space-x-2">
              <div className="w-1/4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Phone className="w-4 h-4 inline mr-2" />
                  Indicatif
                </label>
                <input
                  type="text"
                  name="indicatif"
                  value={formData.indicatif}
                  onChange={handleInputChange}
                  placeholder="+212"
                  className={inputClasses('indicatif')}
                />
                <ErrorMessage error={errors.indicatif} />
              </div>
              <div className="w-3/4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Phone className="w-4 h-4 inline mr-2" />
                  Téléphone
                </label>
                <input
                  type="tel"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleInputChange}
                  placeholder="0612345678"
                  className={inputClasses('telephone')}
                />
                <ErrorMessage error={errors.telephone} />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Mail className="w-4 h-4 inline mr-2" />
                Adresse email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="votre@email.com"
                className={inputClasses('email')}
                required
              />
              <ErrorMessage error={errors.email} />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Lock className="w-4 h-4 inline mr-2" />
                Mot de passe *
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Minimum 8 caractères"
                  className={`${inputClasses('password')} pr-12`}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
                  aria-label={showPassword ? 'Masquer le mot de passe' : 'Afficher le mot de passe'}
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              <ErrorMessage error={errors.password} />
              <p className="text-xs text-gray-500 mt-1">
                Utilisez au moins une lettre minuscule, une majuscule, un chiffre, un caractère spécial et 8 caractères.
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Lock className="w-4 h-4 inline mr-2" />
                Confirmer le mot de passe *
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Confirmez votre mot de passe"
                  className={`${inputClasses('confirmPassword')} pr-12`}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
                  aria-label={showConfirmPassword ? 'Masquer le mot de passe' : 'Afficher le mot de passe'}
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              <ErrorMessage error={errors.confirmPassword} />
            </div>

            <div>
              <label className="flex items-start space-x-3 cursor-pointer">
                <div className="relative">
                  <input
                    type="checkbox"
                    name="conditions"
                    checked={formData.conditions}
                    onChange={handleInputChange}
                    className="sr-only"
                    required
                  />
                  <div
                    className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                      formData.conditions
                        ? 'bg-blue-600 border-blue-600'
                        : errors.conditions
                        ? 'border-red-500'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {formData.conditions && <Check className="w-3 h-3 text-white" />}
                  </div>
                </div>
                <span className="text-sm text-gray-700 leading-5">
                  J'accepte les{' '}
                  <a
                    href="/conditions-vente"
                    className="text-blue-600 hover:text-blue-700 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    conditions de vente (WAP-89)
                  </a>
                </span>
              </label>
              <ErrorMessage error={errors.conditions} />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 focus:ring-4 focus:ring-blue-200 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl focus:outline-none"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Inscription en cours...
                </span>
              ) : (
                'S\'inscrire'
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Déjà un compte ?{' '}
              <a href="/login" className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
                Se connecter
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterClient;