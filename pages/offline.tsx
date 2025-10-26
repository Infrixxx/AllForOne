 import Head from 'next/head';
import Link from 'next/link';

export default function Offline() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Offline - AllForOne</title>
      </Head>

      <div className="max-w-md w-full text-center">
        <div className="mx-auto w-20 h-20 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mb-6">
          <span className="text-white font-bold text-2xl">A</span>
        </div>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4">You're Offline</h1>
        
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-6">
          <div className="flex items-center justify-center mb-2">
            <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
            <span className="text-yellow-800 font-medium">Offline Mode</span>
          </div>
          <p className="text-yellow-700 text-sm">
            Don't worry! You can still access downloaded courses and use basic features.
          </p>
        </div>

        <p className="text-gray-600 mb-8">
          AllForOne works without internet connection. Your downloaded courses and learning progress are still available.
        </p>

        <div className="space-y-4">
          <Link 
            href="/courses"
            className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-600 transition-colors block"
          >
            Continue Learning
          </Link>
          
          <Link 
            href="/"
            className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors block"
          >
            Back to Home
          </Link>
        </div>

        <div className="mt-8 p-4 bg-white rounded-xl border border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-2">Available Offline</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>✓ Downloaded courses and lessons</li>
            <li>✓ Learning progress tracking</li>
            <li>✓ Basic AI responses</li>
            <li>✓ Quiz completion</li>
          </ul>
        </div>
      </div>
    </div>
  );
}