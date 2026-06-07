import React from 'react'
import "./About.css";

export const About = () => {
  return (
<div className="about-container">
      <h1 className="about-title">About Netflix</h1>

      <p className="about-text">
        Netflix is a streaming service that offers a wide variety of award-winning
        TV shows, movies, anime, documentaries, and more on thousands of
        internet-connected devices.
      </p>

      <p className="about-text">
        You can watch as much as you want, whenever you want, without a single ad –
        all for one low monthly price.
      </p>

      <div className="about-features">
        <div className="feature-box">
          <h3>📺 Unlimited Content</h3>
          <p>Watch TV shows and movies anytime, anywhere.</p>
        </div>

        <div className="feature-box">
          <h3>📱 Watch Anywhere</h3>
          <p>Enjoy on mobile, tablet, laptop, and TV.</p>
        </div>

        <div className="feature-box">
          <h3>🚫 No Ads</h3>
          <p>Enjoy uninterrupted streaming.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
  
