import { useState, type ChangeEvent, type FormEvent } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { toast } from 'sonner';
import { Mail, MessageSquareText, User } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Frontend demonstration only; no message is saved or sent.
    toast.success('Message submitted successfully!');

    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-orange-50 to-white">
      <Navbar />

      <main className="flex flex-grow items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
        <div className="w-full max-w-4xl rounded-3xl border border-orange-100 bg-white p-8 shadow-xl sm:p-12">
          <h1 className="mb-8 text-center text-4xl font-extrabold text-orange-600">
            Get in Touch
          </h1>

          <p className="mb-10 text-center text-gray-600">
            We'd love to hear from you! Please fill out the form below.
          </p>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2"
          >
            {/* Name */}
            <div className="col-span-1 sm:col-span-2">
              <label
                htmlFor="name"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Name
              </label>

              <div className="relative">
                <User
                  className="absolute left-3 top-3.5 text-gray-400"
                  size={18}
                />

                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                  className="w-full rounded-xl border border-gray-300 py-2.5 pl-10 pr-4 text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>

            {/* Email */}
            <div className="col-span-1 sm:col-span-2">
              <label
                htmlFor="email"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Email
              </label>

              <div className="relative">
                <Mail
                  className="absolute left-3 top-3.5 text-gray-400"
                  size={18}
                />

                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-gray-300 py-2.5 pl-10 pr-4 text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>

            {/* Message */}
            <div className="col-span-1 sm:col-span-2">
              <label
                htmlFor="message"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Message
              </label>

              <div className="relative">
                <MessageSquareText
                  className="absolute left-3 top-3.5 text-gray-400"
                  size={18}
                />

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Write your message here..."
                  className="w-full rounded-xl border border-gray-300 py-2.5 pl-10 pr-4 text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="col-span-1 mt-4 text-center sm:col-span-2">
              <button
                type="submit"
                className="inline-block rounded-xl bg-orange-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-orange-700"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
