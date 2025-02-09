import { Link } from 'react-router-dom';

const AdminNavbar = () => {
  return (
    <div className='flex flex-col items-center w-[200px] h-full'>
      <Link className='font-bold' to="/">Home</Link>
      <Link to="/reports">Reports</Link>
      <Link to="/map">Map</Link>
      <Link to="/team">Team</Link>
      <Link to="/tasks">Tasks</Link>
    </div>
  );
};

export default AdminNavbar;
