import React, { useState } from 'react';
import { ShoppingCart, Heart, Eye, Filter } from 'lucide-react';

export const ProductCatalog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [priceRange, setPriceRange] = useState('Tous');

  const categories = ['Tous', 'Nutrition & Compléments', 'Soins corporels', 'Bien-être'];
  const priceRanges = ['Tous', '0-20.000 FCFA', '20.000-40.000 FCFA', '40.000+ FCFA'];

  const products = [
    {
      id: 1,
      name: 'Aloe Vera Gel',
      category: 'Nutrition & Compléments',
      price: 25000,
      originalPrice: 28000,
      rating: 4.9,
      reviews: 127,
      image: 'https://images.pexels.com/photos/6195116/pexels-photo-6195116.jpeg',
      description: 'Gel d\'Aloe Vera pur à 99,7% pour une santé optimale',
      benefits: ['Système digestif', 'Immunité', 'Énergie naturelle'],
      inStock: true,
      isPopular: true
    },
    {
      id: 2,
      name: 'Forever Bee Propolis',
      category: 'Nutrition & Compléments',
      price: 18500,
      rating: 4.8,
      reviews: 89,
      image: 'https://images.pexels.com/photos/8828590/pexels-photo-8828590.jpeg',
      description: 'Complément alimentaire à base de propolis d\'abeille',
      benefits: ['Défenses naturelles', 'Antioxydant', 'Bien-être général'],
      inStock: true
    },
    {
      id: 3,
      name: 'Aloe Moisturizing Lotion',
      category: 'Soins corporels',
      price: 22000,
      rating: 4.7,
      reviews: 156,
      image: 'https://images.pexels.com/photos/5069432/pexels-photo-5069432.jpeg',
      description: 'Lotion hydratante à l\'Aloe Vera pour tous types de peau',
      benefits: ['Hydratation', 'Peau douce', 'Anti-âge naturel'],
      inStock: true
    },
    {
      id: 4,
      name: 'Forever Multi-Maca',
      category: 'Bien-être',
      price: 28000,
      rating: 4.9,
      reviews: 94,
      image: 'https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg',
      description: 'Complément énergisant à base de maca péruvien',
      benefits: ['Énergie', 'Vitalité', 'Performance naturelle'],
      inStock: true
    },
    {
      id: 5,
      name: 'Aloe Vera Shampoo',
      category: 'Soins corporels',
      price: 19500,
      rating: 4.6,
      reviews: 73,
      image: 'https://images.pexels.com/photos/7790655/pexels-photo-7790655.jpeg',
      description: 'Shampooing doux à l\'Aloe Vera pour cheveux brillants',
      benefits: ['Cheveux brillants', 'Cuir chevelu sain', 'Douceur naturelle'],
      inStock: false
    },
    {
      id: 6,
      name: 'Forever C9 Détox',
      category: 'Bien-être',
      price: 42000,
      originalPrice: 48000,
      rating: 4.8,
      reviews: 112,
      image: 'https://images.pexels.com/photos/6195049/pexels-photo-6195049.jpeg',
      description: 'Programme de détoxification de 9 jours',
      benefits: ['Détoxification', 'Perte de poids', 'Énergie renouvelée'],
      inStock: true,
      isPopular: true
    }
  ];

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === 'Tous' || product.category === selectedCategory;
    
    let priceMatch = true;
    if (priceRange !== 'Tous') {
      if (priceRange === '0-20.000 FCFA') priceMatch = product.price <= 20000;
      else if (priceRange === '20.000-40.000 FCFA') priceMatch = product.price > 20000 && product.price <= 40000;
      else if (priceRange === '40.000+ FCFA') priceMatch = product.price > 40000;
    }
    
    return categoryMatch && priceMatch;
  });

  const handleWhatsAppOrder = (productName: string, price: number) => {
    const message = `Bonjour, je souhaite commander le produit: ${productName} (${price.toLocaleString()} FCFA)`;
    window.open(`https://wa.me/2250123456789?text=${encodeURIComponent(message)}`, '_blank');
  };

  const formatPrice = (price: number) => price.toLocaleString();

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Notre Catalogue
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez toute notre gamme de produits Forever Living Products
          </p>
        </div>

        {/* Filtres */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Filter className="h-5 w-5 text-gray-500" />
            <h3 className="font-semibold text-gray-900">Filtrer les produits</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Catégorie</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Prix</label>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                {priceRanges.map(range => (
                  <option key={range} value={range}>{range}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Nombre de produits trouvés */}
        <div className="mb-8">
          <p className="text-gray-600">
            {filteredProducts.length} produit{filteredProducts.length > 1 ? 's' : ''} trouvé{filteredProducts.length > 1 ? 's' : ''}
          </p>
        </div>

        {/* Grille de produits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative"
            >
              {/* Badges */}
              <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                {product.isPopular && (
                  <span className="bg-yellow-400 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    Populaire
                  </span>
                )}
                {product.originalPrice && (
                  <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    Promo
                  </span>
                )}
                {!product.inStock && (
                  <span className="bg-gray-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    Épuisé
                  </span>
                )}
              </div>

              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className={`w-full h-64 object-cover ${!product.inStock ? 'filter grayscale' : ''}`}
                />
                <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg">
                  <Heart className="h-5 w-5 text-gray-400 hover:text-red-500 cursor-pointer transition-colors" />
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-green-600 font-medium">{product.category}</span>
                  <div className="flex items-center">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}>★</span>
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 ml-1">({product.reviews})</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4 text-sm">{product.description}</p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {product.benefits.map((benefit, index) => (
                    <span
                      key={index}
                      className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-green-600">
                        {formatPrice(product.price)} FCFA
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          {formatPrice(product.originalPrice)} FCFA
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <button className="p-2 border border-gray-300 rounded-lg hover:border-green-500 transition-colors">
                      <Eye className="h-5 w-5 text-gray-500 hover:text-green-500" />
                    </button>
                    <button
                      onClick={() => handleWhatsAppOrder(product.name, product.price)}
                      disabled={!product.inStock}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 ${
                        product.inStock
                          ? 'bg-green-600 text-white hover:bg-green-700 hover:scale-105'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      <ShoppingCart className="h-4 w-4" />
                      {product.inStock ? 'Commander' : 'Indisponible'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-gray-500">Aucun produit trouvé avec ces filtres.</p>
            <button
              onClick={() => {
                setSelectedCategory('Tous');
                setPriceRange('Tous');
              }}
              className="mt-4 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}
      </div>
    </section>
  );
};