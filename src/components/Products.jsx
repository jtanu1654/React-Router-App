import React from 'react';
import { Link } from 'react-router-dom';



function Products() {
  const products = [
    {
      id: 1,
      name: 'Premium Laptop',
      price: '$1,299',
      description: 'High-performance laptop for professionals',
      image: '💻',
      category: 'Electronics'
    },
    {
      id: 2,
      name: 'Wireless Headphones',
      price: '$199',
      description: 'Noise-cancelling wireless headphones',
      image: '🎧',
      category: 'Audio'
    },
    {
      id: 3,
      name: 'Smart Watch',
      price: '$299',
      description: 'Feature-rich smartwatch with health tracking',
      image: '⌚',
      category: 'Wearables'
    },
    {
      id: 4,
      name: 'Gaming Mouse',
      price: '$79',
      description: 'Precision gaming mouse with RGB lighting',
      image: '🖱️',
      category: 'Gaming'
    },
    {
      id: 5,
      name: 'Mechanical Keyboard',
      price: '$149',
      description: 'Premium mechanical keyboard with tactile switches',
      image: '⌨️',
      category: 'Gaming'
    },
    {
      id: 6,
      name: '4K Monitor',
      price: '$399',
      description: 'Ultra-high definition monitor for content creation',
      image: '🖥️',
      category: 'Electronics'
    }
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
          Our <span className="text-primary-600">Products</span>
        </h1>
        <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
          Discover our collection of high-quality products designed to enhance your digital experience.
        </p>
      </div>

      {/* Filters */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 justify-center">
          <button className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors duration-200">
            All
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors duration-200">
            Electronics
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors duration-200">
            Audio
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors duration-200">
            Gaming
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors duration-200">
            Wearables
          </button>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
            <div className="p-6">
              <div className="text-4xl mb-4 text-center">{product.image}</div>
              <div className="mb-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                  {product.category}
                </span>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">{product.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-primary-600">{product.price}</span>
                <Link
                  to={`/products/${product.id}`}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors duration-200"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <div className="bg-primary-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Can't find what you're looking for?
          </h2>
          <p className="text-gray-600 mb-6">
            Contact our support team and we'll help you find the perfect product for your needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors duration-200"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Products;