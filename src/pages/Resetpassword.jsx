import React, { useState } from 'react';
import { Lock, Eye, EyeOff, ArrowLeft } from 'lucide-react';

const ResetPassword = () => {
  const [formData, setFormData] = useState({
    newPassword: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError(''); // Clear error on change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!formData.newPassword || !formData.confirmPassword) {
      setError('Tous les champs sont requis.');
      return;
    }

    if (!validatePassword(formData.newPassword)) {
      setError('Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial (@$!%*?&).');
      return;
    }

    if (formData.newPassword !== formData.confirmPassword) {
      setError('Les mots de passe ne correspondent pas.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulation d'un appel API pour réinitialiser le mot de passe
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSuccess('Votre mot de passe a été réinitialisé avec succès. Vous pouvez maintenant vous connecter.');
      setFormData({
        newPassword: '',
        confirmPassword: '',
      });
    } catch (err) {
      setError('Une erreur est survenue. Veuillez réessayer.');
      console.error('Erreur:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = (hasError) =>
    `w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white ${
      hasError ? 'border-red-500 bg-red-50' : 'border-gray-200 hover:border-gray-300'
    }`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-16 px-6 flex items-center justify-center">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 transition-all duration-300">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl mx-auto mb-4 flex items-center justify-center transition-transform duration-300 hover:scale-105">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2 transition-colors duration-300 hover:text-blue-600">
              Réinitialiser votre mot de passe
            </h1>
            <p className="text-gray-600 text-sm transition-opacity duration-300 hover:opacity-80">
              Créez un nouveau mot de passe sécurisé
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 transition-colors duration-300 hover:text-blue-600">
                <Lock className="w-4 h-4 inline mr-2" />
                Nouveau mot de passe *
              </label>
              <div className="relative">
                <input
                  type={showNewPassword ? 'text' : 'password'}
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleInputChange}
                  placeholder="Nouveau mot de passe"
                  className={inputClasses(error && !formData.confirmPassword)}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-300 focus:outline-none"
                  aria-label={showNewPassword ? 'Masquer le mot de passe' : 'Afficher le mot de passe'}
                >
                  {showNewPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
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
                  placeholder="Confirmez le mot de passe"
                  className={inputClasses(error && !formData.newPassword)}
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
              {error && (
                <p className="text-red-500 text-xs mt-1 flex items-center transition-opacity duration-300">
                  <span className="w-4 h-4 mr-1">⚠</span>
                  {error}
                </p>
              )}
              {success && (
                <p className="text-green-500 text-xs mt-1 flex items-center transition-opacity duration-300">
                  <span className="w-4 h-4 mr-1">✔</span>
                  {success}
                </p>
              )}
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
                  Réinitialisation en cours...
                </span>
              ) : (
                'Réinitialiser le mot de passe'
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600 transition-opacity duration-300 hover:opacity-80">
              <a
                href="/login"
                className="flex items-center justify-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300"
              >
                <ArrowLeft className="w-4 h-4 mr-1" />
                Retourner à la connexion
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;