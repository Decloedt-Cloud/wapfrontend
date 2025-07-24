import React from "react";
import { useNavigate } from 'react-router-dom';


const JoinWap = () => {
const navigate = useNavigate();

  const handleRegisterRedirect = () => {
    navigate('/Registerintervenant');
  };
  const handleRegisterClient = () => {
    navigate('/RegisterClient');
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-4">
      <div className="w-full max-w-6xl mx-auto">
        {/* Titre principal avec effet moderne */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent mb-6">
            Inscrivez vous sur WAP
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full"></div>
        </div>

        {/* Container des deux cartes avec effet de profondeur */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Carte "Besoin d'un Job" */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
            <div className="relative bg-white rounded-2xl p-10 shadow-2xl transform group-hover:-translate-y-2 transition-all duration-300 border border-gray-100">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 to-blue-800 rounded-t-2xl"></div>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-8 mt-4">
                Besoin d'un Job
              </h2>

              {/* Icône moderne avec animation */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                    <div className="relative">
                      <div className="w-8 h-8 bg-white rounded-full absolute -top-2 left-1/2 transform -translate-x-1/2"></div>
                      <div className="w-12 h-8 bg-white rounded-t-2xl absolute top-1 left-1/2 transform -translate-x-1/2"></div>
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-600 rounded-full animate-pulse"></div>
                </div>
              </div>

              <p className="text-gray-600 text-base leading-relaxed mb-10 px-2 text-left">
                Inscrivez votre activité en quelques clics et rendez-vous visible auprès de milliers de visiteurs qui recherchent des services comme le vôtre. Créez votre fiche gratuitement, gérez vos informations, recevez des avis clients et développez votre présence en ligne facilement.
              </p>

        <button
      onClick={handleRegisterRedirect}
        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-8 rounded-xl transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl mb-6"
      >
        Inscrivez-vous gratuitement
      </button>

              <p className="text-sm text-gray-600 text-left">
                J'ai déjà un compte. 
                <a href="/Login" className="text-blue-600 hover:text-blue-700 font-medium ml-1 hover:underline transition-colors duration-200">
                  Je me connecte
                </a>
              </p>
            </div>
          </div>

          {/* Carte "Besoin d'aide" */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-900 rounded-2xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300"></div>
            <div className="relative bg-white rounded-2xl p-10 shadow-2xl transform group-hover:-translate-y-2 transition-all duration-300 border border-gray-100">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-gray-700 to-gray-900 rounded-t-2xl"></div>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-8 mt-4">
                Besoin d'aide
              </h2>

              {/* Icône moderne avec animation */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                    <div className="relative">
                      <div className="w-8 h-8 bg-white rounded-full absolute -top-2 left-1/2 transform -translate-x-1/2"></div>
                      <div className="w-12 h-8 bg-white rounded-t-2xl absolute top-1 left-1/2 transform -translate-x-1/2"></div>
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full animate-pulse"></div>
                </div>
              </div>

              <p className="text-gray-600 text-base leading-relaxed mb-10 px-2 text-left">
                Besoin d'un artisan, d'un prestataire ou d'un expert local ? Recherchez parmi des centaines de professionnels vérifiés, consultez les avis clients et contactez-les en un clic. Gagnez du temps et trouvez le bon pro en toute simplicité.
              </p>

      <button
     onClick={handleRegisterClient}
  aria-label="S'inscrire gratuitement"
  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-8 rounded-xl transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl mb-6"
>
  Inscrivez-vous gratuitement
</button>

              <p className="text-sm text-gray-600 text-left">
                J'ai déjà un compte. 
                <a href="/Login" className="text-blue-600 hover:text-blue-700 font-medium ml-1 hover:underline transition-colors duration-200">
                  Je me connecte
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Section de confiance ajoutée */}
        <div className="mt-20 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">100% Gratuit</h3>
              <p className="text-sm text-gray-600">Inscription sans frais</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <div className="w-8 h-8 bg-green-600 rounded-full"></div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Sécurisé</h3>
              <p className="text-sm text-gray-600">Données protégées</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <div className="w-8 h-8 bg-purple-600 rounded-full"></div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Support 24/7</h3>
              <p className="text-sm text-gray-600">Aide disponible</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinWap;