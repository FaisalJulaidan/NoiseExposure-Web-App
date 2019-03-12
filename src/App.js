import React, { Component } from 'react';
import MapView from './components/MapView/MapView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Noise Exposure Web Application
          </p>
        </header>
        <MapView />
      </div>
    );
  }
}

export default App;
