import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Products from './components/Products'
import ProductDetail from './components/ProductDetail'
import NotFound from './components/NotFound'

function App() {  
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Navigation Header */}
        <nav className="bg-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <h1 className="text-xl font-bold text-primary-600">React Router App</h1>
                </div>
                <div className="hidden md:block ml-10">
                  <div className="flex items-baseline space-x-4">
                    <Link
                      to="/"
                      className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                    >
                      Home
                    </Link>
                    <Link
                      to="/about"
                      className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                    >
                      About
                    </Link>
                    <Link
                      to="/products"
                      className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                    >
                      Products
                    </Link>
                    <Link
                      to="/contact"
                      className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
