export default function Events() {
  const upcomingEvents = [
    {
      title: "Rush Week",
      date: "January 20-27, 2024",
      description: "Join us for our spring rush events and meet the brothers!",
      location: "Chapter House",
      category: "Recruitment"
    },
    {
      title: "Alumni Weekend",
      date: "March 10, 2024",
      description: "Annual gathering of alumni and active brothers for networking and celebration.",
      location: "Campus Center",
      category: "Alumni"
    },
    {
      title: "Community Service Day",
      date: "February 15, 2024",
      description: "Join us in giving back to our community through various service projects.",
      location: "Various Locations",
      category: "Service"
    }
  ];

  const pastEvents = [
    {
      title: "Fall Formal",
      date: "November 15, 2023",
      description: "Annual formal dinner and dance celebrating brotherhood.",
      imageUrl: "/placeholder.jpg"
    },
    {
      title: "Homecoming Celebration",
      date: "October 20, 2023",
      description: "Homecoming weekend festivities with alumni and current brothers.",
      imageUrl: "/placeholder.jpg"
    },
    {
      title: "Summer Leadership Conference",
      date: "July 15, 2023",
      description: "Leadership development workshop for chapter officers.",
      imageUrl: "/placeholder.jpg"
    }
  ];

  return (
    <div className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20 px-4 mb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Events</h1>
          <p className="text-xl">
            Stay connected with our brotherhood through various events and activities
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="max-w-7xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-sm text-blue-900 font-semibold mb-2">{event.category}</div>
              <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
              <p className="text-gray-600 mb-4">{event.description}</p>
              <div className="text-sm text-gray-500">
                <p className="mb-1">📅 {event.date}</p>
                <p>📍 {event.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Calendar Section */}
      <section className="bg-gray-100 py-16 px-4 mb-16">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Event Calendar</h2>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="text-gray-600 mb-4">
              For a complete list of our events and to add them to your calendar,
              please visit our calendar page.
            </p>
            <button className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition duration-300">
              View Full Calendar
            </button>
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="max-w-7xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Past Event Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pastEvents.map((event, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-300"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-500 text-sm mb-2">{event.date}</p>
                <p className="text-gray-600">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Event Registration */}
      <section className="bg-blue-900 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Want to Attend Our Events?</h2>
          <p className="text-xl mb-8">
            Sign up for event notifications and stay updated with our latest activities
          </p>
          <div className="bg-white p-6 rounded-lg inline-block text-blue-900">
            <p className="font-semibold mb-2">Contact our Events Chair:</p>
            <p>events@phisigmakappa.org</p>
          </div>
        </div>
      </section>
    </div>
  );
} 