export default function About() {
  return (
    <div className="min-h-screen py-16">
      {/* History Section */}
      <section className="max-w-7xl mx-auto px-4 mb-16">
        <h1 className="text-4xl font-bold text-center mb-12">About Phi Sigma Kappa</h1>
        <div className="prose max-w-none">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">Our History</h2>
            <p className="text-gray-700 mb-4">
              Phi Sigma Kappa was founded on March 15, 1873, at Massachusetts Agricultural College (now the University of Massachusetts Amherst) by six pioneering men who sought to establish a society dedicated to brotherhood, scholarship, and character.
            </p>
            <p className="text-gray-700 mb-4">
              Since our founding, we have grown into a national organization with chapters across the United States, fostering leadership and personal growth among our members while maintaining our commitment to academic excellence and community service.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-100 py-16 px-4 mb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Brotherhood</h3>
              <p className="text-gray-600">
                We foster lifelong friendships and support networks through shared experiences and mutual respect.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Scholarship</h3>
              <p className="text-gray-600">
                We promote academic excellence and intellectual growth through mentorship and collaborative learning.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Character</h3>
              <p className="text-gray-600">
                We develop strong moral character and leadership skills through service and personal development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="max-w-7xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Chapter Leadership</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-32 h-32 mx-auto bg-gray-300 rounded-full mb-4"></div>
            <h3 className="text-xl font-semibold">John Smith</h3>
            <p className="text-gray-600">Chapter President</p>
          </div>
          <div className="text-center">
            <div className="w-32 h-32 mx-auto bg-gray-300 rounded-full mb-4"></div>
            <h3 className="text-xl font-semibold">Michael Johnson</h3>
            <p className="text-gray-600">Vice President</p>
          </div>
          <div className="text-center">
            <div className="w-32 h-32 mx-auto bg-gray-300 rounded-full mb-4"></div>
            <h3 className="text-xl font-semibold">David Williams</h3>
            <p className="text-gray-600">Treasurer</p>
          </div>
          <div className="text-center">
            <div className="w-32 h-32 mx-auto bg-gray-300 rounded-full mb-4"></div>
            <h3 className="text-xl font-semibold">Robert Brown</h3>
            <p className="text-gray-600">Secretary</p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="bg-blue-900 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl leading-relaxed">
            To foster the development of men of character in an environment of brotherhood and academic excellence, preparing leaders who will make a positive impact on their communities and the world.
          </p>
        </div>
      </section>
    </div>
  );
} 