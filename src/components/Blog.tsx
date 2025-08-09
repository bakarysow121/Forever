import React from 'react';
import { Calendar, User, ArrowRight, Heart, Eye } from 'lucide-react';

export const Blog: React.FC = () => {
  const articles = [
    {
      id: 1,
      title: 'Les 7 bienfaits de l\'Aloe Vera pour votre santé',
      excerpt: 'Découvrez comment l\'Aloe Vera peut améliorer votre digestion, renforcer votre immunité et vous donner plus d\'énergie au quotidien.',
      image: 'https://images.pexels.com/photos/6195116/pexels-photo-6195116.jpeg',
      category: 'Nutrition',
      author: 'Dr. Aminata Koné',
      date: '15 Janvier 2025',
      readTime: '5 min',
      views: 1250,
      likes: 89
    },
    {
      id: 2,
      title: 'Programme détox de 9 jours : Guide complet',
      excerpt: 'Tout ce que vous devez savoir sur le programme C9 de Forever Living pour perdre du poids et retrouver votre vitalité.',
      image: 'https://images.pexels.com/photos/6195049/pexels-photo-6195049.jpeg',
      category: 'Détox',
      author: 'Jean-Baptiste Ouattara',
      date: '10 Janvier 2025',
      readTime: '8 min',
      views: 2100,
      likes: 156
    },
    {
      id: 3,
      title: 'Soins naturels : Prendre soin de sa peau à Abidjan',
      excerpt: 'Conseils adaptés au climat tropical ivoirien pour une peau éclatante avec les produits Forever Living.',
      image: 'https://images.pexels.com/photos/5069432/pexels-photo-5069432.jpeg',
      category: 'Soins',
      author: 'Marie-Claire Diabaté',
      date: '8 Janvier 2025',
      readTime: '6 min',
      views: 980,
      likes: 67
    },
    {
      id: 4,
      title: 'Boost d\'énergie naturel avec Forever Multi-Maca',
      excerpt: 'Comment ce superaliment péruvien peut transformer votre niveau d\'énergie et votre performance physique.',
      image: 'https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg',
      category: 'Énergie',
      author: 'Kouadio Sports',
      date: '5 Janvier 2025',
      readTime: '4 min',
      views: 1450,
      likes: 123
    },
    {
      id: 5,
      title: 'Renforcer son immunité pendant la saison des pluies',
      excerpt: 'Les produits Forever Living essentiels pour maintenir vos défenses naturelles pendant l\'hivernage.',
      image: 'https://images.pexels.com/photos/8828590/pexels-photo-8828590.jpeg',
      category: 'Immunité',
      author: 'Dr. Aminata Koné',
      date: '2 Janvier 2025',
      readTime: '7 min',
      views: 1800,
      likes: 134
    },
    {
      id: 6,
      title: 'Témoignage : Ma transformation avec Forever Living',
      excerpt: 'L\'histoire inspirante de Fatou, 32 ans, qui a retrouvé confiance et vitalité grâce aux produits Forever.',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg',
      category: 'Témoignage',
      author: 'Fatou Traoré',
      date: '30 Décembre 2024',
      readTime: '3 min',
      views: 2500,
      likes: 201
    }
  ];

  const categories = ['Tous', 'Nutrition', 'Détox', 'Soins', 'Énergie', 'Immunité', 'Témoignage'];
  const [selectedCategory, setSelectedCategory] = React.useState('Tous');

  const filteredArticles = selectedCategory === 'Tous' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  const handleWhatsAppContact = () => {
    window.open('https://wa.me/2250123456789?text=Bonjour, j\'aimerais en savoir plus sur vos conseils bien-être', '_blank');
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Conseils Bien-être
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Découvrez nos articles, conseils et témoignages pour optimiser votre bien-être 
            avec les produits Forever Living Products.
          </p>
          
          <button
            onClick={handleWhatsAppContact}
            className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300"
          >
            Conseil personnalisé via WhatsApp
          </button>
        </div>

        {/* Filtres par catégorie */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-green-50 hover:text-green-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Article vedette */}
        {filteredArticles.length > 0 && (
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12 hover:shadow-xl transition-shadow duration-300">
            <div className="lg:grid lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <img
                  src={filteredArticles[0].image}
                  alt={filteredArticles[0].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Article vedette
                  </span>
                </div>
              </div>
              
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                    {filteredArticles[0].category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    {filteredArticles[0].date}
                  </div>
                </div>
                
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  {filteredArticles[0].title}
                </h2>
                
                <p className="text-gray-600 mb-6 text-lg">
                  {filteredArticles[0].excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <User className="h-4 w-4 text-gray-400 mr-2" />
                    <span className="text-sm text-gray-600">{filteredArticles[0].author}</span>
                    <span className="mx-2 text-gray-400">•</span>
                    <span className="text-sm text-gray-600">{filteredArticles[0].readTime} de lecture</span>
                  </div>
                  
                  <button className="flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors">
                    Lire l'article
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Grille d'articles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.slice(1).map(article => (
            <article
              key={article.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-green-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    {article.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Calendar className="h-4 w-4 mr-1" />
                  {article.date}
                  <span className="mx-2">•</span>
                  {article.readTime}
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between border-t pt-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Eye className="h-4 w-4 mr-1" />
                    {article.views.toLocaleString()}
                    <Heart className="h-4 w-4 ml-4 mr-1" />
                    {article.likes}
                  </div>
                  
                  <button className="text-green-600 font-semibold text-sm hover:text-green-700 transition-colors flex items-center">
                    Lire
                    <ArrowRight className="h-3 w-3 ml-1" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-gray-500">Aucun article trouvé dans cette catégorie.</p>
            <button
              onClick={() => setSelectedCategory('Tous')}
              className="mt-4 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              Voir tous les articles
            </button>
          </div>
        )}

        {/* Newsletter */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 mt-16">
          <div className="text-center text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Restez informé de nos derniers conseils
            </h3>
            <p className="text-lg mb-8 opacity-90">
              Recevez nos meilleurs articles bien-être directement sur WhatsApp
            </p>
            <button
              onClick={handleWhatsAppContact}
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              S'abonner aux conseils WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};