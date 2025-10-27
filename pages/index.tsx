import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  const [isOnline, setIsOnline] = useState(true);
  const [showAuthSetup, setShowAuthSetup] = useState(true);

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
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>AllForOne - AI-Powered Digital Inclusion</title>
        <meta name="description" content="Learn digital skills offline with AI assistance" />
      </Head>

      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
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

      {/* Dashboard Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Authentication Setup Banner */}
        {showAuthSetup && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Hello and Welcome to tomorrow,</h1>
                <p className="text-gray-600 mt-1">
                  Click here to setup your double authentication.
                </p>
              </div>
              <button
                onClick={() => setShowAuthSetup(false)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Setup Now
              </button>
            </div>
          </div>
        )}

        {/* Offline Status Badge */}
        {!isOnline && (
          <div className="inline-flex items-center bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
            Learning in offline mode
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quantity Overview */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Learning Progress</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <MetricCard 
                  title="Courses Started" 
                  value="26.9%" 
                  change="+" 
                  className="text-green-600"
                />
                <MetricCard 
                  title="Courses Completed" 
                  value="56.2%" 
                  change="+12" 
                  className="text-green-600"
                />
                <MetricCard 
                  title="Skills Mastered" 
                  value="45.9%" 
                  change="+8" 
                  className="text-green-600"
                />
              </div>
            </div>

            {/* Asset Generated - Learning Resources */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Learning Resources</h2>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900">128</div>
                  <div className="text-green-600 text-sm">18.1%</div>
                </div>
              </div>
              
              {/* Progress bars */}
              <div className="space-y-2 mb-6">
                {[
                  { label: "Digital Literacy", value: 75 },
                  { label: "Entrepreneurship", value: 60 },
                  { label: "Financial Skills", value: 45 },
                  { label: "AI Basics", value: 30 }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 w-32">{item.label}</span>
                    <div className="w-full bg-gray-200 rounded-full h-2 mx-4">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: `${item.value}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600 min-w-8">{item.value}%</span>
                  </div>
                ))}
              </div>

              {/* Active Courses */}
              <div className="space-y-4">
                <ProjectCard
                  title="DIGITAL LITERACY"
                  status="IN PROGRESS"
                  subtitle="Master essential digital skills - Email, browsing, online safety"
                  date="Last updated Thu 06 April 2024"
                  tag="BEGINNER"
                />
                <ProjectCard
                  title="AI FUNDAMENTALS"
                  status="AVAILABLE"
                  subtitle="Understanding artificial intelligence and its practical applications"
                  date="Last updated Thu 06 April 2024"
                  tag="INTERMEDIATE"
                />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Subscriptions */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Active Learners</h3>
                  <div className="flex items-baseline mt-2">
                    <span className="text-2xl font-bold text-gray-900">278</span>
                    <span className="text-green-600 text-sm ml-2">+0.5%</span>
                  </div>
                </div>
                <div className="text-right text-red-600">
                  <div>Weekly</div>
                  <div>▼</div>
                </div>
              </div>
            </div>

            {/* Learning Schedule */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Today's Schedule</h3>
              <div className="space-y-4">
                <CalendarEvent
                  time="8:30 - 10:30 AM"
                  title="Digital Literacy Basics"
                />
                <CalendarEvent
                  time="10:30 - 11:30 AM"
                  title="AI Assistant Practice"
                />
                <CalendarEvent
                  time="2:00 - 3:00 PM"
                  title="Financial Skills Workshop"
                />
              </div>
            </div>

            {/* Points Earned */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Learning Points</h3>
                  <div className="text-2xl font-bold text-gray-900 mt-2">1,827</div>
                </div>
                <div className="text-right text-red-600">
                  <div>Weekly</div>
                  <div>▼</div>
                </div>
              </div>
            </div>

            {/* Recent Achievements */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Achievements</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Digital Explorer</span>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">COMPLETED</span>
                </div>
                <div className="text-sm text-gray-600">
                  Completed Basic Digital Skills
                </div>
                <div className="text-sm text-gray-600">
                  AI Chat Master - 5 conversations
                </div>
                <div className="text-sm text-gray-500">
                  Last updated Thu 06 April 2024
                </div>
                <div className="text-sm font-medium text-gray-900">
                  Next: Entrepreneurship Basics
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Start Your Learning Journey?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              Browse All Courses
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 AllForOne. Empowering South Africans through digital inclusion.</p>
        </div>
      </footer>
    </div>
  );
}

// Metric Card Component
const MetricCard = ({ title, value, change, className }: { 
  title: string; 
  value: string; 
  change: string; 
  className: string;
}) => {
  return (
    <div className="bg-gray-50 rounded-lg p-4 text-center">
      <div className={`text-2xl font-bold ${className}`}>{value}</div>
      <div className="text-gray-600 mt-1">{change}</div>
      <div className="text-sm text-gray-500 mt-2">{title}</div>
    </div>
  );
};

// Calendar Event Component
const CalendarEvent = ({ time, title }: { time: string; title: string }) => {
  return (
    <div className="flex items-start space-x-3">
      <div className="text-sm text-gray-500 min-w-20">{time}</div>
      <div className="text-gray-900">{title}</div>
    </div>
  );
};

// Project Card Component
const ProjectCard = ({ title, status, subtitle, date, tag }: {
  title: string;
  status: string;
  subtitle: string;
  date: string;
  tag: string;
}) => {
  const statusColor = status === "IN PROGRESS" ? "bg-blue-100 text-blue-800" : 
                     status === "COMPLETED" ? "bg-green-100 text-green-800" : 
                     "bg-gray-100 text-gray-800";
  
  return (
    <div className="border border-gray-200 rounded-lg p-4">
      <div className="flex justify-between items-start mb-2">
        <div>
          <div className="font-semibold text-gray-900">{title}</div>
          <div className={`text-sm px-2 py-1 rounded ${statusColor} inline-block mt-1`}>
            {status}
          </div>
        </div>
        <div className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
          {tag}
        </div>
      </div>
      <div className="text-sm text-gray-600 mb-2">{subtitle}</div>
      <div className="text-xs text-gray-500">{date}</div>
    </div>
  );
};