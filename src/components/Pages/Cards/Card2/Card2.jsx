import React from "react";
import "./Card2.css";
import image from "../../../../images/mk1.jpg";

function Card2() {
  return (
    <div className="padre">
      <div className="container-img2">
        <div className="container-img">
          <img src={image} alt="Travel" className="cardsimg" /></div>
        <div className="imgcontent">
          <h1 className="titleimage2">Paid Advertising on All Channels</h1>
          <h3 className="texto2">
            To reach your potential buyers, you have to know who they are, where
            they spend their time online, and how they make their buying
            decisions. Agents who use luxury real estate marketing services are
            able to identify your niche market, then create paid ads on
            Facebook, Google, Instagram, and YouTube that reach those interested
            in your property. These paid ad campaigns are highly customized and
            targeted, ensuring you are not spending money marketing to those who
            are not in the market for a property such as yours.
          </h3>
        </div>
      </div>

      
    </div>
  );
}



export  default Card2;
