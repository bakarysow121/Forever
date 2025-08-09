import React from 'react';
import { Award, Users, Globe, Leaf, Shield, Heart } from 'lucide-react';

export const About: React.FC = () => {
  const stats = [
    { icon: Globe, value: '160+', label: 'Pays dans le monde' },
    { icon: Users, value: '40+', label: 'Années d\'expérience' },
    { icon: Award, value: '1er', label: 'Producteur mondial d\'Aloe Vera' },
    { icon: Heart, value: '1M+', label: 'Clients satisfaits' }
  ];

  const values = [
    {
      icon: Leaf,
      title: '100% Naturel',
      description: 'Tous nos produits sont élaborés à partir d\'ingrédients naturels de la plus haute qualité.'
    },
    {
      icon: Shield,
      title: 'Qualité Certifiée',
      description: 'Certification ISO et respect des normes internationales les plus strictes.'
    },
    {
      icon: Award,
      title: 'Excellence Reconnue',
      description: 'Leader mondial avec plus de 40 ans d\'expertise dans les produits bien-être.'
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            À propos de Forever Living Products
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Votre distributeur agréé Forever Living Products à Abidjan, 
            au service de votre bien-être depuis plus de 10 ans.
          </p>
        </div>

        {/* Histoire de l'entreprise */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              L'histoire Forever Living Products
            </h2>
            <div className="prose text-gray-600 space-y-4">
              <p>
                Fondée en 1978 par Rex Maughan, Forever Living Products est devenue 
                le leader mondial de l'Aloe Vera et des produits de bien-être naturels.
              </p>
              <p>
                Présente dans plus de 160 pays, Forever Living possède ses propres 
                plantations d'Aloe Vera et contrôle toute la chaîne de production, 
                de la culture à la commercialisation.
              </p>
              <p>
                En Côte d'Ivoire, nous sommes fiers d'être votre distributeur agréé 
                depuis plus de 10 ans, apportant les bienfaits de l'Aloe Vera 
                directement chez vous à Abidjan.
              </p>
            </div>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg"
              alt="Plantation Aloe Vera"
              className="rounded-xl shadow-lg w-full"
            />
          </div>
        </div>

        {/* Statistiques */}
        <div className="bg-green-50 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Forever Living en chiffres
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-3xl font-bold text-green-600 mb-2">{stat.value}</div>
                <div className="text-gray-700">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Nos valeurs */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Pourquoi choisir Forever Living ?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Engagement local */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 lg:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Notre engagement en Côte d'Ivoire
              </h3>
              <ul className="space-y-4 text-lg">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-4"></div>
                  Distributeur agréé et certifié Forever Living
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-4"></div>
                  Livraison gratuite dans tout Abidjan
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-4"></div>
                  Conseil personnalisé en français
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-4"></div>
                  Paiement mobile money accepté
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-4"></div>
                  Garantie satisfaction à 100%
                </li>
              </ul>
            </div>
            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/3825539/pexels-photo-3825539.jpeg"
                alt="Équipe Côte d'Ivoire"
                className="rounded-xl w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};