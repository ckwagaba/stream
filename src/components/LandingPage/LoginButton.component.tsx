import React from 'react';

// actions
import { getUserData } from '../../actions/getUserData';

/**
 * @function Button
 *
 * cliked to trigger Twitter OAuth
 *
 * @return {Div: button details}
 */
const Button = () => {
  return (
    <div className="login-button" onClick={getUserData}>
      <div className="twitter-logo"><img src="../../../assets/images/twitter-logo-white.png" /></div>
      <div className="login-instruction">Login with Twitter</div>
    </div>
  );
}

export default Button;
