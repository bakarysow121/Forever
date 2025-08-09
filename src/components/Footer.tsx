import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, MessageCircle, Heart, Shield, Award } from 'lucide-react';

export const Footer: React.FC = () => {
  const handleWhatsAppContact = () => {
    window.open('https://wa.me/2250123456789?text=Bonjour, je souhaite en savoir plus sur Forever Living Products', '_blank');
  };

  const productCategories = [
    'Aloe Vera Gel',
    'Compléments nutritionnels',
    'Soins corporels',
    'Produits bien-être',
    'Détox et minceur',
    'Soins capillaires'
  ];

  const quickLinks = [
    'À propos',
    'Catalogue produits',
    'Témoignages',
    'Conseils bien-être',
    'FAQ',
    'Contact'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Section principale */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Informations entreprise */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="bg-green-600 text-white p-2 rounded-lg mr-3">
                <Heart className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Forever Living</h3>
                <p className="text-sm text-gray-400">Abidjan</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6">
              Votre distributeur agréé Forever Living Products en Côte d'Ivoire. 
              Bien-être naturel et produits de qualité depuis plus de 10 ans.
            </p>

            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center text-yellow-400">
                <Award className="h-5 w-5 mr-2" />
                <span className="text-sm">Distributeur Agréé</span>
              </div>
            </div>

            <div className="flex space-x-4">
              <button className="bg-green-600 hover:bg-green-700 p-2 rounded-lg transition-colors">
                <Facebook className="h-5 w-5" />
              </button>
              <button className="bg-green-600 hover:bg-green-700 p-2 rounded-lg transition-colors">
                <Instagram className="h-5 w-5" />
              </button>
              <button 
                onClick={handleWhatsAppContact}
                className="bg-green-600 hover:bg-green-700 p-2 rounded-lg transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Nos produits */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Nos Produits</h4>
            <ul className="space-y-3">
              {productCategories.map((product, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-green-400 transition-colors text-sm">
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Liens Rapides</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-green-400 transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300">
                    Abidjan, Côte d'Ivoire<br />
                    Livraison dans toutes les communes
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <Phone className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                <p className="text-sm text-gray-300">+225 01 23 45 67 89</p>
              </div>

              <div className="flex items-center">
                <Mail className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                <p className="text-sm text-gray-300">contact@forever-abidjan.ci</p>
              </div>
            </div>

            <button
              onClick={handleWhatsAppContact}
              className="mt-6 w-full bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              Contacter via WhatsApp
            </button>
          </div>
        </div>

        {/* Section avantages */}
        <div className="border-t border-gray-800 mt-12 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-green-600 p-3 rounded-full mb-4">
                <Shield className="h-6 w-6" />
              </div>
              <h5 className="font-semibold mb-2">Produits Authentiques</h5>
              <p className="text-sm text-gray-300">100% authentiques, directement du fabricant</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-green-600 p-3 rounded-full mb-4">
                <MessageCircle className="h-6 w-6" />
              </div>
              <h5 className="font-semibold mb-2">Support 7j/7</h5>
              <p className="text-sm text-gray-300">Conseils et assistance via WhatsApp</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-green-600 p-3 rounded-full mb-4">
                <Heart className="h-6 w-6" />
              </div>
              <h5 className="font-semibold mb-2">Satisfaction Garantie</h5>
              <p className="text-sm text-gray-300">Satisfait ou remboursé sous 30 jours</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section copyright */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="md:flex md:items-center md:justify-between">
            <div className="text-sm text-gray-400">
              <p>&copy; 2025 Forever Living Products Abidjan. Tous droits réservés.</p>
              <p className="mt-1">
                Distributeur agréé Forever Living Products en Côte d'Ivoire
              </p>
            </div>
            
            <div className="mt-4 md:mt-0">
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <a href="#" className="hover:text-green-400 transition-colors">
                  Politique de confidentialité
                </a>
                <a href="#" className="hover:text-green-400 transition-colors">
                  Conditions d'utilisation
                </a>
                <a href="#" className="hover:text-green-400 transition-colors">
                  Mentions légales
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bouton WhatsApp flottant */}
      <button
        onClick={handleWhatsAppContact}
        className="fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-2xl hover:bg-green-700 transition-all duration-300 transform hover:scale-110 z-50"
        aria-label="Contacter via WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    </footer>
  );
};