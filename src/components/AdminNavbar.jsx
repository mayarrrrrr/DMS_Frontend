import { Link } from 'react-router-dom';

const AdminNavbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/reports">Reports</Link>
      <Link to="/map">Map</Link>
      <Link to="/team">Team</Link>
      <Link to="/tasks">Tasks</Link>
    </div>
  );
};

export default AdminNavbar;
