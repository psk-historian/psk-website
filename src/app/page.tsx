import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with House Background */}
      <section className="relative h-[600px] text-white">
        <div className="absolute inset-0">
          <Image
            src="/house-background.jpg"
            alt="Phi Sigma Kappa House"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-psk-red bg-opacity-70"></div>
        </div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center max-w-4xl mx-auto px-4 animate-fade-in">
            <div className="relative inline-block">
              <h1 className="text-6xl md:text-7xl font-bold mb-6">
                Phi Sigma Kappa
              </h1>
            </div>
            <div className="relative inline-block">
              <p className="text-xl md:text-3xl mb-8">
                Kappa Deuteron Chapter
              </p>
            </div>
            <Link
              href="/recruitment"
              className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-500 transition duration-300"
            >
              Join ΦΣK
            </Link>
          </div>
        </div>
      </section>

      {/* Chapter Awards */}
      <section className="py-16 px-4 bg-psk-silver">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-psk-red">Chapter Awards & Recognition</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Academic Excellence Award */}
            <div className="text-center p-6 rounded-lg shadow-lg bg-white animate-fade-in">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold mb-4 text-psk-red">Academic Excellence</h3>
              <p className="text-gray-600">
                Highest Chapter GPA Award 2023
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Recognized for maintaining a 3.4+ chapter GPA
              </p>
            </div>

            {/* Community Service Award */}
            <div className="text-center p-6 rounded-lg shadow-lg bg-white animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-xl font-semibold mb-4 text-psk-red">Community Impact</h3>
              <p className="text-gray-600">
                Outstanding Service Award 2023
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Over 1,000 community service hours completed
              </p>
            </div>

            {/* Leadership Award */}
            <div className="text-center p-6 rounded-lg shadow-lg bg-white animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-4xl mb-4">👑</div>
              <h3 className="text-xl font-semibold mb-4 text-psk-red">Leadership Excellence</h3>
              <p className="text-gray-600">
                Chapter of the Year 2023
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Recognized for outstanding chapter operations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Achievements */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-psk-red">Recent Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-psk-silver p-6 rounded-lg shadow-md animate-fade-in">
              <h3 className="text-xl font-semibold mb-2 text-psk-red">Philanthropy Success</h3>
              <p className="text-gray-600 mb-4">Raised $25,000 for local charities in 2023</p>
              <p className="text-psk-red">Most Successful Fundraiser Award</p>
            </div>
            <div className="bg-psk-silver p-6 rounded-lg shadow-md animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-xl font-semibold mb-2 text-psk-red">Campus Leadership</h3>
              <p className="text-gray-600 mb-4">Brothers hold 15+ leadership positions across campus</p>
              <p className="text-psk-red">Student Organization Excellence Award</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 text-center bg-psk-red text-black">
        <div className="max-w-3xl mx-auto animate-fade-in">
          <h2 className="text-3xl font-bold mb-6">Ready to Begin Your Journey?</h2>
          <p className="text-xl mb-8">
            Take the first step towards joining our award-winning brotherhood
          </p>
          <Link
            href="/recruitment"
            className="bg-white text-psk-red px-8 py-3 rounded-lg font-semibold hover:bg-psk-silver transition duration-300"
          >
            Learn About Recruitment
          </Link>
        </div>
      </section>
    </div>
  );
}
