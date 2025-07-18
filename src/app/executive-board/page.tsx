export default function ExecutiveBoard() {
  return (
    <div className="min-h-screen bg-psk-light-gray py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-center text-psk-red mb-12">Executive Board</h1>
        <div className="flex flex-col gap-8">
          {/* President */}
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center w-full hover:scale-105 transition-transform duration-300">
            <div className="text-5xl mb-4">👔</div>
            <h2 className="text-2xl font-bold text-psk-red mb-2">President</h2>
            <p className="text-gray-700">Leads the chapter, oversees all operations, and represents the fraternity to the university and community.</p>
          </div>
          {/* Vice President */}
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center w-full hover:scale-105 transition-transform duration-300">
            <div className="text-5xl mb-4">🤝</div>
            <h2 className="text-2xl font-bold text-psk-red mb-2">Vice President</h2>
            <p className="text-gray-700">Assists the President, manages committees, and ensures chapter goals are met.</p>
          </div>
          {/* Secretary */}
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center w-full hover:scale-105 transition-transform duration-300">
            <div className="text-5xl mb-4">📝</div>
            <h2 className="text-2xl font-bold text-psk-red mb-2">Secretary</h2>
            <p className="text-gray-700">Keeps records, takes meeting minutes, and manages chapter communications.</p>
          </div>
          {/* Treasurer */}
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center w-full hover:scale-105 transition-transform duration-300">
            <div className="text-5xl mb-4">💰</div>
            <h2 className="text-2xl font-bold text-psk-red mb-2">Treasurer</h2>
            <p className="text-gray-700">Manages chapter finances, budgets, and dues collection.</p>
          </div>
          {/* Inductor */}
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center w-full hover:scale-105 transition-transform duration-300">
            <div className="text-5xl mb-4">🎓</div>
            <h2 className="text-2xl font-bold text-psk-red mb-2">Inductor</h2>
            <p className="text-gray-700">Oversees new member education and the pledging process.</p>
          </div>
          {/* Sentinel */}
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center w-full hover:scale-105 transition-transform duration-300">
            <div className="text-5xl mb-4">🛡️</div>
            <h2 className="text-2xl font-bold text-psk-red mb-2">Sentinel</h2>
            <p className="text-gray-700">Ensures chapter security, ritual integrity, and upholds traditions.</p>
          </div>
        </div>
      </div>
    </div>
  );
} 