import React, { useState } from 'react';
import axios from 'axios'; // ajoute ceci en haut
import { Lock, Mail, ArrowLeft } from 'lucide-react';

const RequestforgetPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!email.trim()) {
      setError("L'adresse email est requise.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Format d'email invalide.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await axios.post('http://wapback.hellowap.com/api/forgot-password', { email });

      if (response.data && response.data.message) {
        setSuccess(response.data.message);
        setEmail('');
      } else {
        setSuccess('Email envoyé avec succès.');
      }
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError("Une erreur est survenue. Veuillez réessayer.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-16 px-6 flex items-center justify-center">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 transition-all duration-300">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl mx-auto mb-4 flex items-center justify-center transition-transform duration-300 hover:scale-105">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2 transition-colors duration-300 hover:text-blue-600">
              Mot de passe oublié ?
            </h1>
            <p className="text-gray-600 text-sm transition-opacity duration-300 hover:opacity-80">
              Entrez votre email pour réinitialiser votre mot de passe
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 transition-colors duration-300 hover:text-blue-600">
                <Mail className="w-4 h-4 inline mr-2" />
                Adresse email *
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="votre@email.com"
                className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white border-gray-200 hover:border-gray-300"
                required
              />
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
                  Envoi en cours...
                </span>
              ) : (
                'Envoyer la demande'
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

export default RequestforgetPassword;