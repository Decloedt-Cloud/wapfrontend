import React, { useState, useEffect, useRef } from 'react';
import { Eye, EyeOff, User, Building, Briefcase, MapPin, Mail, Phone, Lock, Check } from 'lucide-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const Registerintervenant = () => {
  const [formData, setFormData] = useState({
    companyType: '',
    companyName: '',
    activity: '',
    city: '',
    address: '',
    indicatif: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
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


  const companyTypes = [
    'Sélectionner le type d\'entreprise',
    'Auto-Entrepreneur',
    'Freelancer',
    'Entreprise',
    'SARL',
    'SAS',
    'Autre',
  ];

  const indicatifs = ['+33'];

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
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(input)}&countrycodes=fr&addressdetails=1`
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
      case 'companyType':
        if (!value || value === 'Sélectionner le type d\'entreprise') {
          error = 'Veuillez sélectionner un type d\'entreprise';
        }
        break;
      case 'companyName':
        if (!value.trim()) {
          error = 'Le nom d\'entreprise est requis';
        } else if (value.trim().length < 2) {
          error = 'Le nom doit contenir au moins 2 caractères';
        }
        break;
      case 'activity':
        if (!value.trim()) {
          error = 'L\'activité est requise';
        }
        break;
      case 'city':
        if (!value.trim()) {
          error = 'La ville est requise';
        }
        break;
      case 'address':
        if (!value.trim()) {
          error = 'L\'adresse est requise';
        }
        break;
      case 'indicatif':
        if (!value || !indicatifs.includes(value)) {
          error = 'Veuillez sélectionner un indicatif valide (+33)';
        }
        break;
      case 'phone':
        const phoneRegex = /^[1-9]\d{8}$/;
        if (!value.trim()) {
          error = 'Le numéro de téléphone est requis';
        } else if (!phoneRegex.test(value.replace(/[\s-]/g, ''))) {
          error = 'Format de téléphone invalide (ex: 612345678)';
        }
        break;
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.trim()) {
          error = 'L\'adresse email est requise';
        } else if (!emailRegex.test(value)) {
          error = 'Format d\'email invalide';
        }
        break;
      case 'password':
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!value) {
          error = 'Le mot de passe est requis';
        } else if (!passwordRegex.test(value)) {
          error = 'Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial (@$!%*?&)';
        }
        break;
      case 'confirmPassword':
        if (!value) {
          error = 'Veuillez confirmer le mot de passe';
        } else if (value !== formData.password) {
          error = 'Les mots de passe ne correspondent pas';
        }
        break;
      case 'acceptTerms':
        if (!value) {
          error = 'Vous devez accepter les conditions d\'utilisation';
        }
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
    if (name === 'address') {
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
      address: suggestion.description,
    }));
    setAddressSuggestions([]);
    setShowSuggestions(false);
    setErrors((prev) => ({
      ...prev,
      address: '',
    }));
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const newErrors = {};
  //   Object.keys(formData).forEach((key) => {
  //     const error = validateField(key, formData[key]);
  //     if (error) newErrors[key] = error;
  //   });
  //   setErrors(newErrors);
  //   if (Object.keys(newErrors).length === 0) {
  //     setIsSubmitting(true);
  //     try {
  //       const response = await fetch('/api/signup', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify({
  //           ...formData,
  //           phone: `${formData.indicatif}${formData.phone}`,
  //         }),
  //       });
  //       if (response.ok) {
  //         await fetch('/api/send-validation-email', {
  //           method: 'POST',
  //           headers: {
  //             'Content-Type': 'application/json',
  //           },
  //           body: JSON.stringify({ email: formData.email }),
  //         });
  //         setShowSuccessPopup(true);
  //         setTimeout(() => setShowSuccessPopup(false), 5000);
  //         setFormData({
  //           companyType: '',
  //           companyName: '',
  //           activity: '',
  //           city: '',
  //           address: '',
  //           indicatif: '',
  //           phone: '',
  //           email: '',
  //           password: '',
  //           confirmPassword: '',
  //           acceptTerms: false,
  //         });
  //         setErrors({});
  //         setAddressSuggestions([]);
  //         setShowSuggestions(false);
  //       } else {
  //         throw new Error('Erreur lors de l\'inscription');
  //       }
  //     } catch (error) {
  //       alert('Une erreur est survenue lors de l\'inscription. Veuillez réessayer.');
  //       console.error('Erreur d\'inscription:', error);
  //     } finally {
  //       setIsSubmitting(false);
  //     }
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation locale
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);

      try {
        // Préparer payload avec noms attendus côté Laravel
        const payload = {
          name: formData.companyName,
          email: formData.email,
          password: formData.password,
          password_confirmation: formData.confirmPassword,
          type_entreprise: formData.companyType,
          nom_entreprise: formData.companyName,
          activite_entreprise: formData.activity,
          ville: formData.city,
          adresse: formData.address,
          telephone: `${formData.indicatif}${formData.phone}`,
          conditions: formData.acceptTerms,
        };

        // URL complète vers backend Laravel
        const response = await axios.post('http://localhost:8000/api/register-intervenant', payload);

        if (response.status === 201) {
          setShowSuccessPopup(true);
          setTimeout(() => setShowSuccessPopup(false), 5000);


          // Attendre 2 secondes puis rediriger
          setTimeout(() => {
            setShowSuccessPopup(false);
            navigate('/Confirmregisterpopup'); 
          }, 2000);

          // Reset formulaire
          setFormData({
            companyType: '',
            companyName: '',
            activity: '',
            city: '',
            address: '',
            indicatif: '',
            phone: '',
            email: '',
            password: '',
            confirmPassword: '',
            acceptTerms: false,
          });
          setErrors({});
        } else {
          alert('Erreur lors de l\'inscription. Veuillez réessayer.');
        }
      } catch (error) {
        if (error.response && error.response.data.errors) {
          // Afficher erreurs backend si présentes
          setErrors(error.response.data.errors);
        } else {
          alert('Erreur serveur. Veuillez réessayer plus tard.');
        }
        console.error('Erreur inscription:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const inputClasses = (fieldName) => {
    const baseClasses =
      'w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white';
    const errorClasses = errors[fieldName] ? 'border-red-500 bg-red-50' : 'border-gray-200 hover:border-gray-300';
    return `${baseClasses} ${errorClasses}`;
  };

  const ErrorMessage = ({ error }) => (
    error && (
      <p className="text-red-500 text-xs mt-1 flex items-center transition-opacity duration-300">
        <span className="w-4 h-4 mr-1">⚠</span>
        {error}
      </p>
    )
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-16 px-6">
      <div className="max-w-xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl shadow-lg p-12 border border-gray-200 transition-all duration-300">
          {showSuccessPopup && (
            <div className="fixed top-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg flex items-center transition-all duration-300 transform hover:scale-105">
              <Check className="w-5 h-5 mr-2" />
              <span>Inscrit avec succès ! Un email de validation vous a été envoyé.</span>
              <button
                onClick={() => setShowSuccessPopup(false)}
                className="ml-4 text-white hover:text-gray-200 transition-colors duration-300"
                aria-label="Fermer la notification"
              >
                ✕
              </button>
            </div>
          )}

          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl mx-auto mb-4 flex items-center justify-center transition-transform duration-300 hover:scale-105">
              <User className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2 transition-colors duration-300 hover:text-blue-600">
              S'inscrire & commencer l'essai gratuit
            </h1>
            <p className="text-gray-600 text-sm transition-opacity duration-300 hover:opacity-80">
              Créez votre compte professionnel en quelques clics
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 transition-colors duration-300 hover:text-blue-600">
                <Building className="w-4 h-4 inline mr-2" />
                Type d'entreprise *
              </label>
              <select
                name="companyType"
                value={formData.companyType}
                onChange={handleInputChange}
                className={inputClasses('companyType')}
                required
              >
                {companyTypes.map((type, index) => (
                  <option key={index} value={type} disabled={index === 0}>
                    {type}
                  </option>
                ))}
              </select>
              <ErrorMessage error={errors.companyType} />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 transition-colors duration-300 hover:text-blue-600">
                <Building className="w-4 h-4 inline mr-2" />
                Nom ou Nom d'entreprise *
              </label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                placeholder="Entrez le nom de votre entreprise"
                className={inputClasses('companyName')}
                required
              />
              <ErrorMessage error={errors.companyName} />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 transition-colors duration-300 hover:text-blue-600">
                <Briefcase className="w-4 h-4 inline mr-2" />
                Activité *
              </label>
              <input
                type="text"
                name="activity"
                value={formData.activity}
                onChange={handleInputChange}
                placeholder="Décrivez votre activité"
                className={inputClasses('activity')}
                required
              />
              <ErrorMessage error={errors.activity} />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 transition-colors duration-300 hover:text-blue-600">
                <MapPin className="w-4 h-4 inline mr-2" />
                Ville *
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                placeholder="Votre ville"
                className={inputClasses('city')}
                required
              />
              <ErrorMessage error={errors.city} />
            </div>

            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2 transition-colors duration-300 hover:text-blue-600">
                <MapPin className="w-4 h-4 inline mr-2" />
                Adresse *
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                onFocus={() => formData.address && fetchAddressSuggestions(formData.address)}
                placeholder="Votre adresse complète"
                className={inputClasses('address')}
                required
              />
              {showSuggestions && addressSuggestions.length > 0 && (
                <ul className="absolute z-10 w-full bg-white border border-gray-200 rounded-xl mt-1 max-h-60 overflow-auto shadow-lg transition-all duration-300">
                  {addressSuggestions.map((suggestion) => (
                    <li
                      key={suggestion.place_id}
                      className="px-4 py-2 hover:bg-blue-50 cursor-pointer text-sm text-gray-700 flex items-center transition-colors duration-300 hover:text-blue-600"
                      onClick={() => handleSuggestionSelect(suggestion)}
                    >
                      <MapPin className="w-4 h-4 mr-2 text-gray-500" />
                      {suggestion.description}
                    </li>
                  ))}
                </ul>
              )}
              <ErrorMessage error={errors.address} />
            </div>

            <div className="flex space-x-2">
              <div className="w-1/4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Phone className="w-4 h-4 inline mr-2" />
                  Indicatif *
                </label>
                <input
                  type="text"
                  name="indicatif"
                  value={formData.indicatif}
                  onChange={handleInputChange}
                  placeholder="+33"
                  className={inputClasses('indicatif')}
                  required
                />
                <ErrorMessage error={errors.indicatif} />
              </div>
              <div className="w-3/4">
                <label className="block text-sm font-medium text-gray-700 mb-2 transition-colors duration-300 hover:text-blue-600">
                  <Phone className="w-4 h-4 inline mr-2" />
                  Téléphone *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="ex: 612345678"
                  className={inputClasses('phone')}
                  required
                />
                <ErrorMessage error={errors.phone} />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 transition-colors duration-300 hover:text-blue-600">
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
              <label className="block text-sm font-medium text-gray-700 mb-2 transition-colors duration-300 hover:text-blue-600">
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
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-300 focus:outline-none"
                  aria-label={showPassword ? 'Masquer le mot de passe' : 'Afficher le mot de passe'}
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              <ErrorMessage error={errors.password} />
              <p className="text-xs text-gray-500 mt-1 transition-opacity duration-300 hover:opacity-80">
                Utilisez au moins une lettre minuscule, une majuscule, un chiffre, un caractère spécial et 8 caractères.
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 transition-colors duration-300 hover:text-blue-600">
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
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-300 focus:outline-none"
                  aria-label={showConfirmPassword ? 'Masquer le mot de passe' : 'Afficher le mot de passe'}
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              <ErrorMessage error={errors.confirmPassword} />
            </div>

            <div>
              <label className="flex items-start space-x-3 cursor-pointer transition-colors duration-300 hover:text-blue-600">
                <div className="relative">
                  <input
                    type="checkbox"
                    name="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={handleInputChange}
                    className="sr-only"
                    required
                  />
                  <div
                    className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-300 ${formData.acceptTerms
                      ? 'bg-blue-600 border-blue-600'
                      : errors.acceptTerms
                        ? 'border-red-500'
                        : 'border-gray-300 hover:border-gray-400'
                      }`}
                  >
                    {formData.acceptTerms && <Check className="w-3 h-3 text-white" />}
                  </div>
                </div>
                <span className="text-sm text-gray-700 leading-5">
                  J'accepte les{' '}
                  <a
                    href="/conditions-vente"
                    className="text-blue-600 hover:text-blue-700 underline transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    conditions de vente (WAP-89)
                  </a>
                </span>
              </label>
              <ErrorMessage error={errors.acceptTerms} />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 focus:ring-4 focus:ring-blue-200 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl focus:outline-none"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white transition-transform duration-300"
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
            <p className="text-sm text-gray-600 transition-opacity duration-300 hover:opacity-80">
              Déjà un compte ?{' '}
              <a href="/login" className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300">
                Se connecter
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registerintervenant;