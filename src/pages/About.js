import Footer from '../components/Footer';
import Header from '../components/Header';
import React, { useState, useEffect } from 'react'

const About = () => {
  const [AboutMeData, fetchAboutMe] = useState([]);
  const getAboutMeData = () => {
    fetch('http://localhost:3002/v1/website/aboutme/')
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data)
        fetchAboutMe(res.data)
      })
  }

  useEffect(() => {
    getAboutMeData()
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
    <section className="about-me">
      <div className="container">
        <div className="section-title">
          <h2>About me.!</h2>
          <p>The Story Of JPhotography</p>
        </div>
        <div className="col-md-6 offset-md-3">
            <img src={AboutMeData.profile_img} alt="Jhon Das - Photographer" className="img-fluid img-center" />
        </div>
        <div className="row">
          <div className="col-md-12 my-name">
            <h2>{AboutMeData.heading}</h2>
          </div>
          <div className="col-md-4 offset-md-2">
            <p className="text-justify"> {AboutMeData.text_1}</p>
          </div>
          <div className="col-md-4">
            <p className="text-justify"> {AboutMeData.text_2}</p>
          </div>

        </div>

      </div>
    </section>
    </>
  )
}

export default About