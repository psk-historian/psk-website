import Link from 'next/link';

export default function PastRecipients() {

    return (
      <div className="min-h-screen bg-gradient-to-r from-red-500 to-gray-500">
        {/* Hero Section */}
        <section className="bg-gradient-to-r justify-center text-center from-red-500 to-gray-500 text-white py-20 px-4 mb-16">
          <div className="max-w-4xl fadeInUp-animation mx-auto text-center">
            <h1 className="text-4xl md:text-8xl font-bold mb-6">Past Scholarship Recipients</h1>
          </div>

          <div className="max-w-4xl mx-auto py-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">2024 Recipients</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full bg-white/95 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden">
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 text-gray-800 font-medium">Brotherhood</td>
                      <td className="px-6 py-4 text-gray-800">Josh Scharff</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">$1,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 text-gray-800 font-medium">Scholarship</td>
                      <td className="px-6 py-4 text-gray-800">Mike Uveges</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">$1,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 text-gray-800 font-medium">Character</td>
                      <td className="px-6 py-4 text-gray-800">Hayden Bird</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">$1,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 text-gray-800 font-medium">Emerging Leaders</td>
                      <td className="px-6 py-4 text-gray-800">Harrison Leary</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">$1,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 text-gray-800 font-medium">Randy Rhodes Memorial</td>
                      <td className="px-6 py-4 text-gray-800">Ryan Peng</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">$1,500</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto py-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">2023 Recipients</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full bg-white/95 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden">
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 text-gray-800 font-medium">Brotherhood</td>
                      <td className="px-6 py-4 text-gray-800">Josh Scharff</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">$1,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 text-gray-800 font-medium">Scholarship</td>
                      <td className="px-6 py-4 text-gray-800">Mike Uveges</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">$1,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 text-gray-800 font-medium">Character</td>
                      <td className="px-6 py-4 text-gray-800">Trace Alford</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">$1,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 text-gray-800 font-medium">Emerging Leaders</td>
                      <td className="px-6 py-4 text-gray-800">Haden Churchwell</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">$1,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 text-gray-800 font-medium">Randy Rhodes Memorial</td>
                      <td className="px-6 py-4 text-gray-800">Matt Byrne</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">$1,500</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto py-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">2022 Recipients</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full bg-white/95 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden">
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 text-gray-800 font-medium">Brotherhood</td>
                      <td className="px-6 py-4 text-gray-800">Matthew Shaheen</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">$1,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 text-gray-800 font-medium">Scholarship</td>
                      <td className="px-6 py-4 text-gray-800">Austin Shoemaker</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">$1,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 text-gray-800 font-medium">Character</td>
                      <td className="px-6 py-4 text-gray-800">Rahul Chandrappa</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">$1,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 text-gray-800 font-medium">Emerging Leaders</td>
                      <td className="px-6 py-4 text-gray-800">Hayden Bird</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">$1,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 text-gray-800 font-medium">Randy Rhodes Memorial</td>
                      <td className="px-6 py-4 text-gray-800">Mateo Villalobos</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">$1,500</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto py-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">2021 Recipients</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full bg-white/95 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden">
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 text-gray-800 font-medium">Brotherhood</td>
                      <td className="px-6 py-4 text-gray-800">Nikola Porto</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">$1,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 text-gray-800 font-medium">Scholarship</td>
                      <td className="px-6 py-4 text-gray-800">Michael Wallace</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">$1,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 text-gray-800 font-medium">Character</td>
                      <td className="px-6 py-4 text-gray-800">Vedant Bhat</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">$1,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 text-gray-800 font-medium">Emerging Leaders</td>
                      <td className="px-6 py-4 text-gray-800">Charlie Taylor</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">$1,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 text-gray-800 font-medium">Randy Rhodes Memorial</td>
                      <td className="px-6 py-4 text-gray-800">Luccass Shang</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">$1,500</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto py-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">2020 Recipients</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full bg-white/95 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden">
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 text-gray-800 font-medium">Brotherhood</td>
                      <td className="px-6 py-4 text-gray-800">Jason Lieb</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">$1,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 text-gray-800 font-medium">Scholarship</td>
                      <td className="px-6 py-4 text-gray-800">Evan Shellow</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">$1,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 text-gray-800 font-medium">Character</td>
                      <td className="px-6 py-4 text-gray-800">Dale Shober</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">$1,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 text-gray-800 font-medium">Emerging Leaders</td>
                      <td className="px-6 py-4 text-gray-800">Jeremy Benson</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">$1,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 text-gray-800 font-medium">Randy Rhodes Memorial</td>
                      <td className="px-6 py-4 text-gray-800">Ethan Cain</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">$1,500</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto py-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">2018 Recipients</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full bg-white/95 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden">
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 text-gray-800 font-medium">Brotherhood</td>
                      <td className="px-6 py-4 text-gray-800">Kyle Brown</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">$1,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 text-gray-800 font-medium">Scholarship</td>
                      <td className="px-6 py-4 text-gray-800">Ethan Cain</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">$1,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 text-gray-800 font-medium">Character</td>
                      <td className="px-6 py-4 text-gray-800">Dale Shober</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">$1,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 text-gray-800 font-medium">Emerging Leaders</td>
                      <td className="px-6 py-4 text-gray-800">Arjun Khadse</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">$1,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 text-gray-800 font-medium">Randy Rhodes Memorial</td>
                      <td className="px-6 py-4 text-gray-800">Evan Shellow</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">$1,500</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto py-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">2017 Recipients</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full bg-white/95 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden">
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 text-gray-800 font-medium">Brotherhood</td>
                      <td className="px-6 py-4 text-gray-800">Matt Schoonover</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">$1,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 text-gray-800 font-medium">Scholarship</td>
                      <td className="px-6 py-4 text-gray-800">Matt Dalton</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">$1,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 text-gray-800 font-medium">Character</td>
                      <td className="px-6 py-4 text-gray-800">Nic Laconico</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">$1,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 text-gray-800 font-medium">Character</td>
                      <td className="px-6 py-4 text-gray-800">Victor Heaulme</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">$1,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 text-gray-800 font-medium">Randy Rhodes Memorial</td>
                      <td className="px-6 py-4 text-gray-800">Joseph Stamm</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">$1,500</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto py-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">2016 Recipients</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full bg-white/95 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden">
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 text-gray-800 font-medium">Brotherhood</td>
                      <td className="px-6 py-4 text-gray-800">Nic Laconico</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">$1,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 text-gray-800 font-medium">Scholarship</td>
                      <td className="px-6 py-4 text-gray-800">Michael Chen</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">$1,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 text-gray-800 font-medium">Character</td>
                      <td className="px-6 py-4 text-gray-800">Joseph Stamm</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">$1,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 text-gray-800 font-medium">Randy Rhodes Memorial</td>
                      <td className="px-6 py-4 text-gray-800">Victor Heaulme</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">$1,500</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto py-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">2015 Recipients</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full bg-white/95 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden">
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 text-gray-800 font-medium">Brotherhood</td>
                      <td className="px-6 py-4 text-gray-800">Preben Are</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">$1,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 text-gray-800 font-medium">Scholarship</td>
                      <td className="px-6 py-4 text-gray-800">Victor Heaulme</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">$1,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 text-gray-800 font-medium">Character</td>
                      <td className="px-6 py-4 text-gray-800">Brad Farnham</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">$1,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 text-gray-800 font-medium">Randy Rhodes Memorial</td>
                      <td className="px-6 py-4 text-gray-800">Nic Laconico</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">$1,500</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto py-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">2014 Recipients</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full bg-white/95 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden">
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 text-gray-800 font-medium">Brotherhood</td>
                      <td className="px-6 py-4 text-gray-800">Hunter Smith</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">$800</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 text-gray-800 font-medium">Scholarship</td>
                      <td className="px-6 py-4 text-gray-800">Max Stockslager</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">$800</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 text-gray-800 font-medium">Character</td>
                      <td className="px-6 py-4 text-gray-800">Nic Laconico</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">$800</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 text-gray-800 font-medium">Innovation</td>
                      <td className="px-6 py-4 text-gray-800">Tyler Stepanek</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">$800</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 text-gray-800 font-medium">Randy Rhodes Memorial</td>
                      <td className="px-6 py-4 text-gray-800">Brad Farnham</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">$1,300</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto py-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">2013 Recipients</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full bg-white/95 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden">
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 text-gray-800 font-medium">Brotherhood</td>
                      <td className="px-6 py-4 text-gray-800">Michael Rice</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 text-gray-800 font-medium">Scholarship</td>
                      <td className="px-6 py-4 text-gray-800">Max Stockslager</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 text-gray-800 font-medium">Character</td>
                      <td className="px-6 py-4 text-gray-800">Philip Bassett</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 text-gray-800 font-medium">Randy Rhodes Memorial</td>
                      <td className="px-6 py-4 text-gray-800">Kyle Roberds</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto py-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">2012 Recipients</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full bg-white/95 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden">
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 text-gray-800 font-medium">Brotherhood</td>
                      <td className="px-6 py-4 text-gray-800">Kris Moen
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 text-gray-800 font-medium">Scholarship</td>
                      <td className="px-6 py-4 text-gray-800">Mariano Morales Leonhardt</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 text-gray-800 font-medium">Character</td>
                      <td className="px-6 py-4 text-gray-800">Cary Horan</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 text-gray-800 font-medium">Randy Rhodes Memorial</td>
                      <td className="px-6 py-4 text-gray-800">Hunter Smith</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto py-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">2011 Recipients</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full bg-white/95 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden">
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 text-gray-800 font-medium">Brotherhood</td>
                      <td className="px-6 py-4 text-gray-800">Kyle Roberds
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 text-gray-800 font-medium">Scholarship</td>
                      <td className="px-6 py-4 text-gray-800">Paul Champion
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 text-gray-800 font-medium">Character</td>
                      <td className="px-6 py-4 text-gray-800">John Herrmann
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 text-gray-800 font-medium">Randy Rhodes Memorial</td>
                      <td className="px-6 py-4 text-gray-800">Ryan Ciaramella</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto py-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">2010 Recipients</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full bg-white/95 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden">
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 text-gray-800 font-medium">Brotherhood</td>
                      <td className="px-6 py-4 text-gray-800">Ryan Ciaramella
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 text-gray-800 font-medium">Scholarship</td>
                      <td className="px-6 py-4 text-gray-800">Stewart Hall
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 text-gray-800 font-medium">Character</td>
                      <td className="px-6 py-4 text-gray-800">Andrew Pagliarulo

                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 text-gray-800 font-medium">Randy Rhodes Memorial</td>
                      <td className="px-6 py-4 text-gray-800">Ryan Ciaramella</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto py-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">2009 Recipients</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full bg-white/95 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden">
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 text-gray-800 font-medium">Brotherhood</td>
                      <td className="px-6 py-4 text-gray-800">Michael Smyth
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 text-gray-800 font-medium">Scholarship</td>
                      <td className="px-6 py-4 text-gray-800">Kurt Scheffrahn
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 text-gray-800 font-medium">Character</td>
                      <td className="px-6 py-4 text-gray-800">Ryan Ciaramella

                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 text-gray-800 font-medium">Randy Rhodes Memorial</td>
                      <td className="px-6 py-4 text-gray-800">Matthew Thompson</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>


        </section>
      </div>
    );
  } 