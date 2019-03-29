import React, { Component } from 'react';
import MainLayout from './Layouts/MainLayout/MainLayout';
import {http} from './utilities';
import {withRouter} from 'react-router-dom';


class App extends Component {

  state = {
    noiseData: null,
  };

  componentWillMount() {
   this.refreshNoiseData();
  }

  // refresh noise data every 3seconds to have real time data
  refreshNoiseData = () => {
    http.get('/noise').then((data) => {
      this.setState({noiseData: data.data}, () => {
        // window.setTimeout(() => {
        //   this.refreshNoiseData();
        //   console.log("Call")
        // }, 3000);
      })
    })
  };

  // show can be true or false
  filerOwnData = (doFilter) => {
    console.log(doFilter)
  };

  render() {
    return (
      <div className="App">
          <MainLayout noiseData={this.state.noiseData} filerOwnData={this.filerOwnData}/>
      </div>
    );
  }
}

export default withRouter(App);
