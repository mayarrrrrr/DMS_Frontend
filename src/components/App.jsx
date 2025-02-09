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
      <div className="flex h-screen w-full items-center  overflow-hidden">
        
        <div className="w-1/4 bg-gray-800 text-white hidden md:block">
          <AdminNavbar />
        </div>

        <div className="w-3/4 flex-1 p-6 overflow-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/map" element={<Map />} />
            <Route path="/team" element={<Team />} />
            <Route path="/tasks" element={<Tasks />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
