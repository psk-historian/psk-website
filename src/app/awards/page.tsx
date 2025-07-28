export default function Awards() {

  return (
    <div className="min-h-screen bg-gradient-to-r from-red-500 to-gray-500">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-500 to-gray-500 text-white py-20 px-4 mb-16">
        <div className="max-w-4xl fadeInUp-animation mx-auto text-center">
          <h1 className="text-4xl md:text-8xl font-bold mb-6">What makes us outstanding?</h1>
          <p className="text-xl">
            Every summer, officers of the Kappa Deuteron chapter attend the Al Shonk Leadership School
            and Phi Sigma Kappa General Convention, which rotate annualy. During each year, chapters compete
            for the coveted Herbert L. Brown Outstanding Chapter Award and James S. Whitfield Chapter of Honor Award.
            Criteria for these awards encompassess all areas of chapter operations, including manpower, scholarship,
            community service, alumni relations, financial operations, campus involvement, Grand Chapter involvement and special projects.
          </p>
        </div>

        {/** Convention 2025 */}
        <div>

        </div>

        {/** Shonk 2024 */}
        <div className="text-white py-10 text-center max-w-2xl mx-auto px-1 mb-8 fadeInUp-animation">
          <p>In 2024, brothers Enzo Espinosa, Harrison Leary, and Cameron Loyet attended the Shonk Leadership School at Phi Sig HQ in Indianapolis,
            where they gained valuable leadership skills and educational insight for new ideas on chapter and fraternity life. Moreover, the Kappa 
            Deueteron chapter was the 2024 recipient of the James S. Whitfield Chapter of Honor Award, which is awarded
            to the chapter that holistically embodies the value of fraternity.
            <img className="max-w-full rounded-lg" src="/img/shonk2024.jpeg" alt="2023 General Convention Awards"></img>
          </p>
        </div>

        <div className="text-white text-center max-w-2xl mx-auto px-1 mb-8 fadeInUp-animation">
          <p>
            In July of 2023, President Mateo Villalobos and Vice President Arnav Jain attended the 69th General Convention in New Orleans, LA.
            There, they were extremely proud to be awarded with Outstanding Chapter Awards in Campus Involvement, Membership Experience, Commuinty Service,
            Scholarship, and Recruitment. Additionally, our chapter advisor, Len Gailes, was presented with Outstanding Chapter Advisor!
            <img className="max-w-full rounded-lg" src="/img/convention2023.jpeg" alt="2023 General Convention Awards"></img>
          </p>
        </div>

        <div className="text-white text-center max-w-2xl mx-auto fadeInUp-animation">
          <p>
            In July of 2021, President Ethan Cain and Vice President David Simiele attended the 68th General Convention in Phoenix, AZ.
            There, they were extremely proud to be awarded with the 2020 Herbert L. Brown Chapter of the Year.
            Additionally, the Kappa Deuteron chapter received Outstanding achievement in Risk Management, Philanthropy, Associate Education, and Member Involvement!
            <img className="max-w-full rounded-lg" src="/img/convention2020.jpg" alt="2023 General Convention Awards"></img>
          </p>
        </div>
      </section>
    </div>
  );
} 