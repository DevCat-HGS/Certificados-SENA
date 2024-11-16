import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, FileCheck, Users } from 'lucide-react';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Sistema de Gestión de Prácticas SENA
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Bienvenido al portal de prácticas del SENA. Aquí podrás gestionar todo lo relacionado
          con tus prácticas profesionales.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <BookOpen className="h-12 w-12 text-green-600 mb-4 mx-auto" />
          <h2 className="text-xl font-semibold text-center mb-2">Información de Prácticas</h2>
          <p className="text-gray-600 text-center">
            Conoce todos los detalles sobre el proceso de prácticas y sus requisitos.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <FileCheck className="h-12 w-12 text-green-600 mb-4 mx-auto" />
          <h2 className="text-xl font-semibold text-center mb-2">Certificados</h2>
          <p className="text-gray-600 text-center">
            Descarga tus certificados y documentos necesarios para las prácticas.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <Users className="h-12 w-12 text-green-600 mb-4 mx-auto" />
          <h2 className="text-xl font-semibold text-center mb-2">Portal de Usuarios</h2>
          <p className="text-gray-600 text-center">
            Accede según tu rol: Aprendiz, Instructor, Coordinador o Administrador.
          </p>
        </div>
      </div>

      <div className="text-center">
        <Link
          to="/login"
          className="inline-block bg-green-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-green-700 transition-colors"
        >
          Acceder al Sistema
        </Link>
      </div>
    </div>
  );
}

export default Home;