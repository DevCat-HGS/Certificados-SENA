import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-green-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8" />
            <span className="font-bold text-xl">SENA Prácticas</span>
          </Link>
          <div className="flex space-x-4">
            <Link to="/login" className="hover:bg-green-700 px-3 py-2 rounded-md">
              Iniciar Sesión
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;