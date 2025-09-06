// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { user, isAdmin, logout } = useAuth();

  return (
    <nav className="bg-blue-600 text-white px-6 py-3 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold">
         महा ई सेवा केंद्र
        </Link>

        {/* Menu */}
        <div className="flex items-center space-x-6">
          <Link to="/" className="hover:text-yellow-300">
            Home
          </Link>
          <Link to="/services" className="hover:text-yellow-300">
            Services
          </Link>
          {isAdmin && (
            <Link to="/admin" className="hover:text-yellow-300 bg-yellow-600 px-3 py-1 rounded">
              Admin Panel
            </Link>
          )}
          {user && (
            <button 
              onClick={logout}
              className="hover:text-yellow-300 bg-red-500 px-3 py-1 rounded text-sm"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
