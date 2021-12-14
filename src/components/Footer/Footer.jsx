import React from "react";
import { Link } from "react-router-dom";
// import { Button } from '../Helpers/Button/Button'
import { BsFacebook,BsTwitter,BsInstagram,BsYoutube} from "react-icons/bs";
import { DiJqueryLogo} from "react-icons/di";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-info">
        <p className="footer-info-heading">
          I want more Information About This
        </p>
        <p className="footer-desciption-text">
            You Can Be "Luxury"</p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="footer-input"
            />
            <button  type="submit" className="buttonbb">Submit</button>
          </form>
        </div>
      </section>
      <div className="footer-links">
          <div className="footer-link-wrapper">
              <div className="footer-link-items">
                  <h2>About</h2>
                  <Link to='/about'>How it Works</Link>
                  <Link to='/'>Clients</Link>
                  <Link to='/'>Investors</Link>
                  <Link to='/'>Politics</Link>
                  <Link to='/'>People</Link>
                  
              </div>
              <div className="footer-link-items">
                  <h2>Contact Us</h2>
                  <Link to='/'>Support</Link>
                  <Link to='/'>Portfolio</Link>
                  <Link to='/'>Referrals</Link>
                  <Link to='/'>Charity</Link>
                  
              </div>
              </div>
            
          
      </div>
      <section className="social-media">
          <div className="social-media-wrap">
              <div className="footer-logo">
              <Link to='/' className='social-logo'>
              <DiJqueryLogo size={25} className="social-logo"  />
              </Link> 
              </div>
              <div className="Social-logo">
              <Link to='/' className='social-icon-link instagram'>
              <BsInstagram size={25} className="social-logo"  />
              </Link> 
              </div>
              <div className="Social-logo">
              <Link to='/' className='social-icon-link youtube'>
              <BsYoutube size={25} className="social-logo"  />
              </Link> 
              </div>
              <div className="Social-logo">
              <Link to='/' className='social-icon-link twitter'>
              <BsTwitter size={25} className="social-logo"  />
              </Link> 
              </div>
              <div className="Social-logo">
              <Link to='/' className='social-icon-link twitter'>
              <BsFacebook size={25} className="social-logo"  />
              </Link> 
              </div>
          </div>
      </section>
    </div>
  );
}

export default Footer;
