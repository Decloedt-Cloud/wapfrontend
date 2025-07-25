import React, { useState, useEffect } from 'react';
import { CheckCircle, Mail, ArrowRight } from 'lucide-react';

function Confirmregisterpopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [buttonHovered, setButtonHovered] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className={`max-w-md w-full transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        
        {/* Main Card */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl shadow-blue-500/10 border border-white/20 p-8 text-center relative overflow-hidden">
          
          {/* Subtle background pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-3xl"></div>
          
          {/* Content */}
          <div className="relative z-10">
            
            {/* Success Icon with Animation */}
            <div className="mb-8 relative">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/25 animate-pulse">
                <CheckCircle className="w-10 h-10 text-white" strokeWidth={2.5} />
              </div>
              
              {/* Decorative rings */}
              <div className="absolute inset-0 w-20 h-20 mx-auto rounded-full border-2 border-green-400/30 animate-ping"></div>
              <div className="absolute inset-0 w-24 h-24 mx-auto rounded-full border border-green-400/20 top-[-8px] left-1/2 transform -translate-x-1/2 animate-pulse"></div>
            </div>

            {/* Title */}
            <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-6">
              On y est presque.
            </h1>

            {/* Description */}
            <div className="mb-8 space-y-2">
              <div className="flex items-center justify-center gap-2 text-slate-600 mb-2">
                <Mail className="w-5 h-5 text-blue-500" />
                <span className="text-sm font-medium">Email de confirmation</span>
              </div>
              <p className="text-slate-600 leading-relaxed text-base">
                Un lien a été envoyé vers votre boîte mail pour confirmer votre inscription
              </p>
            </div>

            {/* Action Button */}
            <button
              onMouseEnter={() => setButtonHovered(true)}
              onMouseLeave={() => setButtonHovered(false)}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 ease-out transform hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/25 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative flex items-center justify-center gap-2">
                <span>Renvoyer l'email de confirmation</span>
                <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${
                  buttonHovered ? 'translate-x-1' : ''
                }`} />
              </div>
            </button>

            {/* Additional Info */}
            <div className="mt-6 pt-6 border-t border-slate-200/50">
              <p className="text-sm text-slate-500">
                Vérifiez votre dossier spam si vous ne recevez pas l'email dans les prochaines minutes
              </p>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-green-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>
    </div>
  );
}

export default Confirmregisterpopup;