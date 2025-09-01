import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock product data - in a real app, this would come from an API
  const products = {
    1: {
      id: 1,
      name: 'Premium Laptop',
      price: '$1,299',
      originalPrice: '$1,599',
      description: 'High-performance laptop designed for professionals who demand the best. Features the latest Intel processor, 16GB RAM, and 512GB SSD.',
      longDescription: 'This premium laptop is built for power users who need exceptional performance for demanding tasks like video editing, 3D rendering, and software development. With its sleek aluminum design and cutting-edge specifications, it represents the perfect balance of style and substance.',
      image: '💻',
      category: 'Electronics',
      specs: {
        'Processor': 'Intel Core i7-12700H',
        'Memory': '16GB DDR4',
        'Storage': '512GB NVMe SSD',
        'Display': '15.6" 4K OLED',
        'Graphics': 'NVIDIA RTX 3060',
        'Battery': 'Up to 8 hours'
      },
      features: [
        'Backlit keyboard',
        'Fingerprint reader',
        'Thunderbolt 4 ports',
        'Wi-Fi 6E',
        'Bluetooth 5.2',
        'Premium audio system'
      ],
      inStock: true,
      rating: 4.8,
      reviews: 127
    },
    2: {
      id: 2,
      name: 'Wireless Headphones',
      price: '$199',
      originalPrice: '$249',
      description: 'Premium noise-cancelling wireless headphones with exceptional sound quality and comfort.',
      longDescription: 'Experience immersive audio with these premium wireless headphones. Featuring active noise cancellation technology, they block out ambient noise so you can focus on your music, calls, or work without distractions.',
      image: '🎧',
      category: 'Audio',
      specs: {
        'Driver Size': '40mm',
        'Frequency Response': '20Hz - 20kHz',
        'Battery Life': 'Up to 30 hours',
        'Connectivity': 'Bluetooth 5.0',
        'Noise Cancellation': 'Active',
        'Weight': '250g'
      },
      features: [
        'Active noise cancellation',
        'Touch controls',
        'Quick charge (10 min = 5 hours)',
        'Foldable design',
        'Built-in microphone',
        'Multi-device pairing'
      ],
      inStock: true,
      rating: 4.6,
      reviews: 89
    },
    3: {
      id: 3,
      name: 'Smart Watch',
      price: '$299',
      originalPrice: '$349',
      description: 'Feature-rich smartwatch with comprehensive health tracking and fitness monitoring.',
      longDescription: 'Stay connected and healthy with this advanced smartwatch. It tracks your heart rate, sleep patterns, workouts, and more, while keeping you connected to your phone with notifications and calls.',
      image: '⌚',
      category: 'Wearables',
      specs: {
        'Display': '1.4" AMOLED',
        'Battery Life': 'Up to 7 days',
        'Water Resistance': '5ATM',
        'Sensors': 'Heart rate, GPS, Accelerometer',
        'Compatibility': 'iOS & Android',
        'Weight': '45g'
      },
      features: [
        'Heart rate monitoring',
        'Sleep tracking',
        'GPS navigation',
        'Water resistant',
        'Customizable watch faces',
        'Music storage'
      ],
      inStock: false,
      rating: 4.7,
      reviews: 156
    },
    4: {
      id: 4,
      name: 'Gaming Mouse',
      price: '$79',
      originalPrice: '$99',
      description: 'Precision gaming mouse with RGB lighting and customizable buttons.',
      longDescription: 'Take your gaming to the next level with this high-precision gaming mouse. Featuring advanced optical sensors, customizable RGB lighting, and programmable buttons for ultimate control and personalization.',
      image: '🖱️',
      category: 'Gaming',
      specs: {
        'Sensor': 'Optical',
        'DPI': 'Up to 25,600',
        'Buttons': '7 Programmable',
        'RGB': '16.8M Colors',
        'Weight': '95g',
        'Cable': 'Braided'
      },
      features: [
        'High-precision optical sensor',
        'Customizable RGB lighting',
        'Programmable buttons',
        'On-the-fly DPI switching',
        'Braided cable',
        'Ergonomic design'
      ],
      inStock: true,
      rating: 4.5,
      reviews: 203
    },
    5: {
      id: 5,
      name: 'Mechanical Keyboard',
      price: '$149',
      originalPrice: '$179',
      description: 'Premium mechanical keyboard with tactile switches and backlighting.',
      longDescription: 'Experience the satisfying feel of mechanical switches with this premium keyboard. Perfect for both gaming and typing, featuring customizable backlighting and a durable aluminum frame.',
      image: '⌨️',
      category: 'Gaming',
      specs: {
        'Switches': 'Cherry MX Brown',
        'Layout': 'Full-size',
        'Backlighting': 'RGB',
        'Frame': 'Aluminum',
        'Cable': 'Detachable',
        'Weight': '1.2kg'
      },
      features: [
        'Mechanical switches',
        'RGB backlighting',
        'Aluminum frame',
        'Detachable cable',
        'Media controls',
        'Wrist rest included'
      ],
      inStock: true,
      rating: 4.6,
      reviews: 178
    },
    6: {
      id: 6,
      name: '4K Monitor',
      price: '$399',
      originalPrice: '$499',
      description: 'Ultra-high definition monitor for content creation and gaming.',
      longDescription: 'Immerse yourself in stunning 4K visuals with this professional-grade monitor. Perfect for content creators, designers, and gamers who demand the highest quality display.',
      image: '🖥️',
      category: 'Electronics',
      specs: {
        'Resolution': '3840 x 2160',
        'Panel': 'IPS',
        'Refresh Rate': '60Hz',
        'Response Time': '4ms',
        'Ports': 'HDMI, DisplayPort, USB-C',
        'Size': '27"'
      },
      features: [
        '4K Ultra HD resolution',
        'IPS panel technology',
        'HDR support',
        'Multiple connectivity options',
        'Adjustable stand',
        'Built-in speakers'
      ],
      inStock: true,
      rating: 4.8,
      reviews: 142
    }
  };

  const product = products[id];

  if (!product) {
    return (
      <div className="px-4 sm:px-6 lg:px-8 text-center py-12">
        <div className="max-w-md mx-auto">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-6">The product you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/products')}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors duration-200"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav className="flex mb-8" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link to="/" className="text-gray-700 hover:text-primary-600">
              Home
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
              </svg>
              <Link to="/products" className="ml-1 text-gray-700 hover:text-primary-600 md:ml-2">
                Products
              </Link>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
              </svg>
              <span className="ml-1 text-gray-500 md:ml-2">{product.name}</span>
            </div>
          </li>
        </ol>
      </nav>

      <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10">
        {/* Product Image */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg p-8 text-center">
            <div className="text-8xl mb-6">{product.image}</div>
            <div className="flex justify-center space-x-2">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                {product.category}
              </span>
              {product.inStock ? (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  In Stock
                </span>
              ) : (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  Out of Stock
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
            
            {/* Rating */}
            <div className="flex items-center mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-600">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="mb-6">
              <span className="text-3xl font-bold text-primary-600">{product.price}</span>
              {product.originalPrice && (
                <span className="ml-2 text-lg text-gray-500 line-through">{product.originalPrice}</span>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-600 mb-6">{product.longDescription}</p>

            {/* Features */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-4 h-4 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Specifications */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Specifications</h3>
              <div className="grid grid-cols-1 gap-2">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">{key}</span>
                    <span className="font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <button
                disabled={!product.inStock}
                className="flex-1 bg-primary-600 text-white py-3 px-6 rounded-md font-medium hover:bg-primary-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200"
              >
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </button>
              <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md font-medium hover:bg-gray-50 transition-colors duration-200">
                Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;