// src/App.jsx
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import AdminLayout from './layouts/AdminLayout';
import AdminLogin from './screens/AdminLogin';
import Dashboard from './screens/Dashboard';
import UserManagement from './screens/UserManagement';
import DevicesManagement from './screens/DevicesManagement';
import MeetingsManagement from './screens/MeetingsManagement';

function LayoutWrapper({ children }) {
  const location = useLocation();
  const noSidebarRoutes = ['/', '/admin-login'];

  return noSidebarRoutes.includes(location.pathname) ? (
    <>{children}</>
  ) : (
    <AdminLayout>{children}</AdminLayout>
  );
}

function App() {
  return (
    <Router>
      <LayoutWrapper>
        <Routes>
          <Route path="/" element={<AdminLogin />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<UserManagement />} />
          <Route path="/devices" element={<DevicesManagement />} />
          <Route path="/meetings" element={<MeetingsManagement />} />
        </Routes>
      </LayoutWrapper>
    </Router>
  );
}

export default App;
