 import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    setIsOnline(navigator.onLine);
    
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <Head>
        <title>AllForOne - AI-Powered Digital Inclusion</title>
        <meta name="description" content="Learn digital skills offline with AI assistance" />
      </Head>

      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="ml-3 text-xl font-bold text-gray-900">AllForOne</span>
            </div>
            
            <nav className="flex space-x-8">
              <Link href="/courses" className="text-gray-600 hover:text-gray-900 font-medium">
                Courses
              </Link>
              <Link href="/login" className="text-gray-600 hover:text-gray-900 font-medium">
                Login
              </Link>
              <Link 
                href="/register" 
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Get Started
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Learn <span className="text-blue-500">Digital Skills</span>
            <br />
            <span className="text-green-500">Anywhere, Anytime</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            AllForOne brings AI-powered education to every South African. 
            Learn digital literacy, entrepreneurship, and financial skills — 
            even without internet access.
          </p>

          {/* Offline Status Badge */}
          {!isOnline && (
            <div className="inline-flex items-center bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full mb-8">
              <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
              Learning in offline mode
            </div>
          )}

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link 
              href="/register" 
              className="bg-blue-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-colors shadow-lg"
            >
              Start Learning Free
            </Link>
            <Link 
              href="/courses" 
              className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Browse Courses
            </Link>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-blue-500 text-xl">🤖</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">AI-Powered Tutor</h3>
              <p className="text-gray-600">
                Get instant answers and personalized guidance from our AI assistant, even offline.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-green-500 text-xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Works Offline</h3>
              <p className="text-gray-600">
                Download courses once and learn anywhere. No data costs, no connectivity issues.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-purple-500 text-xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Real Skills</h3>
              <p className="text-gray-600">
                Digital literacy, entrepreneurship, financial skills — everything you need to succeed.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 AllForOne. Empowering South Africans through digital inclusion.</p>
        </div>
      </footer>
    </div>
  );
}