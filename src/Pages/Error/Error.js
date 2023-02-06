import React from 'react'
import ErrorCSS from './Error.module.css'
import Phoenix from '../../Assets/Phoenix.png'

const Error = () => {
  return (
    <div className={ErrorCSS.Error}>
        <div>
            <h1>Error 404</h1>
            <h2>Page Not Found</h2>
        </div>
        <img src={Phoenix}/>
    </div>
  )
}

export default Error