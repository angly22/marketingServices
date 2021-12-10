import React, { useState} from "react";
import { Link } from "react-router-dom";
import log_gatien from "../../images/log_gatien.png";
import { FiMenu, FiX } from "react-icons/fi";
//import { Button } from "../Helpers/Button/Button";
import './Navbar.css'
function Navbar() {
  const navbarLinks = [
    { url: "about", title: "About" },
    { url: "blog", title: "Blog" },
    { url: "testi", title: "Testimonials" },
    { url: "contact", title: "Contact us" },
  ];

  const [click, setClick] = useState(false);
  //const [button, setButton] = useState(true);
  const handleClick = () => {setClick(!click)};
  const closeMenu = () => {setClick(false)};

//   const showButton=()=>{
//       if(window.innerWidth<=960){
//           setButton(false)
//       }else{
//         setButton(true)
//       }
//   }

//   useEffect(() => {
//     showButton();
//   }, []);

//   window.addEventListener('resize', showButton);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <img
              id="logoNav"
              src={log_gatien}
              className="logo"
              alt="300px"
              width="200px"
            />
          </Link>
          <div className="menu-icon">
            {click ? (
              <FiX size={25} className="navbar_menu" onClick={handleClick} />
            ) : (
              <FiMenu size={25} className="navbar_menu" onClick={handleClick} />
            )}
          </div>
          <ul className={click ? "nav-menu  active" : "nav-menu "}>
            {navbarLinks.map((item, index) => {
              return (
                <li className="nav-item" key={index}>
                  <Link
                    to={`/${item.url}`}
                    className="nav-links"
                    onClick={closeMenu}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
          {/* {button && <Button buttonStyle='btn--outline'>XXXX</Button>} */}
        </div>
      </nav>
    </>
  );
}
export default Navbar;
