import Music from '../assets/images/events/music.jpg';
import Sports from '../assets/images/events/sports.jpg';
import Parties from '../assets/images/events/parties.jpg';
import Communities from '../assets/images/events/communities.jpg';
import Theaters from '../assets/images/events/theaters.jpg';
import Concerts from '../assets/images/events/concerts.jpg';

export const categories = [
  { title: 'Music', image: Music },
  { title: 'Sports', image: Sports },
  { title: 'Parties', image: Parties },
  { title: 'Communities', image: Communities },
  { title: 'Theaters', image: Theaters },
  { title: 'Concerts', image: Concerts },
];

export type Event = {
  event_id: number;
  title: string;
  ticket_price: number;
  category: string;
  img_url: string;
  venue: string;
  date: string;
  description: string;
  tickets_total: number;
  tickets_sold: number;
};

export const events: Event[] = [
  {
    event_id: 1,
    title: 'Live Music Festival',
    ticket_price: 1500,
    category: 'Music',
    img_url: Music,
    venue: 'KICC, Nairobi',
    date: '2026-12-12',
    description:
      'Enjoy an unforgettable evening of live music and entertainment.',
    tickets_total: 500,
    tickets_sold: 120,
  },
  {
    event_id: 2,
    title: 'Nairobi Football Championship',
    ticket_price: 1000,
    category: 'Sports',
    img_url: Sports,
    venue: 'Nyayo Stadium, Nairobi',
    date: '2026-12-15',
    description:
      'Experience the excitement of competitive football.',
    tickets_total: 1000,
    tickets_sold: 350,
  },
  {
    event_id: 3,
    title: 'End of Year Party',
    ticket_price: 2000,
    category: 'Parties',
    img_url: Parties,
    venue: 'Westlands, Nairobi',
    date: '2026-12-20',
    description:
      'Celebrate the end of the year with music, dancing and great company.',
    tickets_total: 300,
    tickets_sold: 180,
  },
  {
    event_id: 4,
    title: 'Community Networking Day',
    ticket_price: 500,
    category: 'Communities',
    img_url: Communities,
    venue: 'Sarit Centre, Nairobi',
    date: '2026-12-08',
    description:
      'Connect with people, share ideas and build meaningful relationships.',
    tickets_total: 200,
    tickets_sold: 75,
  },
  {
    event_id: 5,
    title: 'Theatre Night',
    ticket_price: 1200,
    category: 'Theaters',
    img_url: Theaters,
    venue: 'Kenya National Theatre, Nairobi',
    date: '2026-12-18',
    description:
      'Enjoy an evening of storytelling and live theatrical performances.',
    tickets_total: 250,
    tickets_sold: 100,
  },
  {
    event_id: 6,
    title: 'Live Concert Experience',
    ticket_price: 2500,
    category: 'Concerts',
    img_url: Concerts,
    venue: 'Carnivore Grounds, Nairobi',
    date: '2026-12-27',
    description:
      'Join music lovers for an exciting live concert experience.',
    tickets_total: 800,
    tickets_sold: 600,
  },
];