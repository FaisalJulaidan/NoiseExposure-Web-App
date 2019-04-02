import React, { Component } from 'react';
import MainLayout from './Layouts/MainLayout/MainLayout';
import {destroyMessage, errorMessage} from './utilities';
import {withRouter} from 'react-router-dom';
import {getUser} from "./utilities";
import axios from 'axios'


class App extends Component {

  state = {
    noiseData: [],
    filtered: false,
    liveMode: true,
  };

  componentWillMount() {

    // for live mode feature
    window.setInterval(() => {
      if(this.state.liveMode) {
        this.refreshNoiseData();
      }
    }, 4000);

  }


  refreshNoiseData = () => {
    axios.get('/api/noise').then((data) => {
      if(data && data.data) {
        this.setState({noiseData: data.data});
        destroyMessage();
      }
    }).catch(()=> errorMessage("Couldn't load noise data :("))
  };

  // show can be true or false
  filterOwnData = (doFilter) => {
    this.setState({filtered: doFilter})
  };


  // turn on/off live mode
  switchLiveMode = (value) => {
    this.setState({liveMode: value})
  };

  render() {
    const {noiseData, filtered} = this.state;
    const user = getUser();
    return (
      <div className="App">
          <MainLayout noiseData={filtered && user ? noiseData.filter(data => data.userId === user.id) : noiseData}
                      filterOwnData={this.filterOwnData}
                      switchLiveMode={this.switchLiveMode}
                      liveMode={this.state.liveMode}
          />
      </div>
    );
  }
}

export default withRouter(App);
