import Link from 'next/link';

export default function Newsletters() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-red-500 to-gray-500">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-500 to-gray-500 text-white py-20 px-4 mb-16">
        <div className="max-w-4xl fadeInUp-animation mx-auto text-center">
          <h1 className="text-4xl md:text-8xl font-bold mb-6">Newsletters</h1>
          <p className="text-2xl py-6">
            Stay connected with our latest newsletters and updates
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-10">
          <Link
            href="https://www.canva.com/design/DAGok_Q1XFw/NXrMgqrRQrbknhND-jEzmg/view?utm_content=DAGok_Q1XFw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h29e2396d50"
            className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 hover:text-red-500 transition duration-300 block text-center"
          >
            Summer 2025 Newsletter
          </Link>
          
          <Link
            href="https://www.canva.com/design/DAGb2S9R_0U/n9hpJu0dMPqmpicIA4IeYw/edit"
            className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 hover:text-red-500 transition duration-300 block text-center"
          >
            Spring 2025 Newsletter
          </Link>
          
          <Link
            href="https://www.canva.com/design/DAGQyzUw4rU/o-_VWDtaYsZBGPCPD8r0zg/view?utm_content=DAGQyzUw4rU&utm_campaign=designshare&utm_medium=link&utm_source=editor"
            className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 hover:text-red-500 transition duration-300 block text-center"
          >
            Fall 2024 Newsletter
          </Link>
          
          <Link
            href="https://www.canva.com/design/DAGClaJNqvk/SougQDaubSWFQLV2u5Pkyg/view?utm_content=DAGClaJNqvk&utm_campaign=designshare&utm_medium=link&utm_source=editor"
            className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 hover:text-red-500 transition duration-300 block text-center"
          >
            Summer 2024 Newsletter
          </Link>
          
          <Link
            href="https://docs.google.com/document/d/146ODoiKL40MXrzW_HYoZ_Qsp057Ark3MTGcYB-Ozz_g/edit?tab=t.0"
            className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 hover:text-red-500 transition duration-300 block text-center"
          >
            Spring 2024 Newsletter
          </Link>
          
          <Link
            href="https://mailchi.mp/8c1d7280c016/news-from-the-alumni-and-active-chapter"
            className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 hover:text-red-500 transition duration-300 block text-center"
          >
            Fall 2020 Newsletter
          </Link>
        
        </div>
      </section>
    </div>
  );
} 