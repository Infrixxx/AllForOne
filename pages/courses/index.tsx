import Head from 'next/head';
import Link from 'next/link';
import coursesData from '../../data/courses.json';

export default function Courses() {
  const courses = coursesData.courses.map(course => ({
    ...course,
    duration: '2 hours',
    lessons: course.lessons.length
  }));

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Courses - AllForOne</title>
      </Head>

      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link href="/">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
              </Link>
              <span className="ml-3 text-xl font-bold text-gray-900">AllForOne</span>
            </div>
            
            <nav className="flex space-x-8">
              <Link href="/courses" className="text-blue-600 font-medium">
                Courses
              </Link>
              <Link href="/chat" className="text-gray-600 hover:text-gray-900 font-medium">
                AI Tutor
              </Link>
              <Link href="/" className="text-gray-600 hover:text-gray-900 font-medium">
                Home
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Available Courses</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our carefully designed courses to build your digital and entrepreneurial skills.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center text-2xl mb-4">
                  {course.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                  <span>{course.duration}</span>
                  <span>{course.lessons} lessons</span>
                </div>

                <Link 
                  href={`/courses/${course.id}`}
                  className="w-full bg-blue-500 text-white text-center py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors block"
                >
                  Start Learning
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}