import React from 'react';
import { MapPin, Phone, Mail, Clock, Truck, CreditCard, MessageCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const handleWhatsAppContact = () => {
    window.open('https://wa.me/2250123456789?text=Bonjour, je souhaite vous contacter', '_blank');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirection vers WhatsApp avec le message du formulaire
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const message = `Nouveau message de contact:
Nom: ${formData.get('name')}
Email: ${formData.get('email')}
Sujet: ${formData.get('subject')}
Message: ${formData.get('message')}`;
    
    window.open(`https://wa.me/2250123456789?text=${encodeURIComponent(message)}`, '_blank');
  };

  const paymentMethods = [
    { name: 'Orange Money', icon: '🟠' },
    { name: 'MTN Money', icon: '🟡' },
    { name: 'Wave', icon: '🔵' },
    { name: 'Espèces', icon: '💵' }
  ];

  const deliveryZones = [
    { zone: 'Cocody', price: 'Gratuit', time: '2h' },
    { zone: 'Plateau', price: 'Gratuit', time: '1h' },
    { zone: 'Marcory', price: 'Gratuit', time: '2h' },
    { zone: 'Yopougon', price: 'Gratuit', time: '3h' },
    { zone: 'Treichville', price: 'Gratuit', time: '1h30' },
    { zone: 'Autres communes', price: '2.000 FCFA', time: '4h' },
    { zone: 'Autres villes CI', price: 'Selon distance', time: '24-48h' }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Contact & Livraison
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nous sommes là pour vous accompagner dans votre parcours bien-être. 
            Contactez-nous pour toute question ou commande.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Informations de contact */}
          <div className="lg:col-span-1">
            <div className="bg-green-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Nos Coordonnées</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-green-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Adresse</h3>
                    <p className="text-gray-600">
                      Abidjan, Côte d'Ivoire<br />
                      Livraison dans toutes les communes
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-green-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">WhatsApp</h3>
                    <p className="text-gray-600">+225 01 23 45 67 89</p>
                    <button
                      onClick={handleWhatsAppContact}
                      className="text-green-600 hover:text-green-700 font-medium text-sm mt-1"
                    >
                      Contacter maintenant →
                    </button>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-green-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">contact@forever-abidjan.ci</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-green-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Horaires</h3>
                    <p className="text-gray-600">
                      Lun - Ven: 8h - 18h<br />
                      Sam: 9h - 16h<br />
                      Dim: Sur rendez-vous
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-white rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-3">Réponse rapide garantie</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Nous nous engageons à répondre à tous vos messages dans les 2 heures 
                  pendant nos heures d'ouverture.
                </p>
                <button
                  onClick={handleWhatsAppContact}
                  className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  WhatsApp Direct
                </button>
              </div>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Envoyez-nous un message</h2>
              
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Votre nom"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Sujet *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="commande">Nouvelle commande</option>
                    <option value="conseil">Demande de conseil</option>
                    <option value="livraison">Question sur la livraison</option>
                    <option value="produit">Information produit</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Décrivez votre demande..."
                  ></textarea>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-sm text-yellow-800">
                    <strong>Note:</strong> Ce formulaire vous redirigera vers WhatsApp pour un traitement 
                    plus rapide de votre demande. Nous privilégions WhatsApp pour une communication directe et efficace.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
                >
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Informations de livraison et paiement */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {/* Zones de livraison */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Truck className="h-6 w-6 text-green-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Zones de livraison</h3>
            </div>

            <div className="space-y-4">
              {deliveryZones.map((zone, index) => (
                <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{zone.zone}</p>
                    <p className="text-sm text-gray-600">Délai: {zone.time}</p>
                  </div>
                  <div className="text-right">
                    <p className={`font-semibold ${zone.price === 'Gratuit' ? 'text-green-600' : 'text-gray-900'}`}>
                      {zone.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-green-50 rounded-lg">
              <p className="text-sm text-green-800">
                <strong>Livraison express disponible:</strong> Commandes avant 14h livrées le jour même 
                dans certaines zones d'Abidjan (supplément de 3.000 FCFA).
              </p>
            </div>
          </div>

          {/* Moyens de paiement */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <CreditCard className="h-6 w-6 text-green-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Moyens de paiement</h3>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              {paymentMethods.map((method, index) => (
                <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <span className="text-2xl mr-3">{method.icon}</span>
                  <span className="font-medium text-gray-900">{method.name}</span>
                </div>
              ))}
            </div>

            <div className="space-y-4 text-sm text-gray-600">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Paiement à la livraison</h4>
                <p>Payez en espèces directement à la réception de votre commande.</p>
              </div>
              
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Mobile Money</h4>
                <p>Paiement sécurisé via Orange Money, MTN Money ou Wave avant expédition.</p>
              </div>

              <div className="p-4 bg-yellow-50 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">Sécurité garantie</h4>
                <p>Toutes les transactions sont sécurisées. Aucune information bancaire stockée.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Notre zone de service</h3>
          <div className="bg-white rounded-2xl shadow-lg p-4">
            <div className="aspect-video bg-gray-200 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Abidjan, Côte d'Ivoire
                </h4>
                <p className="text-gray-600">
                  Nous livrons dans toutes les communes d'Abidjan
                </p>
                <button
                  onClick={handleWhatsAppContact}
                  className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
                >
                  Vérifier votre zone
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};