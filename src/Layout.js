import LayoutCSS from './Layout.module.css';
import { Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import { Link } from 'react-router-dom';

function Layout() {
  return (
    <>
      <Navbar />
      <div className={[LayoutCSS.Layout, 'p-2'].join(' ')}>
        <aside className='p-2'>
          <ul>
            <li><Link>Profile</Link></li>
            <li><Link>Friends</Link></li>
            <li><Link>Watch</Link></li>
            <li><Link>Doctors</Link></li>
            <li><Link>Identify the burn degree</Link></li>
            <li><Link>Motivation</Link></li>
            <li><Link>Settings</Link></li>
          </ul>
        </aside>
        <main className='p-2'>
        <Outlet />
        </main>
        <aisde className='p-2'>
          <h3>Friends Requests</h3>
        </aisde>
      </div>
    </>
  );
}

export default Layout;
