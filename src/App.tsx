import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Department from './components/Department';
import ViewTable from './components/ViewTable';
import Login from './components/Login';

const App: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [activePage, setActivePage] = useState('Department');
  const [departmentData, setDepartmentData] = useState({
    department: '',
    departmentName: '',
    block: '',
  });
  const [totalStaff, setTotalStaff] = useState<number>(0);

  // This function is called when the user logs out
  const handleLogout = () => {
    setEmail('');
  };

  // This function renders the main content based on the active page
  const renderContent = () => {
    if (activePage === 'Department') {
      return (
        <Department
          setDepartmentData={setDepartmentData}
          totalStaff={totalStaff}
          setTotalStaff={setTotalStaff}
          onShowStaff={() => {}}
        />
      );
    }
    if (activePage === 'viewTable') {
      return <ViewTable />;
    }
    return <div>Select a page from the sidebar.</div>;
  };

  return (
    <Router>
      <Routes>
        {/* Login Route */}
        <Route
          path="/login"
          element={
            email ? <Navigate to="/" /> : <Login onLoginSuccess={setEmail} />
          }
        />
        {/* Main App Route */}
        <Route
          path="/"
          element={
            email ? (
              <>
                <Header email={email} onLogout={handleLogout} />
                <div style={{ display: 'flex' }}>
                  <Sidebar setActivePage={setActivePage} />
                  <div style={{ flex: 1, padding: '24px', marginLeft: 250 }}>
                    {renderContent()}
                  </div>
                </div>
              </>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;