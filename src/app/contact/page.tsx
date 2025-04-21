'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20 px-4 mb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl">
            Get in touch with Phi Sigma Kappa
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Form */}
          <section>
            <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select a subject</option>
                  <option value="recruitment">Recruitment Information</option>
                  <option value="alumni">Alumni Relations</option>
                  <option value="events">Events</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-900 text-white py-3 px-6 rounded-lg hover:bg-blue-800 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Chapter House</h3>
                <p className="text-gray-600">123 Greek Row</p>
                <p className="text-gray-600">University City, ST 12345</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-2">
                  <p className="text-gray-600">
                    <span className="font-medium">General Inquiries:</span>
                    <br />info@phisigmakappa.org
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Recruitment:</span>
                    <br />rush@phisigmakappa.org
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Alumni Relations:</span>
                    <br />alumni@phisigmakappa.org
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-900 hover:text-blue-700"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-900 hover:text-blue-700"
                  >
                    Facebook
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-900 hover:text-blue-700"
                  >
                    Twitter
                  </a>
                </div>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Office Hours</h3>
                <div className="space-y-2">
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                  <p className="text-gray-600">Saturday: By appointment</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 