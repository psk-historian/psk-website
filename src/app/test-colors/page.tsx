export default function TestColors() {
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-center">Tailwind Custom Colors Test</h1>
      
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* PSK Red */}
          <div className="bg-psk-red text-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">PSK Red</h3>
            <p className="text-sm">bg-psk-red</p>
            <p className="text-xs mt-2">#C91F3C</p>
          </div>

          {/* PSK Light Gray */}
          <div className="bg-psk-light-gray text-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">PSK Light Gray</h3>
            <p className="text-sm">bg-psk-light-gray</p>
            <p className="text-xs mt-2">#EAEAEB</p>
          </div>

          {/* PSK Silver */}
          <div className="bg-psk-silver text-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">PSK Silver</h3>
            <p className="text-sm">bg-psk-silver</p>
            <p className="text-xs mt-2">#ACACAC</p>
          </div>

          {/* PSK Slate Gray */}
          <div className="bg-psk-slate-gray text-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">PSK Slate Gray</h3>
            <p className="text-sm">bg-psk-slate-gray</p>
            <p className="text-xs mt-2">#616162</p>
          </div>

          {/* PSK Yellow */}
          <div className="bg-psk-yellow text-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">PSK Yellow</h3>
            <p className="text-sm">bg-psk-yellow</p>
            <p className="text-xs mt-2">#FDB913</p>
          </div>

          {/* Text Color Test */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2 text-psk-red">Text Color Test</h3>
            <p className="text-psk-red text-sm">text-psk-red</p>
            <p className="text-psk-yellow text-sm">text-psk-yellow</p>
            <p className="text-psk-slate-gray text-sm">text-psk-slate-gray</p>
          </div>
        </div>

        {/* Border Test */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Border Color Test</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="border-2 border-psk-red p-4 rounded text-center">
              <p className="text-sm">border-psk-red</p>
            </div>
            <div className="border-2 border-psk-yellow p-4 rounded text-center">
              <p className="text-sm">border-psk-yellow</p>
            </div>
            <div className="border-2 border-psk-silver p-4 rounded text-center">
              <p className="text-sm">border-psk-silver</p>
            </div>
            <div className="border-2 border-psk-light-gray p-4 rounded text-center">
              <p className="text-sm">border-psk-light-gray</p>
            </div>
            <div className="border-2 border-psk-slate-gray p-4 rounded text-center">
              <p className="text-sm">border-psk-slate-gray</p>
            </div>
          </div>
        </div>

        {/* Status */}
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
          <p className="font-semibold">✅ If you can see all these colors, your Tailwind config is working!</p>
        </div>
      </div>
    </div>
  );
} 