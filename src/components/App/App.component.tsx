import React, { Component } from 'react';
import { connect } from 'react-redux';

// components
import LandingPage from '../LandingPage/LandingPage.component';

// stylesheet
import './App.scss';

// interfaces
import {
  IAppProps,
  IAppState,
} from '../../interfaces/app';

/**
 * The main app component
 *
 * @class App
 * @extends {React.Component<IAppProps, IAppState>}
 */
class App extends Component<IAppProps, IAppState> {
  /**
   * Creates an instance of App
   *
   * @param {object} props
   * @memberof App
   * @returns {void}
   */
  constructor(props: IAppProps) {
    super(props);

    this.state = {
      accessToken: ''
    };
  }

  /**
   * When component receives props from store
   *
   * @param {nextProps}
   * @memberof App
   * @returns {void}
   */
  public componentWillReceiveProps(nextProps: IAppProps) {
    if (this.props !== nextProps){
      this.setState({
        accessToken: nextProps.accessToken
      });
    }
  }

  /**
   * Defines component JSX
   *
   * @memberof APP
   * @returns {JSX}
   */
  public render() {
    console.log(this.state.accessToken);
    return (
      <div>
        {
          this.state.accessToken
          &&
          <div>StreamList</div>
        }
        {
          !this.state.accessToken
          &&
          <LandingPage />
        }

      </div>
    );
  };
}

const mapStateToProps = (state: any) => {
  return {
    accessToken: state.user.accessToken,
  };
};

export default connect(mapStateToProps)(App);
