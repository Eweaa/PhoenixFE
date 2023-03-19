import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthProvider } from './Auth/AuthContext';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import Layout from './Layout';
import { ProtectedRoute } from './Auth/ProtectedRoute';
import Error from './Pages/Error/Error';
import Doctors from './Pages/Doctors/Doctors';
import Settings from './Pages/Settings/Settings';
import Watch from './Pages/Watch/Watch';
import Motivation from './Pages/Motivation/Motivation';
import BurnDegree from './Pages/BurnDegree/BurnDegree';

const router = createBrowserRouter([
  {
    path:'/',
    element:<ProtectedRoute><Layout /></ProtectedRoute>,
    errorElement:<Error />,
    children:[
      {
        path:'/',
        element:<Home />
      },
      {
        path:'/doctors',
        element:<Doctors />
      },
      {
        path:'/settings',
        element:<Settings />
      },
      {
        path:'/watch',
        element:<Watch />
      },
      {
        path:'/motivation',
        element:<Motivation />
      },
      {
        path:'/burn-degree',
        element:<BurnDegree />
      },
    ]
  },
  {
    path:'/login',
    element:<Login />
  },
  {
    path:'/signup',
    element:<Signup />
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <RouterProvider router ={router}/>
  </AuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
