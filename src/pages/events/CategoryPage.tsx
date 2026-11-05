import { Link } from 'react-router-dom';
import { categories } from '../../data/events';

export default function CategoryPage() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-10">
      <h2 className="mb-6 border-l-4 border-orange-500 pl-3 text-2xl font-bold text-gray-800">
        Events by Categories
      </h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {categories.map((cat) => (
          <Link
            key={cat.title}
            to={`/category/${cat.title.toLowerCase()}`}
            className="group relative h-48 overflow-hidden rounded-md shadow-md"
          >
            <img
              src={cat.image}
              alt={cat.title}
              className="h-full w-full object-cover brightness-50 transition duration-300 ease-in-out group-hover:brightness-100"
            />

            <div className="absolute inset-0 flex items-center justify-center text-xl font-bold text-white">
              {cat.title}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}