import LayoutCSS from './Layout.module.css';
import Navbar from './Components/Navbar/Navbar';
import ChatBot from './Components/ChatBot/ChatBot';
import { Outlet, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FriendRequest from './Components/FriendRequest/FriendRequest';
import { faUserDoctor, faGear, faHandFist, faImage, faUserGroup, faUser, faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import Chatbot from './Assets/Vector.png'
import { useState } from 'react';


function Layout() {

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

  const [chatbot, setChatbot] = useState(false)

  return (
    <div>
      <Navbar />
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
              <Link to='/doctors'>
                <FontAwesomeIcon icon={faUserDoctor} className='mx-2'/>
                Doctors
              </Link>
            </li>

            <li>
              <Link to='/burn-degree'>
                <FontAwesomeIcon icon={faImage} className='mx-2'/>
                Identify the burn degree
              </Link>
            </li>

            <li>
              <Link to='/motivation'>
                <FontAwesomeIcon icon={faHandFist} className='mx-2'/>
                Motivation
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
        
        <button className={[LayoutCSS.Chatbot, 'p-2'].join(' ')} onClick={() => setChatbot(!chatbot)} style={{display: chatbot ? 'none' : 'block'}}>
          <img src={Chatbot}/>
        </button>
        <div style={{display: chatbot ? 'block' : 'none'}}>
          <ChatBot toggle={chatbot} togglefunc={setChatbot}/>
        </div>
      </div>
    </div>
  );
}

export default Layout;
