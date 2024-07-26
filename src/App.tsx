import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthProvider from './context/Authcontext';
import ProtectedLayout from './components/ProtectedLayout';
import Layout from './components/Layout';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import DashboardPage from './pages/DashboardPage';
import DatabasePage from './pages/DatabasePage';
import { ComplexNavbar } from './components/StickyNavbar';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route
            path="/*"
            element={
              <ProtectedLayout>
                <ComplexNavbar />
                <Routes>
                  <Route path="dashboard" element={<DashboardPage />} />
                  <Route path="database" element={<DatabasePage />} />
                </Routes>
              </ProtectedLayout>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
