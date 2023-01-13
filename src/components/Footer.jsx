
import React, { Component }  from 'react';

const Footer = () => {
  return (
    <>
    <footer>
      <div className="container-fluid">
            <div className="footer-info">
              <div className="footer-title">
                <h2>JPhotography</h2>
                <p>&copy; Copyrights 2018. All Rights Reserved.</p>
              </div>
              <div className="footer-social">
                <a href=""><i className="fab fa-dribbble"></i></a>
                <a href=""><i className="fab fa-behance"></i></a>
                <a href=""><i className="fab fa-instagram"></i></a>
                <a href=""><i className="fab fa-500px"></i></a>
                <a href=""><i className="fab fa-flickr"></i></a>
                <a href=""><i className="fab fa-facebook"></i></a>
                <a href=""><i className="fab fa-twitter"></i></a>
              </div>
            </div>
      </div>
    </footer>
    <script src="assets/js/jquery-3.3.1.slim.min.js" ></script>
    <script src="assets/js/popper.min.js" ></script>
    <script src="assets/js/bootstrap.min.js" ></script>
    <script src="assets/js/mixitup.min.js" crossorigin></script>
    <script src="assets/js/custom.js" crossorigin></script>
    </>
  )
}

export default Footer