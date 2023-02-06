import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';

function Layout() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
       <Outlet />
      </header>
    </div>
  );
}

export default Layout;
