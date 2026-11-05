import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFF8E1] text-black">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow px-4 py-12 md:px-20 md:py-16">
        <section className="max-w-4xl mx-auto">
          {/* Page Heading */}
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500 mb-3">
              Get to know us
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-orange-600 mb-6">
              About MyTicket
            </h1>

            <p className="text-lg leading-relaxed text-gray-800">
              Welcome to MyTicket, your destination for discovering events and
              finding experiences worth remembering. We make it easier to
              explore events, book tickets, and connect with the moments that
              matter to you.
            </p>
          </div>

          {/* Mission */}
          <div className="mt-10 rounded-2xl bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-2xl font-semibold text-orange-600 mb-3">
              Our Mission
            </h2>

            <p className="leading-relaxed text-gray-700">
              Our mission is to make event discovery and ticket booking simple
              and convenient. Whether you love live music, sports, conferences,
              theatre, or social gatherings, MyTicket helps you find your next
              experience in one place.
            </p>
          </div>

          {/* Features */}
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="mb-4 text-3xl" aria-hidden="true">
                🎟️
              </div>

              <h2 className="text-xl font-semibold text-orange-600 mb-3">
                Easy Ticket Booking
              </h2>

              <p className="text-sm leading-relaxed text-gray-700">
                Discover concerts, conferences, plays, parties, and more.
                Find events that interest you and make booking straightforward.
              </p>
            </div>

            <div className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="mb-4 text-3xl" aria-hidden="true">
                📍
              </div>

              <h2 className="text-xl font-semibold text-orange-600 mb-3">
                Venue Discovery
              </h2>

              <p className="text-sm leading-relaxed text-gray-700">
                Explore venues for different events and occasions, helping you
                find a suitable place for your next gathering.
              </p>
            </div>

            <div className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="mb-4 text-3xl" aria-hidden="true">
                💬
              </div>

              <h2 className="text-xl font-semibold text-orange-600 mb-3">
                Customer Support
              </h2>

              <p className="text-sm leading-relaxed text-gray-700">
                We aim to make your experience smooth by providing a place to
                ask questions and get help with ticketing and event information.
              </p>
            </div>
          </div>

          {/* Closing Section */}
          <div className="mt-12 rounded-2xl bg-gradient-to-r from-orange-600 to-red-600 px-6 py-10 text-center text-white md:px-10">
            <h2 className="text-2xl font-bold md:text-3xl">
              Your next experience starts here.
            </h2>

            <p className="mx-auto mt-3 max-w-2xl leading-relaxed text-white/90">
              There is always something to discover. Explore upcoming events
              and find something worth looking forward to.
            </p>

            <a
              href="/events"
              className="mt-6 inline-block rounded-full bg-white px-6 py-3 font-semibold text-orange-600 transition hover:bg-orange-100"
            >
              Explore Events
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;