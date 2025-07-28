import Link from 'next/link';

export default function Recruitment() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-red-500 to-gray-500">
      {/* Hero Section */}
      <section className="relative h-[900px] text-white py-20 px-4 mb-16">
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover">
            <source src="/videos/zimzam.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-opacity-50"></div>
        </div>

        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="max-w-xl mx-auto text-center">
            <h1 className="text-8xl fadeInUp-animation font-bold mb-6">Join Our Brotherhood</h1>
            <p className="text-xl fadeInUp-animation mb-8">
              Take the first step towards becoming a member of Phi Sigma Kappa
            </p>
          </div>
        </div>
      </section>

      {/* Rush Process */}
      <section className="max-w-7xl text-center mx-auto px-4 mb-16">
        <h2 className="text-5xl font-bold text-center mb-12">Register for Fall 2025 Rush below!</h2>
        <div>
        <Link
            href="https://mycampusdirector2.com/signup/?group=1294&fbclid=PAQ0xDSwLJWXZleHRuA2FlbQIxMQABp9MSxKzh1ozuu_1G-DfyXlpICZglVAIok1WrFKLqtrrqOR2J57fltkDyDNij_aem_q1xM9qICbHiQh1McD-nVCw"
            className="bg-black text-2xl text-white px-8 py-3 rounded-lg font-semibold"
          >
            Register for Rush
          </Link>
        </div>
      </section>

      {/* Upcoming Rush Events */}
      <section className="bg-gray-100 py-16 px-4 mb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Contact our Rush Chairs!</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-3xl font-semibold mb-2">Ethan Ruan</h3>
              <p className="text-gray-600 text-2xl mb-2">(470) 338-1787</p>
              <img src="exec/psk-secretary.png" alt="Secretary" className="w-75 h-75 object-cover rounded-full mx-auto" />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-3xl font-semibold mb-2">Collin Register</h3>
              <p className="text-gray-600 text-2xl mb-2">+1 (912) 324-1598</p>
              <img src="exec/psk-rush.png" alt="Secretary" className="w-75 h-75 object-cover rounded-full mx-auto" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 