import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Update these paths to match where your images are stored.
import one from '../assets/images/gallery/1.jpg';
import two from '../assets/images/gallery/2.jpeg';
import three from '../assets/images/gallery/3.jpg';
import four from '../assets/images/gallery/4.jpg';
import five from '../assets/images/gallery/5.jpg';
import six from '../assets/images/gallery/6.jpeg';
import seven from '../assets/images/gallery/7.jpeg';
import eight from '../assets/images/gallery/8.jpg';
import nine from '../assets/images/gallery/9.jpg';
import ten from '../assets/images/gallery/10.jpg';
import eleven from '../assets/images/gallery/11.jpeg';
import twelve from '../assets/images/gallery/12.jpeg';

const images = [
  {
    src: one,
    title: 'Exploring 3D Movies',
    description:
      'Enjoy the immersive experience of 3D cinema. Perfect for movie nights with friends and family!',
  },
  {
    src: two,
    title: 'Behind the Scenes',
    description:
      'Candid moment during a rehearsal. Capturing passion and teamwork.',
  },
  {
    src: three,
    title: 'Crowd Cheers',
    description: 'A moment of excitement and joy during the main event.',
  },
  {
    src: four,
    title: 'Live Performance',
    description: 'Spotlight on the talent. A night to remember.',
  },
  {
    src: five,
    title: 'Stage Setup',
    description: 'The calm before the storm. Behind-the-scenes work in progress.',
  },
  {
    src: six,
    title: 'Audience Interaction',
    description: 'Engagement is everything. Moments that matter.',
  },
  {
    src: seven,
    title: 'Tech Team',
    description: 'Making the magic happen with sound and lights.',
  },
  {
    src: eight,
    title: 'Red Carpet',
    description: 'Glamour and glitz at its best!',
  },
  {
    src: nine,
    title: 'Award Moment',
    description: 'The climax of achievement and recognition.',
  },
  {
    src: ten,
    title: 'Group Cheers',
    description: 'Unity, joy, and celebration in one frame.',
  },
  {
    src: eleven,
    title: 'After Party',
    description: 'Winding down in style after an incredible event.',
  },
  {
    src: twelve,
    title: 'Memories',
    description: 'A still frame of unforgettable memories.',
  },
];

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const selectedImage =
    selectedIndex !== null ? images[selectedIndex] : null;

  return (
    <div className="flex min-h-screen flex-col bg-[#fdf6e3] text-black">
      <Navbar />

      <main className="flex-grow px-6 py-10 md:px-16 lg:px-24">
        <h1 className="mb-4 text-center text-3xl font-bold md:text-4xl">
          A STORY BEHIND A PICTURE
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-center text-gray-600">
          Explore the moments, people, and experiences that make every event
          memorable.
        </p>

        {selectedImage === null ? (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {images.map((img, index) => (
              <button
                key={img.title}
                type="button"
                onClick={() => setSelectedIndex(index)}
                aria-label={`View ${img.title}`}
                className="group relative overflow-hidden rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <img
                  src={img.src}
                  alt={img.title}
                  loading="lazy"
                  className="h-32 w-full object-cover transition-transform duration-300 group-hover:scale-105 sm:h-36 md:h-40"
                />

                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-transparent to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-left text-sm font-semibold text-white">
                    {img.title}
                  </span>
                </div>
              </button>
            ))}
          </div>
        ) : (
          <section className="mx-auto max-w-3xl rounded-lg bg-white p-6 text-center shadow-lg">
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="mx-auto max-h-[60vh] w-full rounded object-contain"
            />

            <h2 className="mt-6 text-2xl font-semibold">
              {selectedImage.title}
            </h2>

            <p className="mt-2 text-gray-700">
              {selectedImage.description}
            </p>

            <button
              type="button"
              onClick={() => setSelectedIndex(null)}
              className="mt-6 rounded bg-black px-5 py-2 text-white transition hover:bg-orange-600"
            >
              Back to Gallery
            </button>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;
