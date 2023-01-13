import { Outlet, Link } from "react-router-dom";
import React, { useState, useEffect } from 'react'



const Header = () => {

  const [HeaderData, fetchHeader] = useState([]);
  const getData = () => {
    fetch('http://localhost:3002/v1/website/header')
      .then((res) => res.json())
      .then((res) => {
        fetchHeader(res.data)
      })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
    <header className="container-fluid">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">JPhotography</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarDefault" aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span className="icon-bar i1"></span>
        <span className="icon-bar i2"></span>
        <span className="icon-bar i3"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarDefault">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/about">New About</Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/portfolio">PORTFOLIO</Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="./contact">CONTACT</Link>
          </li>
        </ul>
        
      </div>
    </nav>

    <div id="hero-text">
      <div className="container">
        <h1>{HeaderData.hero_h1}</h1>
        <h2>{HeaderData.hero_h2}</h2>
        <h5>{HeaderData.hero_h3}</h5>
      </div>
    </div>
  </header>
  </>
  )
}

export default Header