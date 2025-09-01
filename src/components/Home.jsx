import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center py-12">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              Welcome to Our
              <span className="text-primary-600"> React Router</span> App
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              A beautiful client-side routing application built with React Router DOM and Tailwind CSS.
              Navigate through different pages seamlessly without page reloads.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Link
                  to="/products"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg md:px-10 transition-colors duration-200"
                >
                  Explore Products
                </Link>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <Link
                  to="/about"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 transition-colors duration-200"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
    
          {/* Features Section */}
          <div className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="lg:text-center">
                <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">Features</h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  Everything you need for modern web navigation
                </p>
              </div>
    
              <div className="mt-10">
                <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                  <div className="relative">
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Fast Navigation</p>
                    <p className="mt-2 ml-16 text-base text-gray-500">
                      Instant page transitions without full page reloads for a smooth user experience.
                    </p>
                  </div>
    
                  <div className="relative">
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">URL Management</p>
                    <p className="mt-2 ml-16 text-base text-gray-500">
                      Clean URLs that can be bookmarked and shared with proper browser history support.
                    </p>
                  </div>
    
                  <div className="relative">
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                      </svg>
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Responsive Design</p>
                    <p className="mt-2 ml-16 text-base text-gray-500">
                      Beautiful, responsive UI built with Tailwind CSS that works on all devices.
                    </p>
                  </div>
    
                  <div className="relative">
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Secure Routing</p>
                    <p className="mt-2 ml-16 text-base text-gray-500">
                      Built-in protection against common routing vulnerabilities and edge cases.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Home
