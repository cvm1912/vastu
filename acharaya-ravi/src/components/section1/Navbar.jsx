import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 bg-white shadow-md z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-2xl font-bold">MyLogo</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg font-medium">
          <Link to="/home" className="hover:text-yellow-300">
            Home
          </Link>
          <Link to="/consultancy" className="hover:text-yellow-300">
            Consultancy
          </Link>
          <Link to="/design" className="hover:text-yellow-300">
            Design
          </Link>
          <Link to="/horoscope" className="hover:text-yellow-300">
            Horoscope
          </Link>
          <Link to="/remedies" className="hover:text-yellow-300">
            Remedies
          </Link>
          <Link to="/contactus" className="hover:text-yellow-300">
            Contact Us
          </Link>
        </ul>

        {/* Mobile Menu Icon */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-xl p-6 transform transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">MyLogo</h2>
          <button onClick={() => setOpen(false)}>
            <X size={28} />
          </button>
        </div>

        <ul className="flex flex-col gap-6 text-lg font-medium">
          <Link
            to="/home"
            onClick={() => setOpen(false)}
            className="hover:text-blue-600"
          >
            Home
          </Link>
          <Link
            to="/consultancy"
            onClick={() => setOpen(false)}
            className="hover:text-blue-600"
          >
            Consultancy
          </Link>
          <Link
            to="/design"
            onClick={() => setOpen(false)}
            className="hover:text-blue-600"
          >
            Design
          </Link>
          <Link
            to="/horoscope"
            onClick={() => setOpen(false)}
            className="hover:text-blue-600"
          >
            Horoscope
          </Link>
          <Link
            to="/remedies"
            onClick={() => setOpen(false)}
            className="hover:text-blue-600"
          >
            Remedies
          </Link>
          <Link
            to="/contactus"
            onClick={() => setOpen(false)}
            className="hover:text-blue-600"
          >
            Contact Us
          </Link>
        </ul>
      </div>
    </header>
  );
}
