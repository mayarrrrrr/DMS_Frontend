import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Reports from './Reports';
import Team from './Team';
import Map from './Map';
import Tasks from './Tasks';
import AdminNavbar from './AdminNavbar';

const App = () => {
  return (
    <Router>
      <div className="md:flex h-screen overflow-hidden">
        <div className="hidden md:flex lg:flex">
          <AdminNavbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/map" element={<Map />} />
          <Route path="/team" element={<Team />} />
          <Route path="/tasks" element={<Tasks />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
