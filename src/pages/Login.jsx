import React, { useState, useEffect } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loginError, setLoginError] = useState('');

  const validateField = (name, value) => {
    let error = '';

    switch (name) {
      case 'email':
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        if (!value.trim()) {
          error = "L'adresse email est requise";
        } else if (!emailRegex.test(value)) {
          error = "Format d'email invalide (ex: exemple@domaine.com)";
        }
        break;
      case 'password':
        if (!value) {
          error = 'Le mot de passe est requis';
        } else if (value.length < 8) {
          error = 'Le mot de passe doit contenir au moins 8 caractères';
        }
        break;
      default:
        break;
    }

    return error;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Validate field on change
    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
    if (name === 'email' || name === 'password') {
      setLoginError(''); // Clear login error when user edits
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      setLoginError(''); // Clear previous login error

      try {
        // Simulation d'appel API - remplacez par votre endpoint réel
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Simuler une vérification d'identifiants (exemple)
        const validEmail = 'user@example.com';
        const validPassword = 'Password123!';
        if (formData.email === validEmail && formData.password === validPassword) {
          // Simuler une session active de 30 minutes
          const sessionTimeout = 30 * 60 * 1000; // 30 minutes en millisecondes
          localStorage.setItem('sessionActive', 'true');
          localStorage.setItem('sessionTimeout', Date.now() + sessionTimeout);

          // Rediriger vers l'espace personnel (simulé avec une alerte pour cet exemple)
          alert('Connexion réussie ! Redirection vers votre espace personnel...');
          
          // Reset form
          setFormData({
            email: '',
            password: '',
          });
          setErrors({});
        } else {
          throw new Error('Identifiants incorrects');
        }
      } catch (error) {
        setLoginError('Identifiants incorrects. Veuillez vérifier votre email et mot de passe.');
        console.error('Erreur de connexion:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  // Vérifier l'inactivité et déconnecter après 30 minutes
  useEffect(() => {
    let inactivityTimer;
    const resetInactivityTimer = () => {
      clearTimeout(inactivityTimer);
      inactivityTimer = setTimeout(() => {
        localStorage.removeItem('sessionActive');
        localStorage.removeItem('sessionTimeout');
        alert('Session expirée due à l\'inactivité.');
      }, 30 * 60 * 1000); // 30 minutes
    };

    const handleActivity = () => resetInactivityTimer();

    window.addEventListener('mousemove', handleActivity);
    window.addEventListener('keydown', handleActivity);
    resetInactivityTimer();

    // Nettoyer l'effet au démontage
    return () => {
      clearTimeout(inactivityTimer);
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('keydown', handleActivity);
    };
  }, []);

  const inputClasses = (fieldName) => {
    const baseClasses = "w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white";
    const errorClasses = errors[fieldName] ? "border-red-500 bg-red-50" : "border-gray-200 hover:border-gray-300";
    return `${baseClasses} ${errorClasses}`;
  };

  const ErrorMessage = ({ error }) => (
    error && (
      <p className="text-red-500 text-xs mt-1 flex items-center">
        <span className="mr-1">⚠</span>
        {error}
      </p>
    )
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-8 px-4">
      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Se connecter
            </h1>
            <p className="text-gray-600 text-sm">
              Connectez-vous à votre compte professionnel
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <svg className="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
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

            {/* Mot de passe */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <svg className="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Mot de passe *
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Votre mot de passe"
                  className={`${inputClasses('password')} pr-12`}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
                  aria-label={showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
                >
                  {showPassword ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
              <ErrorMessage error={errors.password} />
            </div>

            {/* Message d'erreur global */}
            {loginError && (
              <p className="text-red-500 text-sm mt-2">{loginError}</p>
            )}

            {/* Bouton de soumission */}
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
                    <circle 
                      className="opacity-25" 
                      cx="12" 
                      cy="12" 
                      r="10" 
                      stroke="currentColor" 
                      strokeWidth="4"
                    />
                    <path 
                      className="opacity-75" 
                      fill="currentColor" 
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Connexion en cours...
                </span>
              ) : (
                "Se connecter"
              )}
            </button>
          </form>

          {/* Footer */}
          <div className="mt-6 text-center space-y-2">
            <p className="text-sm text-gray-600">
              <a 
                href="/RequestforgetPassword" 
                className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                Mot de passe oublié ?
              </a>
            </p>
            <p className="text-sm text-gray-600">
              Pas encore de compte ?{' '}
              <a 
                href="/JoinWap" 
                className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                S'inscrire
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;