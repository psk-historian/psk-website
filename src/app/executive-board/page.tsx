export default function ExecutiveBoard() {
  return (
    <div className="min-h-screen bg-psk-light-gray py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-center text-psk-red mb-12">Executive Board</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* President */}
          <div className="bg-white rounded-xl shadow-lg p-12 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
            <div className="w-48 h-48 bg-gray-300 rounded-full mb-6 flex items-center justify-center">
              <img src="exec/psk-president.png" alt="President" className="w-full h-full object-cover rounded-full" />
            </div>
            <h2 className="text-3xl font-bold text-psk-red mb-2">Cameron Loyet</h2>
            <h3 className="text-2xl">President</h3>
          </div>
          {/* Vice President */}
          <div className="bg-white rounded-xl shadow-lg p-12 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
            <div className="w-48 h-48 bg-gray-300 rounded-full mb-6 flex items-center justify-center">
              <img src="exec/psk-vp.png" alt="Vice President" className="w-full h-full object-cover rounded-full" />
            </div>
            <h2 className="text-3xl font-bold text-psk-red mb-2">Harrison Leary</h2>
            <h3 className="text-2xl">Vice President</h3>
          </div>
          {/* Secretary */}
          <div className="bg-white rounded-xl shadow-lg p-12 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
            <div className="w-48 h-48 bg-gray-300 rounded-full mb-6 flex items-center justify-center">
              <img src="exec/psk-secretary.png" alt="Secretary" className="w-full h-full object-cover rounded-full" />
            </div>
            <h2 className="text-3xl font-bold text-psk-red mb-2">Ethan Ruan</h2>
            <h3 className="text-2xl">Secretary</h3>
          </div>
          {/* Treasurer */}
          <div className="bg-white rounded-xl shadow-lg p-12 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
            <div className="w-48 h-48 bg-gray-300 rounded-full mb-6 flex items-center justify-center">
              <img src="exec/psk-treasurer.png" alt="Treasurer" className="w-full h-full object-cover rounded-full" />
            </div>
            <h2 className="text-3xl font-bold text-psk-red mb-2">Enzo Espinosa</h2>
            <h3 className="text-2xl">Treasurer</h3>
          </div>
          {/* Inductor */}
          <div className="bg-white rounded-xl shadow-lg p-12 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
            <div className="w-48 h-48 bg-gray-300 rounded-full mb-6 flex items-center justify-center">
              <img src="exec/psk-inductor.png" alt="Inductor" className="w-full h-full object-cover rounded-full" />
            </div>
            <h2 className="text-3xl font-bold text-psk-red mb-2">Luke McLellan</h2>
            <h3 className="text-2xl">Inductor</h3>
          </div>
          {/* Sentinel */}
          <div className="bg-white rounded-xl shadow-lg p-12 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
            <div className="w-48 h-48 bg-gray-300 rounded-full mb-6 flex items-center justify-center">
              <img src="exec/psk-sentinel.png" alt="Sentinel" className="w-full h-full object-cover rounded-full" />
            </div>
            <h2 className="text-3xl font-bold text-psk-red mb-2">Jackson Griffith</h2>
            <h3 className="text-2xl">Sentinel</h3>
          </div>
        </div>
      </div>
    </div>
  );
} 