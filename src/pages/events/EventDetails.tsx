import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { toast } from 'sonner';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { events } from '../../data/events';

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState<number>(1);

  const event = events.find(
    (item) => item.event_id === Number(id)
  );

  if (!event) {
    return (
      <div className="flex min-h-screen flex-col bg-gray-100">
        <Navbar />

        <main className="flex flex-1 flex-col items-center justify-center px-4 text-center">
          <h1 className="text-3xl font-bold text-gray-800">
            Event Not Found
          </h1>

          <p className="mt-3 text-gray-600">
            Sorry, we couldn't find the event you're looking for.
          </p>

          <Link
            to="/events"
            className="mt-6 rounded bg-orange-600 px-6 py-3 text-white hover:bg-orange-700"
          >
            Browse Events
          </Link>
        </main>

        <Footer />
      </div>
    );
  }

  const remainingTickets = Math.max(
    0,
    event.tickets_total - event.tickets_sold
  );

  const isInvalidQuantity =
    quantity < 1 || quantity > remainingTickets;

  const handleBooking = () => {
    if (isInvalidQuantity) {
      toast.error('Please select a valid ticket quantity.');
      return;
    }

    toast.info('Ticket booking is not available yet.');
  };

  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      <Navbar />

      <main className="flex-grow px-4 py-10">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 rounded-xl bg-white p-6 shadow md:grid-cols-2">

          {/* Event Image */}
          <div>
            <img
              src={event.img_url}
              alt={event.title}
              className="h-full max-h-[500px] w-full rounded-xl object-cover shadow-md"
            />
          </div>

          {/* Event Information */}
          <div className="flex flex-col justify-between space-y-6">
            <div>
              <span className="rounded-full bg-orange-100 px-3 py-1 text-sm font-semibold text-orange-600">
                {event.category}
              </span>

              <h1 className="mt-4 text-3xl font-bold text-black">
                {event.title}
              </h1>

              <p className="mt-4 text-gray-500">
                Venue:
                <span className="ml-2 font-medium text-black">
                  {event.venue}
                </span>
              </p>

              <p className="mt-2 text-gray-500">
                Date:
                <span className="ml-2 font-medium text-black">
                  {event.date}
                </span>
              </p>

              <p className="mt-4 text-xl font-semibold text-orange-600">
                Ksh {event.ticket_price.toLocaleString()}
              </p>

              <p className="mt-4 leading-relaxed text-gray-700">
                {event.description}
              </p>

              <p className="mt-4 text-sm font-medium text-green-600">
                {remainingTickets > 0
                  ? `${remainingTickets} tickets available`
                  : 'Sold Out'}
              </p>
            </div>

            {/* Ticket Quantity */}
            <div className="mt-4">
              <label
                htmlFor="quantity"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Ticket Quantity:
              </label>

              <input
                type="number"
                id="quantity"
                min={1}
                max={remainingTickets}
                value={quantity}
                onChange={(e) =>
                  setQuantity(Number(e.target.value))
                }
                disabled={remainingTickets === 0}
                className="w-24 rounded-md border border-gray-400 bg-gray-50 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />

              <p className="mt-3 text-lg font-semibold text-gray-800">
                Total: Ksh{' '}
                {(event.ticket_price * quantity).toLocaleString()}
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => navigate('/events')}
                className="rounded border border-gray-300 px-4 py-2 text-black transition hover:bg-gray-100"
              >
                ← Back to Events
              </button>

              <button
                onClick={handleBooking}
                disabled={isInvalidQuantity || remainingTickets === 0}
                className={`rounded px-6 py-2 font-semibold text-white transition ${
                  isInvalidQuantity || remainingTickets === 0
                    ? 'cursor-not-allowed bg-gray-300'
                    : 'bg-orange-500 hover:bg-orange-600'
                }`}
              >
                Book Tickets
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EventDetails;