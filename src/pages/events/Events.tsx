import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CategoryPage from './CategoryPage';

const Events = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      <Navbar />

      <main className="flex-1">
        <div className="bg-gradient-to-r from-orange-600 to-red-600 px-6 py-12 text-center text-white">
          <h1 className="text-3xl font-bold md:text-4xl">
            Discover Amazing Events
          </h1>

          <p className="mt-3 text-white/90">
            Find experiences, discover new places and make unforgettable memories.
          </p>
        </div>

        <CategoryPage />
      </main>

      <Footer />
    </div>
  );
};

export default Events;