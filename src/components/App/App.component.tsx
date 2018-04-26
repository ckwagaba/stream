import React from 'react';

// components
import LandingPage from '../LandingPage/LandingPage.component';

// stylesheet
import './App.scss';

// check for accessToken from sessionStorage
const accessToken = sessionStorage.getItem('streamAccessToken');

let appContent: any;

if (!accessToken || accessToken === null) {
  appContent = <LandingPage />;
} else {
  // provide StreamList component
  appContent = accessToken;
}

const App = () => {
  return (
    <div>
      {
        appContent
      }
    </div>
  );
};

export default App;
