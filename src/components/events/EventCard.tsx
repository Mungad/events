import { Link } from 'react-router-dom';
import type { Event } from '../../data/events';

interface Props {
  event: Event;
}

export default function EventCard({ event }: Props) {
  return (
    <div className="overflow-hidden rounded-lg border bg-white shadow-md transition hover:shadow-lg">
      <img
        src={event.img_url}
        alt={event.title}
        className="h-40 w-full object-cover"
      />

      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900">
          {event.title}
        </h3>

        <p className="mt-1 text-sm text-gray-600">
          {event.date} @ {event.venue}
        </p>

        <p className="mt-2 text-sm text-gray-700">
          {event.description.length > 100
            ? `${event.description.slice(0, 100)}...`
            : event.description}
        </p>

        <p className="mt-3 font-bold text-orange-600">
          Ksh {event.ticket_price.toLocaleString()}
        </p>

        <Link
          to={`/events/${event.event_id}`}
          className="mt-4 block rounded-md bg-orange-600 px-4 py-2 text-center text-white transition hover:bg-orange-700"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}