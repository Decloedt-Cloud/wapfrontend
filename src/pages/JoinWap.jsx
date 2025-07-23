import React, { } from "react";

const JoinWap = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-12">
      {/* Titre principal */}
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-12">
        Inscrivez vous sur WAP
      </h1>

      {/* Container des deux cartes */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Carte "Besoin d'un Job" */}
        <div className="bg-white border-2 border-gray-400 p-8 text-center shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 mb-8">
            Besoin d'un Job
          </h2>

          {/* Icône stylisée */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 border-4 border-gray-800 rounded-full flex items-center justify-center bg-white relative">
              <div className="w-6 h-6 bg-gray-800 rounded-full absolute top-3"></div>
              <div className="w-10 h-6 bg-gray-800 rounded-t-full absolute bottom-2"></div>
            </div>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed mb-8 px-2">
            Inscrivez votre activité en quelques clics et rendez-vous visible auprès de milliers de visiteurs qui recherchent des services comme le vôtre. Créez votre fiche gratuitement, gérez vos informations, recevez des avis clients et développez votre présence en ligne facilement.
          </p>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-none transition-colors duration-200 mb-4">
            Inscrire vous gratuitement
          </button>

          <p className="text-sm text-gray-600">
            J'ai déjà un compte. <a href="/" className="text-blue-600 hover:text-blue-700 underline">Je me connecte</a>
          </p>
        </div>

        {/* Carte "Besoin d'aide" */}
        <div className="bg-white border-2 border-gray-400 p-8 text-center shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 mb-8">
            Besoin d'aide
          </h2>

          {/* Icône stylisée */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 border-4 border-gray-800 rounded-full flex items-center justify-center bg-white relative">
              <div className="w-6 h-6 bg-gray-800 rounded-full absolute top-3"></div>
              <div className="w-10 h-6 bg-gray-800 rounded-t-full absolute bottom-2"></div>
            </div>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed mb-8 px-2">
            Besoin d'un artisan, d'un prestataire ou d'un expert local ? Recherchez parmi des centaines de professionnels vérifiés, consultez les avis clients et contactez-les en un clic. Gagnez du temps et trouvez le bon pro en toute simplicité.
          </p>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-none transition-colors duration-200 mb-4">
            Inscrire vous gratuitement
          </button>

          <p className="text-sm text-gray-600">
            J'ai déjà un compte. <a href="/" className="text-blue-600 hover:text-blue-700 underline">Je me connecte</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default JoinWap;
