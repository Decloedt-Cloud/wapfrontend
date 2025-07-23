import React from "react";

const Register = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Container principal du formulaire */}
        <div className="bg-white border-2 border-gray-400 p-6">
          {/* Titre */}
          <h1 className="text-lg font-medium text-gray-900 text-center mb-6">
            S'inscrire & commencer l’essai gratuit
          </h1>

          {/* Formulaire */}
          <form className="space-y-4">
            {/* Type d'entreprise */}
            <div>
              <select className="w-full border border-gray-400 px-3 py-2 text-gray-700 bg-white focus:outline-none focus:border-blue-500">
                <option>Type d'entreprise</option>
                <option>Artisan</option>
                <option>Commerçant</option>
                <option>Prestataire de services</option>
                <option>Freelance</option>
              </select>
            </div>

            {/* Nom ou Nom d'entreprise */}
            <div>
              <input
                type="text"
                placeholder="Nom ou Nom d'entreprise"
                className="w-full border border-gray-400 px-3 py-2 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Activité */}
            <div>
              <input
                type="text"
                placeholder="Activité"
                className="w-full border border-gray-400 px-3 py-2 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Ville */}
            <div>
              <input
                type="text"
                placeholder="Ville"
                className="w-full border border-gray-400 px-3 py-2 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Adresse */}
            <div>
              <input
                type="text"
                placeholder="Adresse"
                className="w-full border border-gray-400 px-3 py-2 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Téléphone */}
            <div className="flex">
              <div className="border border-gray-400 border-r-0 px-3 py-2 bg-gray-50 text-gray-600 text-sm">
                (+31)
              </div>
              <input
                type="tel"
                placeholder="6 222 222 22"
                className="flex-1 border border-gray-400 px-3 py-2 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                placeholder="Adresse mail"
                className="w-full border border-gray-400 px-3 py-2 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Mot de passe */}
            <div>
              <input
                type="password"
                placeholder="Mot de passe"
                className="w-full border border-gray-400 px-3 py-2 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Info mot de passe */}
            <p className="text-xs text-gray-600">
              Utilisez au moins une lettre, un chiffre et sept caractères.
            </p>

            {/* Confirmer mot de passe */}
            <div>
              <input
                type="password"
                placeholder="Confirmer le mot de passe"
                className="w-full border border-gray-400 px-3 py-2 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Conditions */}
            <div className="flex items-start space-x-2 mt-4">
              <input
                type="checkbox"
                id="conditions"
                className="mt-1 w-4 h-4 border border-gray-400 rounded focus:ring-blue-500 focus:ring-2"
              />
              <label htmlFor="conditions" className="text-sm text-gray-700 leading-tight">
                J'accepte les conditions d'utilisation
              </label>
            </div>

            {/* Bouton */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 transition-colors duration-200 mt-6"
            >
              S'inscrire
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;