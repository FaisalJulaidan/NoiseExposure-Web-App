import React, { Component } from 'react';
import MainLayout from './Layouts/MainLayout/MainLayout';
import {http, loadingMessage, destroyMessage, errorMessage} from './utilities';
import {withRouter} from 'react-router-dom';
import {getUser} from "./utilities";


class App extends Component {

  state = {
    noiseData: [],
    filtered: false
  };

  componentWillMount() {
   this.refreshNoiseData();
  }

  // refresh noise data every 3seconds to have real time data
  refreshNoiseData = () => {
    loadingMessage("Loading noise data");
    http.get('/noise').then((data) => {
      if(data && data.data) {
        this.setState({noiseData: data.data}, () => {
          // window.setTimeout(() => {
          //   this.refreshNoiseData();
          //   console.log("Call")
          // }, 5000);
        });
        destroyMessage();
      }
    }).catch(()=> errorMessage("Couldn't load noise data :("))
  };

  // show can be true or false
  filterOwnData = (doFilter) => {
    this.setState({filtered: doFilter})
  };

  render() {
    const {noiseData, filtered} = this.state;
    const user = getUser();
    return (
      <div className="App">
          <MainLayout noiseData={filtered && user ? noiseData.filter(data => data.userId === user.id) : noiseData}
                      filterOwnData={this.filterOwnData}/>
      </div>
    );
  }
}

export default withRouter(App);
