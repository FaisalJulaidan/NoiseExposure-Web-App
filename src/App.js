import React, { Component } from 'react';
import MainLayout from './Layouts/MainLayout/MainLayout';
import {http} from './utilities';
import {withRouter} from 'react-router-dom';


class App extends Component {

  state = {
    noiseData: null,
  };

  componentWillMount() {
    http.get('/noise').then((data) => {
      this.setState({noiseData: data.data})
    })
  }

  render() {
    return (
      <div className="App">
          <MainLayout noiseData={this.state.noiseData}/>
      </div>
    );
  }
}

export default withRouter(App);
