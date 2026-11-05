import { useParams, Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import EventCard from '../../components/events/EventCard';
import { events } from '../../data/events';

const CategoryEventsPage = () => {
  const { categoryName } = useParams();

  const filteredEvents = events.filter(
    (event) =>
      event.category.toLowerCase() === categoryName?.toLowerCase()
  );

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <main className="mx-auto w-full max-w-7xl flex-1 px-6 py-10">
        <h1 className="mb-8 text-3xl font-bold capitalize text-orange-600">
          {categoryName} Events
        </h1>

        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
            {filteredEvents.map((event) => (
              <EventCard key={event.event_id} event={event} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center text-gray-600">
            <p className="mb-6 text-lg">
              No events found in this category.
            </p>

            <Link
              to="/events"
              className="inline-block rounded border border-orange-600 px-5 py-2 text-orange-600 transition hover:bg-orange-600 hover:text-white"
            >
              Back to Events
            </Link>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default CategoryEventsPage;