import React, { useState } from 'react';
import { Download, CheckCircle, Settings, Users } from 'lucide-react';

const Dashboard = () => {
  const [userRole] = useState('aprendiz'); // This would come from authentication

  const renderAprendizDashboard = () => (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-4">Portal del Aprendiz</h2>
      <div className="space-y-4">
        <div className="border p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Estado de Competencias</h3>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span>Competencia 1</span>
              <CheckCircle className="text-green-500 h-5 w-5" />
            </div>
            <div className="flex items-center justify-between">
              <span>Competencia 2</span>
              <CheckCircle className="text-green-500 h-5 w-5" />
            </div>
          </div>
        </div>
        <button className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 flex items-center justify-center gap-2">
          <Download className="h-5 w-5" />
          Descargar Certificado
        </button>
      </div>
    </div>
  );

  const renderInstructorDashboard = () => (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-4">Portal del Instructor</h2>
      <div className="space-y-4">
        <div className="border p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Gestión de Competencias</h3>
          {/* Add instructor-specific content */}
        </div>
      </div>
    </div>
  );

  const renderCoordinadorDashboard = () => (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-4">Portal del Coordinador</h2>
      <div className="space-y-4">
        <div className="border p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Gestión de Certificados</h3>
          {/* Add coordinator-specific content */}
        </div>
      </div>
    </div>
  );

  const renderAdminDashboard = () => (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-4">Portal del Administrador</h2>
      <div className="space-y-4">
        <div className="border p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Gestión de Programas</h3>
          {/* Add admin-specific content */}
        </div>
      </div>
    </div>
  );

  const getDashboardContent = () => {
    switch (userRole) {
      case 'aprendiz':
        return renderAprendizDashboard();
      case 'instructor':
        return renderInstructorDashboard();
      case 'coordinador':
        return renderCoordinadorDashboard();
      case 'admin':
        return renderAdminDashboard();
      default:
        return <div>Rol no reconocido</div>;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {getDashboardContent()}
    </div>
  );
}

export default Dashboard;