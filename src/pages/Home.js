import Footer from '../components/Footer';
import Header from '../components/Header';
import { Outlet, Link } from "react-router-dom";
import React, { useState, useEffect } from 'react'


function Home(){
  const [portfolioData, fetchPortfolio] = useState([]);
  const getPortfolioData = () => {
    fetch('http://localhost:3002/v1/website/portfolio/')
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data[0].images)
        fetchPortfolio(res.data[0].images)
      })
  }

  useEffect(() => {
    getPortfolioData()
  }, [])

    return (
        <>
    
    <section className="borders">
      <div className="brTR">
      </div>
      <div className="brTL">
      </div>
      <div className="brBL">
      </div>
      <div className="brBR">
      </div>
    </section>

    <section className="gallery">
      <div className="container-fluid">
        <div className="row">
          {/* <div className="controls">
            <button type="button" className="control" data-filter="all">All</button>
            <button type="button" className="control" data-filter=".landscape">Landscape</button>
            <button type="button" className="control" data-filter=".portrait">Portrait</button>
            <button type="button" className="control" data-filter=".product">Product</button>
          </div> */}
        </div>

        <div className="row">
          
          <div className="fw mix-container home-gallery">
          {
            portfolioData.map((item, i) => {
              return (
                <div className="mix portrait">
                <Link to="/about" className="thumb-a">
                    <div className="item-hover">
                      <div className="hover-text"><h3>PHOTO</h3></div>
                    </div>
                    <div className="item-img">
                      <img src={item} alt=""/>
                    </div>
                </Link>
              </div>
              )
            })
          }    
          </div>
            
        </div>
      </div>
      
    </section>
    
        </>
    );
}

export default Home;