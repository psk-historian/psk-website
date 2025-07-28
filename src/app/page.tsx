'use client'

import Link from 'next/link';
import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Video Background */}
      <section className="relative h-[900px] text-white overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/house_drone.mp4" type="video/mp4" />
            {/* Fallback image if video doesn't load */}
            <Image
              src="/house-background.jpg"
              alt="Phi Sigma Kappa House"
              fill
              className="object-cover"
              priority
            />
          </video>
          <div className="absolute inset-0 bg-psk-red bg-opacity-80"></div>
        </div>
        <div className="relative z-10 h-full flex items-start justify-center pt-28">
          <div className="text-center max-w-5xl mx-auto px-6 animate-fade-in">
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-7">
              <div className="relative inline-block">
                <h1 className="text-7xl md:text-9xl text-white fadeInUp-animation tracking-wider font-bold mb-7" 
                    style={{
                      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.46), 0 0 20px rgba(0,0,0,0.5)'
                    }}>
                  Phi Sigma Kappa
                </h1>
              </div>
              <div className="relative inline-block">
                <p className="text-white md:text-7xl fadeInUp-animation mb-8"
                   style={{
                     textShadow: '1px 1px 3px rgba(0,0,0,0.8), 0 0 15px rgba(0,0,0,0.5)'
                   }}>
                  Kappa Deuteron Chapter
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter Awards */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-500 to-gray-500">
        <div className="max-w-7xl mx-auto">
          <h2 className={"text-8xl text-white font-bold text-center underline mb-14"}>
            By These Things We Stand
          </h2>
            <p className="text-center text-black text-3xl">
            We are the Kappa Deuteron chapter of Phi Sigma Kappa, a social fraternity with 62 chapters across
            the United States. Since our chapter's founding in 1923, Phi Sigma Kappa is devoted to our Cardinal Principles of
            brotherhood, schoolarship and character. These values guide everything we do, from fostering a tight-knit brotherhood that lasts
            well beyond graduation, to supporting academic excellence and leadership on campus, to shaping men of integrity and purpose.
            Our brothers are deeply involved in research, student government, professional organizations, and service initiatives, reflecting
            a lifelong commitment to personal growth and community impact.
            </p>
        </div>
      </section>

      {/* Recent Achievements */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-500 to-gray-500">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-8xl font-bold text-center mb-12 text-white underline">Recent Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in">
              <h3 className="text-3xl font-semibold mb-2 text-black">2024 Chapter of Honor</h3>
              <img className="h-auto max-w-full rounded-lg" src="/img/shonk2024.jpeg" alt="2023 General Convention Awards"></img>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-3xl font-semibold mb-2 text-black">2023 General Convention Awards</h3>
              <p className="text-gray-600 text-xl mb-4">Special Achievement Award in Community Service, Scholarship, Membership Experience, Recruitment, Campus Involvement</p>
              <p className="text-gray-600 text-xl mb-4">Outstanding Chapter Advisor, Len Gailes</p>
              <img className="h-auto max-w-full rounded-lg" src="/img/convention2023.jpeg" alt="2023 General Convention Awards"></img>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-3xl font-semibold mb-2 text-black">2020 Herbert L. Brown Chapter of the Year</h3>
              <img className="h-auto max-w-full rounded-lg" src="/img/convention2020.jpg" alt="2023 General Convention Awards"></img>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 text-center bg-gradient-to-r from-red-500 to-gray-500 text-black">
        <div className="max-w-3xl mx-auto animate-fade-in">
          <div className="bg-black/50 backdrop-blur-sm rounded-lg p-7">
          <h2 className="text-3xl font-bold text-white mb-6"
          style={{
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.46), 0 0 20px rgba(0,0,0,0.5)'
          }}>Ready to Begin Your Journey?</h2>
          <p className="text-xl text-white mb-8">
            Take the first step towards joining our award-winning brotherhood!
          </p>
          <Link
            href="/recruitment"
            className="bg-red-500 text-white px-8 py-3 rounded-lg font-semibold transition duration-300"
          >
            Learn About Recruitment
          </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
