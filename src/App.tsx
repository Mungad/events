import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Toaster } from 'sonner';
import Gallery from "./pages/Gallery";
import Events from "./pages/events/Events";
import CategoryPage from './pages/events/CategoryPage';
import CategoryEventsPage from './pages/events/CategoryEventsPage';

function App() {
  return (
    <BrowserRouter>
     <Toaster position="top-right" richColors />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/events" element={<Events />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/category/:categoryName" element={<CategoryEventsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;