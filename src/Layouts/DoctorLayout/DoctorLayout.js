import LayoutCSS from '../PatientLayout/Layout.module.css';
import DNavbar from '../../Components/Navbar/DNavBar/DNavbar';
import { Outlet, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FriendRequest from '../../Components/FriendRequest/FriendRequest';
import { faUserDoctor, faGear, faImage, faUser, faCirclePlay } from '@fortawesome/free-solid-svg-icons';

const DoctorLayout = () => {

  const friendRequests = [
    {
      id:1,
      name:'julia'
    },
    {
      id:2,
      name:'Karen'
    }
  ]
  
  return (
    <div>
      <DNavbar />
      <div className={[LayoutCSS.Layout, 'p-2'].join(' ')}>
        <aside className='p-2'>
          <ul>

            <li>
              <Link to='/'>
                <FontAwesomeIcon icon={faUser} className='mx-2'/>
                Feed
              </Link>
            </li>

            <li>
              <Link to='/watch'>
                <FontAwesomeIcon icon={faCirclePlay} className='mx-2'/>
                Watch
              </Link>
            </li>

            <li>
              <Link to='/requests'>
                <FontAwesomeIcon icon={faUserDoctor} className='mx-2'/>
                Requests
              </Link>
            </li>

            <li>
              <Link to='/results'>
                <FontAwesomeIcon icon={faImage} className='mx-2'/>
                Results
              </Link>
            </li>

            <li>
              <Link to='/settings'>
                <FontAwesomeIcon icon={faGear} className='mx-2'/>
                Settings
              </Link>
            </li>

          </ul>

        </aside>

        <main className='p-2' style={{height: '95vh'}}>
          <Outlet />
        </main>
        
        <aside className='p-2'>
          <div className={[LayoutCSS.FriendRequest, 'mb-2'].join(' ')}>
            Friends Requests
            <span>
              {friendRequests.length}
            </span>
          </div>
          {friendRequests.map((friendRequest) => <FriendRequest key = {friendRequest.id} name={friendRequest.name}/>)}
        </aside>
      </div>
    </div>
  )
}

export default DoctorLayout