import Link from 'next/link';

export default function Events() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-red-500 to-gray-500">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-500 to-gray-500 text-white py-20 px-4 mb-16">
        <div className="max-w-4xl fadeInUp-animation mx-auto text-center">
          <h1 className="text-5xl md:text-8xl font-bold mb-6">2025 Alumni Reunion</h1>

          <p className="text-xl py-8">
          Homecoming is right around the corner, and we are excited to welcome you back to Georgia Tech!
          
          This year, we ask that you join us as we celebrate another year of our lifelong brotherhood on
          Friday, October 24th for our 3nd-annual Alumni Reunion!
          Festivities will be hosted at the High Note Rooftop Bar (53 14th St NE, Atlanta, GA 30309).
          </p>

          <p className="text-xl py-4">
          If you are flying into town for the banquet, we are parterning with the AC Hotel and
          Moxy Atlanta Midtown to offer guests a discounted rate of $199/night. The rate will be
          valid from Thursday, October 23rd - Sunday, October 26th (MAX 3 nights)
          and will work on a Standard King or Double Queen room.
          </p>


          <p>Check-in: 3pm | Check-out: 12pm
          </p>

          <p className="text-xl py-6">
          Join us also on Saturday, October 25th, as we'll kick things off with a homecoming tailgate before the big game.
          Everyone is welcome as we come together to watch the Jackets take on the Syracuse Orange.
          See the flyer below for more details. See you there!
          </p>

          <img src="/img/Alumni-Reunion-Flyer.png"></img>

          <div className="flex justify-center py-6">
            <Link
              href="/past-recipients"
              className="bg-black text-white text-xl px-8 py-10 rounded-lg font-semibold hover:bg-gray-100 hover:text-red-500 transition duration-300 inline-block"
            >
            Buy tickets!
            </Link></div>

        </div>
      </section>
    </div>
  );
} 