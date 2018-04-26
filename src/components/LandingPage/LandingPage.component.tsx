import React from 'react';

// components
import Button from './LoginButton.component';

// stylesheet
import './LandingPage.scss';

/**
 * @function LandingPage
 *
 * static page
 * called when there is no accessToken in localStorage
 *
 * @return {Div: LandingPage components}
 */
const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="landing-page-overlay">
        <div className="intro">
          <div className="intro-name">
            Stream
          </div>
          <div className="intro-description">
            <div className="intro-description-engage">Engage Your Audience</div>
            <div className="intro-description-follow">Follow Your Favourites</div>
          </div>
        </div>
        <Button />
      </div>
    </div>
  );
}

export default LandingPage;
