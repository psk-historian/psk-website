import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-blue-900 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Welcome to Phi Sigma Kappa
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Brotherhood, Scholarship, and Character
            </p>
            <Link
              href="/recruitment"
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
            >
              Join ΦΣK
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose ΦΣK?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brotherhood */}
            <div className="text-center p-6 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-semibold mb-4">Brotherhood</h3>
              <p className="text-gray-600">
                Join a lifelong brotherhood of men committed to excellence and mutual support.
              </p>
            </div>

            {/* Leadership */}
            <div className="text-center p-6 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-semibold mb-4">Leadership</h3>
              <p className="text-gray-600">
                Develop leadership skills through hands-on experience and mentorship.
              </p>
            </div>

            {/* Academic Excellence */}
            <div className="text-center p-6 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-semibold mb-4">Academic Excellence</h3>
              <p className="text-gray-600">
                Maintain high academic standards with study resources and support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Event Cards */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Rush Week</h3>
              <p className="text-gray-600 mb-4">Join us for our spring rush events and meet the brothers!</p>
              <p className="text-blue-900">Date: January 20-27, 2024</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Philanthropy Event</h3>
              <p className="text-gray-600 mb-4">Annual charity fundraiser supporting local community.</p>
              <p className="text-blue-900">Date: February 15, 2024</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Alumni Weekend</h3>
              <p className="text-gray-600 mb-4">Connect with ΦΣK alumni and build lasting relationships.</p>
              <p className="text-blue-900">Date: March 10, 2024</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Ready to Begin Your Journey?</h2>
          <p className="text-gray-600 mb-8">
            Take the first step towards joining our brotherhood and creating lasting memories.
          </p>
          <Link
            href="/recruitment"
            className="bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition duration-300"
          >
            Learn About Recruitment
          </Link>
        </div>
      </section>
    </div>
  );
}
