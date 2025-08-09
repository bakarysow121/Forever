import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    if (openItems.includes(index)) {
      setOpenItems(openItems.filter(item => item !== index));
    } else {
      setOpenItems([...openItems, index]);
    }
  };

  const handleWhatsAppContact = () => {
    window.open('https://wa.me/2250123456789?text=Bonjour, j\'ai une question qui ne figure pas dans la FAQ', '_blank');
  };

  const faqData = [
    {
      category: 'Produits',
      questions: [
        {
          question: 'Qu\'est-ce qui rend les produits Forever Living uniques ?',
          answer: 'Les produits Forever Living sont fabriqués à partir d\'Aloe Vera pur à 99,7%, cultivé sur nos propres plantations. Nous contrôlons toute la chaîne de production, de la culture à la commercialisation, garantissant ainsi une qualité exceptionnelle. Nos produits sont certifiés sans pesticides, sans herbicides et répondent aux normes internationales les plus strictes.'
        },
        {
          question: 'Les produits Forever Living sont-ils sûrs et naturels ?',
          answer: 'Oui, absolument. Tous nos produits sont 100% naturels et ont été testés scientifiquement. Forever Living Products est certifié par le International Aloe Science Council et respecte les normes GMP (Good Manufacturing Practices). Nos produits ne contiennent pas de conservateurs artificiels nocifs.'
        },
        {
          question: 'Comment utiliser l\'Aloe Vera Gel ?',
          answer: 'L\'Aloe Vera Gel se prend à raison de 30-60ml par jour, de préférence à jeun le matin. Vous pouvez le boire pur ou le diluer dans un jus de fruits. Pour une cure détox, commencez par de petites doses et augmentez progressivement.'
        },
        {
          question: 'Y a-t-il des effets secondaires ?',
          answer: 'Les produits Forever Living sont naturels et généralement bien tolérés. Cependant, comme pour tout complément alimentaire, nous recommandons de consulter un professionnel de santé si vous êtes enceinte, allaitante, ou si vous suivez un traitement médical.'
        }
      ]
    },
    {
      category: 'Commandes & Livraison',
      questions: [
        {
          question: 'Comment passer une commande ?',
          answer: 'C\'est très simple ! Vous pouvez commander directement via WhatsApp en cliquant sur les boutons "Commander" sur notre site. Envoyez-nous un message avec les produits souhaités, et nous vous confirmerons la disponibilité et le prix total.'
        },
        {
          question: 'Quels sont les délais de livraison à Abidjan ?',
          answer: 'Pour Abidjan, nous livrons généralement dans les 2-4 heures pour les zones centrales (Plateau, Marcory, Treichville). Pour les autres communes, comptez 3-6 heures. Les commandes passées après 16h sont livrées le lendemain matin.'
        },
        {
          question: 'La livraison est-elle gratuite ?',
          answer: 'Oui, la livraison est gratuite dans toutes les communes d\'Abidjan pour les commandes de 15.000 FCFA et plus. Pour les montants inférieurs, des frais de livraison de 2.000 FCFA s\'appliquent.'
        },
        {
          question: 'Livrez-vous dans d\'autres villes de Côte d\'Ivoire ?',
          answer: 'Oui, nous livrons partout en Côte d\'Ivoire via transport terrestre. Les délais varient de 24h à 48h selon la destination. Les frais de livraison sont calculés selon la distance et vous sont communiqués avant confirmation de commande.'
        }
      ]
    },
    {
      category: 'Paiement',
      questions: [
        {
          question: 'Quels moyens de paiement acceptez-vous ?',
          answer: 'Nous acceptons Orange Money, MTN Money, Wave, ainsi que le paiement en espèces à la livraison. Pour les paiements mobile money, nous vous envoyons les coordonnées de paiement via WhatsApp.'
        },
        {
          question: 'Peut-on payer à la livraison ?',
          answer: 'Oui, nous acceptons le paiement en espèces à la livraison dans toute la zone d\'Abidjan. C\'est une option très appréciée par nos clients qui préfèrent voir leurs produits avant de payer.'
        },
        {
          question: 'Les paiements sont-ils sécurisés ?',
          answer: 'Absolument. Tous nos paiements mobile money sont sécurisés par les opérateurs télécom. Nous ne stockons aucune information de paiement et toutes les transactions sont tracées.'
        }
      ]
    },
    {
      category: 'Authenticité & Garantie',
      questions: [
        {
          question: 'Comment savoir si les produits sont authentiques ?',
          answer: 'Nous sommes distributeur agréé Forever Living Products en Côte d\'Ivoire. Tous nos produits proviennent directement du fabricant et portent les hologrammes de sécurité officiels. Vous pouvez vérifier l\'authenticité sur le site officiel Forever Living.'
        },
        {
          question: 'Offrez-vous une garantie sur vos produits ?',
          answer: 'Oui, nous offrons une garantie satisfait ou remboursé de 30 jours sur tous nos produits. Si vous n\'êtes pas satisfait, nous reprenons le produit non entamé et vous remboursons intégralement.'
        },
        {
          question: 'Que faire si je reçois un produit défectueux ?',
          answer: 'Dans le rare cas d\'un produit défectueux, contactez-nous immédiatement via WhatsApp avec une photo du produit. Nous organisons l\'échange gratuit sous 24h. Votre satisfaction est notre priorité absolue.'
        }
      ]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Questions Fréquentes
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Trouvez rapidement les réponses à vos questions sur nos produits Forever Living Products
          </p>
          
          <button
            onClick={handleWhatsAppContact}
            className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 flex items-center mx-auto"
          >
            <MessageCircle className="h-5 w-5 mr-2" />
            Poser une question via WhatsApp
          </button>
        </div>

        {/* FAQ par catégorie */}
        <div className="space-y-8">
          {faqData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-green-600 text-white p-6">
                <h2 className="text-2xl font-bold">{category.category}</h2>
              </div>
              
              <div className="divide-y divide-gray-200">
                {category.questions.map((item, itemIndex) => {
                  const globalIndex = categoryIndex * 10 + itemIndex;
                  const isOpen = openItems.includes(globalIndex);
                  
                  return (
                    <div key={itemIndex}>
                      <button
                        onClick={() => toggleItem(globalIndex)}
                        className="w-full text-left p-6 hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:bg-gray-50"
                      >
                        <div className="flex justify-between items-start">
                          <h3 className="text-lg font-semibold text-gray-900 pr-4">
                            {item.question}
                          </h3>
                          <div className="flex-shrink-0">
                            {isOpen ? (
                              <ChevronUp className="h-5 w-5 text-green-600" />
                            ) : (
                              <ChevronDown className="h-5 w-5 text-gray-400" />
                            )}
                          </div>
                        </div>
                      </button>
                      
                      {isOpen && (
                        <div className="px-6 pb-6">
                          <div className="prose text-gray-600 max-w-none">
                            {item.answer}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Section contact pour autres questions */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            Vous ne trouvez pas la réponse à votre question ?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Notre équipe est disponible pour répondre à toutes vos questions spécifiques sur WhatsApp
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white bg-opacity-10 rounded-lg p-4">
              <h4 className="font-semibold mb-2">Réponse rapide</h4>
              <p className="text-sm opacity-80">Nous répondons en moins de 2h pendant nos heures d'ouverture</p>
            </div>
            
            <div className="bg-white bg-opacity-10 rounded-lg p-4">
              <h4 className="font-semibold mb-2">Conseil personnalisé</h4>
              <p className="text-sm opacity-80">Conseils adaptés à vos besoins spécifiques</p>
            </div>
            
            <div className="bg-white bg-opacity-10 rounded-lg p-4">
              <h4 className="font-semibold mb-2">Support technique</h4>
              <p className="text-sm opacity-80">Aide pour vos commandes et livraisons</p>
            </div>
          </div>
          
          <button
            onClick={handleWhatsAppContact}
            className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center mx-auto"
          >
            <MessageCircle className="h-5 w-5 mr-3" />
            Contacter notre équipe
          </button>
        </div>

        {/* Tips section */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-blue-50 rounded-xl p-6">
            <h3 className="text-lg font-bold text-blue-900 mb-3">💡 Conseil</h3>
            <p className="text-blue-800">
              Pour une première commande, nous recommandons de commencer par notre pack découverte 
              qui inclut l'Aloe Vera Gel et un produit de soin adapté à vos besoins.
            </p>
          </div>
          
          <div className="bg-yellow-50 rounded-xl p-6">
            <h3 className="text-lg font-bold text-yellow-900 mb-3">⚡ Info express</h3>
            <p className="text-yellow-800">
              Les commandes passées avant 14h sont généralement livrées le jour même 
              dans les zones centrales d'Abidjan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};