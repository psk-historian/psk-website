export default function Recruitment() {
  return (
    <div className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20 px-4 mb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Brotherhood</h1>
          <p className="text-xl mb-8">
            Take the first step towards becoming a member of Phi Sigma Kappa
          </p>
        </div>
      </section>

      {/* Rush Process */}
      <section className="max-w-7xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">The Rush Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-3xl font-bold text-blue-900 mb-4">01</div>
            <h3 className="text-xl font-semibold mb-4">Attend Rush Events</h3>
            <p className="text-gray-600">
              Meet our brothers and learn about our fraternity through various social events, informational sessions, and activities.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-3xl font-bold text-blue-900 mb-4">02</div>
            <h3 className="text-xl font-semibold mb-4">Receive a Bid</h3>
            <p className="text-gray-600">
              If there's mutual interest, you'll receive an invitation to join our brotherhood as a pledge.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-3xl font-bold text-blue-900 mb-4">03</div>
            <h3 className="text-xl font-semibold mb-4">Pledging Process</h3>
            <p className="text-gray-600">
              Learn about our history, values, and traditions while bonding with your pledge class and active brothers.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Rush Events */}
      <section className="bg-gray-100 py-16 px-4 mb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Spring 2024 Rush Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Meet the Brothers BBQ</h3>
              <p className="text-gray-600 mb-2">January 20, 2024 | 4:00 PM</p>
              <p className="text-gray-600">Join us for food, games, and casual conversation with the brothers.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Info Session</h3>
              <p className="text-gray-600 mb-2">January 22, 2024 | 7:00 PM</p>
              <p className="text-gray-600">Learn about our fraternity's history, values, and membership process.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Sports Night</h3>
              <p className="text-gray-600 mb-2">January 24, 2024 | 6:00 PM</p>
              <p className="text-gray-600">Show off your athletic skills in various sports and games.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Formal Dinner</h3>
              <p className="text-gray-600 mb-2">January 26, 2024 | 7:00 PM</p>
              <p className="text-gray-600">Join us for a formal dinner and final conversations before bid day.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="max-w-7xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Requirements</h2>
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
          <ul className="space-y-4">
            <li className="flex items-center">
              <span className="text-blue-900 mr-3">✓</span>
              <span>Must be a full-time student at the university</span>
            </li>
            <li className="flex items-center">
              <span className="text-blue-900 mr-3">✓</span>
              <span>Minimum GPA of 2.5</span>
            </li>
            <li className="flex items-center">
              <span className="text-blue-900 mr-3">✓</span>
              <span>Commitment to academic excellence and personal growth</span>
            </li>
            <li className="flex items-center">
              <span className="text-blue-900 mr-3">✓</span>
              <span>Willingness to participate in community service</span>
            </li>
            <li className="flex items-center">
              <span className="text-blue-900 mr-3">✓</span>
              <span>Strong character and leadership potential</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-blue-900 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Questions?</h2>
          <p className="text-xl mb-8">
            Reach out to our Rush Chair for more information about joining Phi Sigma Kappa
          </p>
          <div className="bg-white text-blue-900 p-6 rounded-lg inline-block">
            <p className="font-semibold">Contact our Rush Chair:</p>
            <p className="mt-2">rush@phisigmakappa.org</p>
            <p className="mt-1">(555) 123-4567</p>
          </div>
        </div>
      </section>
    </div>
  );
} 