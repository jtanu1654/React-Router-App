import React from 'react'
import { Link } from 'react-router-dom'


const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8 text-center">
            <div>
              {/* 404 Icon */}
              <div className="mx-auto h-24 w-24 text-primary-600">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              
              <h1 className="mt-6 text-9xl font-bold text-gray-900">404</h1>
              <h2 className="mt-4 text-3xl font-bold text-gray-900">Page Not Found</h2>
              <p className="mt-2 text-lg text-gray-600">
                Sorry, we couldn't find the page you're looking for.
              </p>
            </div>
    
            <div className="space-y-4">
              <p className="text-gray-500">
                The page you requested might have been moved, deleted, or you entered the wrong URL.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors duration-200"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Go Home
                </Link>
                
                <button
                  onClick={() => window.history.back()}
                  className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Go Back
                </button>
              </div>
            </div>
    
            {/* Quick Links */}
            <div className="mt-12">
              <h3 className="text-sm font-medium text-gray-900 mb-4">Popular Pages</h3>
              <div className="grid grid-cols-2 gap-4">
                <Link
                  to="/products"
                  className="text-sm text-primary-600 hover:text-primary-700 transition-colors duration-200"
                >
                  Products
                </Link>
                <Link
                  to="/about"
                  className="text-sm text-primary-600 hover:text-primary-700 transition-colors duration-200"
                >
                  About Us
                </Link>
                <Link
                  to="/contact"
                  className="text-sm text-primary-600 hover:text-primary-700 transition-colors duration-200"
                >
                  Contact
                </Link>
                <Link
                  to="/"
                  className="text-sm text-primary-600 hover:text-primary-700 transition-colors duration-200"
                >
                  Home
                </Link>
              </div>
            </div>
          </div>
        </div>
  )
}

export default NotFound
