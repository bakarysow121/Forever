import React from 'react';
import { Leaf, Award, Shield } from 'lucide-react';

export const Hero: React.FC = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/2250123456789?text=Bonjour, je souhaite découvrir vos produits Forever Living', '_blank');
  };

  return (
    <section className="relative bg-gradient-to-br from-green-50 to-yellow-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          {/* Content */}
          <div className="mb-12 lg:mb-0">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Bien-être naturel à{' '}
              <span className="text-green-600">Abidjan</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Découvrez les produits Forever Living Products, la référence mondiale 
              en compléments alimentaires et soins naturels à base d'Aloe Vera.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button
                onClick={handleWhatsApp}
                className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
              >
                Commander maintenant
              </button>
              <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-all duration-300">
                Découvrir les produits
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Leaf className="h-6 w-6 text-green-600" />
                </div>
                <p className="text-sm font-medium text-gray-700">100% Naturel</p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Award className="h-6 w-6 text-yellow-600" />
                </div>
                <p className="text-sm font-medium text-gray-700">Certifié Qualité</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <p className="text-sm font-medium text-gray-700">Distributeur Agréé</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/8101489/pexels-photo-8101489.jpeg"
                alt="Produits Forever Living"
                className="rounded-xl shadow-2xl w-full"
              />
            </div>
            <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-green-200 to-yellow-200 rounded-xl opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};