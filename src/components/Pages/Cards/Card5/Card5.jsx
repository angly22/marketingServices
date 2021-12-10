import React from "react";
import "../Card5/Card5.css";
import videoMK2 from '../../../../video/videoMK2.mp4'

function Card5() {
  return (
    <>
      <div className="card5">
      <video src={videoMK2} autoPlay loop muted />

        <h1>Social Media Marketing</h1>
        <div className="cards-container-5">
          <div className="cards-wrapper-5">
            <ul className="cards-items-5">
              <h3>
                If your real estate agent is an influencer on social media, he
                or she has access to thousands of niche buyers who are ready to
                invest in property. To be an influencer, an agent either needs
                to dedicate a large chunk of their time to social media or they
                need to partner with luxury real estate marketing service
                providers who can put in the work for them. Wouldn’t you rather
                your agent spent his or her time marketing your property and let
                an expert handle their social media presence? At Luxury
                Presence, our dedicated success team utilizes an agent’s stories
                and feed posts to help them go viral and become an authority in
                their industry. Once they’ve harnessed the power of becoming an
                influencer, they can use their voice to advocate for your home
                and sell it more quickly than their competitors.
              </h3>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card5;
