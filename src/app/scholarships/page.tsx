import Link from 'next/link';

export default function Scholarships() {

    return (
      <div className="min-h-screen bg-gradient-to-r from-red-500 to-gray-500">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-500 to-gray-500 text-white py-20 px-4 mb-16">
          <div className="max-w-4xl fadeInUp-animation mx-auto text-center">
            <h1 className="text-4xl md:text-8xl font-bold mb-6">Scholarships</h1>
            <p className="text-2xl">
                The brothers of the Kappa Deuteron chapter of the Phi Sigma Kappa at Georgia Tech have awarded active members
                of the chapter with scholarship for more than 40 years. Young men exhibiting the Cardinal Principles of
                Brotherhood, Scholarship, and Character as well as service to the fraternity as emerging leaders are recognized at
                the homecoming alumni banquet each year.
            </p>
          </div>

          <div className="max-w-4xl fadeInUp-animation mx-auto text-center">
            <h1 className="text-2xl py-10 md:text-6xl font-bold mb-6">Tom and Gloria Hughes Scholarship</h1>
            <p className="text-2xl">Starting at homecoming in 2009, Tom Hughes (KD 326, 1959) made a contribution to establish and grow a permanent fund for
                the purpose of consistently awarding scholarships. Previously scholarships were funded strictly via donations collected within the preceding year.
                As of early 2020, the scholarship fund had grown in excess of $125,000 with annual contributions continuing to add to the base capital with a target
                goal of $250,000. Scholarships totaling $5,500 are now consistently funded from the investment income of the portfolio. Scholarships awarded are as
                seen below. One each for a brother that exemplifies our three cardinal principles of Brotherhood, Scholarship, and Character. One for a younger
                brother that shows the qualities of an emerging leader. And one for a brother that exemplifies the memory and character of the late Randy Rhodes,
                who pledged Phi Sig in 1995 and tragically passed away his freshman year.
            </p>
          </div>

          <div className="text-white py-20 px-4 mb-16">
            <hr className="w-1/2 mx-auto"></hr>
            <h2 className="text-center text-3xl py-8">Brotherhood: $1000</h2>
            <hr className="w-1/2 mx-auto"></hr>
            <h2 className="text-center text-3xl py-8">Scholarship: $1000</h2>
            <hr className="w-1/2 mx-auto"></hr>
            <h2 className="text-center text-3xl py-8">Character: $1000</h2>
            <hr className="w-1/2 mx-auto"></hr>
            <h2 className="text-center text-3xl py-8">Emerging Leaders: $1000</h2>
            <hr className="w-1/2 mx-auto"></hr>
            <h2 className="text-center text-3xl py-8">Randy Rhodes Memorial Scholarship: $1500</h2>
            <hr className="w-1/2 mx-auto"></hr>
          </div>

          <div className="flex justify-center">
            <Link
              href="/past-recipients"
              className="bg-white text-black text-xl px-8 py-10 rounded-lg font-semibold transition duration-300 inline-block"
            >
              Past Scholarship Recipients
            </Link>
          </div>
        </section>
      </div>
    );
  } 