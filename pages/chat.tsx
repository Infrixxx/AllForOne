import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import AIChat from '../components/AIChat';

export default function ChatPage() {
  const [selectedCourse, setSelectedCourse] = useState('General Learning');

  const courses = [
    { id: 'digital', name: 'Digital Literacy' },
    { id: 'business', name: 'Entrepreneurship' },
    { id: 'money', name: 'Financial Skills' },
    { id: 'jobs', name: 'Job Readiness' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <Head>
        <title>AI Tutor - AllForOne</title>
        <meta name="description" content="Chat with your AI learning assistant" />
      </Head>

      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="ml-3 text-xl font-bold text-gray-900">AllForOne</span>
            </Link>
            
            <nav className="flex space-x-8">
              <Link href="/courses" className="text-gray-600 hover:text-gray-900 font-medium">
                Courses
              </Link>
              <Link href="/" className="text-gray-600 hover:text-gray-900 font-medium">
                Home
              </Link>
              <Link 
                href="/register" 
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Sign Up
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Your AI Learning Assistant
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get personalized help with digital skills, entrepreneurship, financial literacy, and job readiness. 
            Powered by DeepSeek AI to provide you with relevant, practical guidance for South Africa.
          </p>
        </div>

        {/* Course Selection */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Learning Focus</h2>
              <p className="text-gray-600">Select a topic to help me provide better guidance</p>
            </div>
            <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
              AI Powered
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {courses.map(course => (
              <button
                key={course.id}
                onClick={() => setSelectedCourse(course.name)}
                className={`p-3 rounded-lg border-2 text-center transition-all ${
                  selectedCourse === course.name
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                }`}
              >
                <div className="font-medium">{course.name}</div>
              </button>
            ))}
          </div>
        </div>

        {/* AI Chat Component */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          <AIChat courseContext={selectedCourse} />
        </div>

        {/* Tips & Examples */}
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
            <h3 className="font-semibold text-blue-900 mb-3 flex items-center">
              <span className="text-lg mr-2">💡</span>
              Tips for Best Results
            </h3>
            <ul className="text-blue-800 space-y-2">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Ask specific questions about what you're learning</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Request examples relevant to South Africa</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Ask for step-by-step instructions</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Request practical exercises or next steps</span>
              </li>
            </ul>
          </div>

          <div className="bg-green-50 rounded-lg p-6 border border-green-200">
            <h3 className="font-semibold text-green-900 mb-3 flex items-center">
              <span className="text-lg mr-2">🎯</span>
              Example Questions
            </h3>
            <ul className="text-green-800 space-y-2">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>"How do I create a WhatsApp business account?"</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>"What small business can I start with R500?"</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>"How do I write a simple CV with no experience?"</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>"What are basic online safety tips?"</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Offline Notice */}
        <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
              <span className="text-yellow-600 text-sm">📱</span>
            </div>
            <div>
              <h4 className="font-semibold text-yellow-800">Offline Learning Ready</h4>
              <p className="text-yellow-700 text-sm">
                While the AI chat requires internet, all our courses and learning materials work offline once downloaded.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}