import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import coursesData from '../../data/courses.json';

interface Lesson {
  title: string;
  content: string;
}

interface Course {
  id: number;
  title: string;
  description: string;
  icon: string;
  lessons: Lesson[];
}

export default function CourseDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [currentLesson, setCurrentLesson] = useState(0);

  // Fix: Properly type the courses object
  const courses = coursesData.courses.reduce((acc: { [key: string]: Course }, course) => {
    acc[course.id.toString()] = course;
    return acc;
  }, {} as { [key: string]: Course });

  // Fix: Handle the id being potentially undefined or an array
  const courseId = Array.isArray(id) ? id[0] : id;
  const course = courseId ? courses[courseId] : null;

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Course not found</h1>
          <Link href="/courses" className="text-blue-500 hover:text-blue-600 mt-4 inline-block">
            Back to courses
          </Link>
        </div>
      </div>
    );
  }

  const currentLessonData = course.lessons[currentLesson];

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>{course.title} - AllForOne</title>
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
              <Link href="/courses" className="text-gray-600 hover:text-gray-900 font-medium">
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

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl">
                {course.icon}
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{course.title}</h1>
                <p className="text-gray-600">{course.description}</p>
              </div>
            </div>
          </div>

          <div className="flex">
            <div className="w-1/4 border-r border-gray-200">
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-4">Lessons</h3>
                <div className="space-y-2">
                  {course.lessons.map((lesson, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentLesson(index)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        currentLesson === index
                          ? 'bg-blue-500 text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      Lesson {index + 1}: {lesson.title}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex-1 p-6">
              <div className="mb-6">
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  Lesson {currentLesson + 1}: {currentLessonData.title}
                </h2>
                
                <div className="bg-gray-100 rounded-xl p-8 text-center mb-6">
                  <div className="text-4xl mb-4">📺</div>
                  <p className="text-gray-600">Video lesson would play here</p>
                  <p className="text-sm text-gray-500 mt-2">(Offline download available)</p>
                </div>

                <div className="prose max-w-none">
                  <p className="text-gray-700 leading-relaxed">{currentLessonData.content}</p>
                </div>
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={() => setCurrentLesson(Math.max(0, currentLesson - 1))}
                  disabled={currentLesson === 0}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous Lesson
                </button>
                <button
                  onClick={() => setCurrentLesson(Math.min(course.lessons.length - 1, currentLesson + 1))}
                  disabled={currentLesson === course.lessons.length - 1}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next Lesson
                </button>
                <Link 
                  href="/chat"
                  className="px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50"
                >
                  Ask AI Tutor
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}