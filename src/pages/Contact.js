import Footer from '../components/Footer';
import Header from '../components/Header';
import { Outlet, Link } from "react-router-dom";
import React, { useState, useEffect } from 'react'


function Contact(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [msg, setMsg] = useState("");
    const [message, setMessage] = useState("");

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
          let res = await fetch("http://localhost:3002/v1/website/contact/", {
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
            body: JSON.stringify({
              name: name,
              email: email,
              phone: phone,
              msg: msg
            }),
          });
          let resJson = await res.json();
          console.log(res);
          if (res.status === 201) {
            setName("");
            setEmail("");
            setPhone("");
            setMsg("");
            setMessage("Email Has been Send");
          } else {
            setMessage("Some error occured");
          }
        } catch (err) {
          console.log(err);
        }
      };


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

    <section className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact.!</h2>
          <p>Get in touch with me ...</p>
        </div>
        <div className="row">
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label for="fullName" className="sr-only">Full name</label>
                <input type="text" className="form-control" id="fullName" placeholder="Enter your yame"  value={name} onChange={(e) => setName(e.target.value)}/> 
              </div>
              <div className="form-group">
                <label for="email" className="sr-only">Email address</label>
                <input type="email" className="form-control" id="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/> 
              </div>
              <div className="form-group">
                <label for="phoneNumber" className="sr-only">phone number</label>
                <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter phone number" value={phone} onChange={(e) => setPhone(e.target.value)}/> 
              </div>
              <div className="form-group">
                <label for="message" className="sr-only">Enter your message</label>
                <textarea className="form-control" id="message" rows="3" placeholder="Enter your message" value={msg} onChange={(e) => setMsg(e.target.value)}></textarea>
              </div>
              <button type="submit" className="btn btn-lg btn-primary">Submit</button>
              <div className="message">{message ? <p>{message}</p> : null}</div>
            </form>
          </div>
          <div className="col-md-6">
          <div className="google-map-code">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin" width="600" height="450" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </div>
          </div>
        </div>
        <div className="contact-info">
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <i className="fas fa-map"></i>
                <p>King Street, Melbourne, <br />
                Victorial, Australia.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <i className="fas fa-mobile"></i>
                <a href="tel:99 852 963 7410">+99 852 963 7410</a>
                <a href="tel:+91 741 852 9630">+91 741 852 9630</a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <i className="fas fa-envelope-open"></i>
                <a href="mailto:jhonaka@jphotography.com">jhonaka@jphotography.com</a>
                <a href="mailto:info@jphotography.com">info@jphotography.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
        </>
    );
}

export default Contact;