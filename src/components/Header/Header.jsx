import React from 'react'
import './Header.css';
import videoMK1 from '../../video/videoMK1.mp4'
import '../../App.css'
import {IoIosArrowDown} from 'react-icons/io'

 const Header= () => {
    return (
        <div className="headerContainer">
            <video src={videoMK1} autoPlay loop muted />
           {/* <img src={imageSrc} alt="fondo" className="header_image"/>  */}
           <h1 className="header_title">Marketing Services</h1>
           <p className="header_subtitle">​​The Benefits of Working with Us</p>
            <div className="header-btns">
        <IoIosArrowDown size={50} className='btn'></IoIosArrowDown>
           </div> 
        </div>
    )
}

export default Header;
