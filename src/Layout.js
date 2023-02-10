import LayoutCSS from './Layout.module.css';
import Navbar from './Components/Navbar/Navbar';
import { Outlet, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserDoctor, faGear, faHandFist, faImage, faUserGroup, faUser, faCirclePlay } from '@fortawesome/free-solid-svg-icons';


function Layout() {
  return (
    <>
      <Navbar />
      <div className={[LayoutCSS.Layout, 'p-2'].join(' ')}>
        <aside className='p-2'>
          <ul>

            <li>
              <Link>
                <FontAwesomeIcon icon={faUser} className='mx-2'/>
                Profile
              </Link>
            </li>

            <li>
              <Link>
                <FontAwesomeIcon icon={faUserGroup} className='mx-2'/>
                Friends
              </Link>
            </li>

            <li>
              <Link>
                <FontAwesomeIcon icon={faCirclePlay} className='mx-2'/>
                Watch
              </Link>
            </li>

            <li>
              <Link to='/doctors'>
                <FontAwesomeIcon icon={faUserDoctor} className='mx-2'/>
                Doctors
              </Link>
            </li>

            <li>
              <Link>
                <FontAwesomeIcon icon={faImage} className='mx-2'/>
                Identify the burn degree
              </Link>
            </li>

            <li>
              <Link>
                <FontAwesomeIcon icon={faHandFist} className='mx-2'/>
                Motivation
              </Link>
            </li>

            <li>
              <Link>
                <FontAwesomeIcon icon={faGear} className='mx-2'/>
                Settings
              </Link>
            </li>

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
