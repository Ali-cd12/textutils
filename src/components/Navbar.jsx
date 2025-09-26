import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom'



export default function Navbar({tittle = "Some tittle here", about = "About Us", mode="light",toggle="", changeColor=""}) {
  return (
    <nav className={`navbar navbar-expand-lg nav-bar-${mode} bg-${mode}`} data-bs-theme={mode}>
  <div className="container-fluid">
    <NavLink to="/" className="navbar-brand">{tittle}</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" Navlink to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">{about}</NavLink>
        </li>
      </ul>
          <button className="but" id="r" style={{background: 'red', borderRadius: 30, padding: 10, marginRight: 10}} onClick={changeColor}></button>
          <button className="but" id="g" style={{background: 'green', borderRadius: 30, padding: 10, marginRight: 10}} onClick={changeColor}></button>
          <button className="but" id="y" style={{background: 'yellow', borderRadius: 30, padding: 10, marginRight: 10}} onClick={changeColor}></button>
        <div className="form-check form-switch mx-5" style={{color: mode === 'light'? 'black': 'white'}}>
                <input className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" onClick={toggle} />
                <label className="form-check-label" htmlFor="switchCheckDefault" >Enable Dark Mode</label>
        </div>
    </div>
  </div>
</nav>
  )
}

Navbar.PropTypes = {
  tittle: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired
}