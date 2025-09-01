import React from 'react'

const About = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
          About <span className="text-primary-600">Our Company</span>
        </h1>
        <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
          We're passionate about creating exceptional web experiences with modern technologies.
        </p>
      </div>

      {/* Mission Section */}
      <div className="py-12 bg-white rounded-lg shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Our Mission
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-500">
                To build innovative web applications that provide seamless user experiences through 
                cutting-edge technologies like React Router DOM and modern CSS frameworks.
              </p>
                              <div className="mt-8 sm:flex">
                  <div className="rounded-md shadow">
                    <button
                      className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
                    >
                      Get Started
                    </button>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <button
                      className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-primary-100 hover:bg-primary-200"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Our Values</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Innovation and creativity
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    User-centered design
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Quality and performance
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Continuous learning
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Meet Our Team
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              The talented people behind our success.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <div className="w-24 h-24 mx-auto bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-12 h-12 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900">John Doe</h3>
              <p className="text-primary-600">Frontend Developer</p>
              <p className="mt-2 text-sm text-gray-500">
                Expert in React and modern JavaScript frameworks.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <div className="w-24 h-24 mx-auto bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-12 h-12 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900">Jane Smith</h3>
              <p className="text-primary-600">UI/UX Designer</p>
              <p className="mt-2 text-sm text-gray-500">
                Creating beautiful and intuitive user experiences.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <div className="w-24 h-24 mx-auto bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-12 h-12 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900">Mike Johnson</h3>
              <p className="text-primary-600">Backend Developer</p>
              <p className="mt-2 text-sm text-gray-500">
                Building robust and scalable server solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
