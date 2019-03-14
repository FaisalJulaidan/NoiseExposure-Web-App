import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React from 'react';

const mapStyles = {
        width: '100%',
        height: '100%',
        border: '3px solid',
        borderColor: '#018A99',
    };

export class MapView extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          showingInfoWindow: false,
          markers: [
            {
                name: 'Principality Stadium',
                position: { lat: 51.4782, lng: -3.1826},
                description: 'This is the Principality Stadium'
            },
            {
                name: 'Cardiff Council',
                position: { lat: 51.4694, lng: -3.1625},
                description: 'This is the Cardiff Council'
            },
            {
                name: 'Cardiff University',
                position: { lat: 51.4866, lng: -3.1789},
                description: 'This is the Cardiff University'
            },
            {
                name: 'Cardiff City Football Club',
                position: { lat: 51.4728, lng: -3.2030},
                description: 'This is the Cardiff City Football Club'
            }
        ],
          activeMarker: {},
          selectedPlace: {}
        }
    }
    onMarkerClick = (props, marker, e) => {
        this.setState({
          selectedPlace: props,
          activeMarker: marker,
          showingInfoWindow: true
        });
      }
    onMapClick = (props) => {
    if (this.state.showingInfoWindow) {
        this.setState({
        showingInfoWindow: false,
        activeMarker: null
        });
    }
    }
    render() {
        return (
                <div style={{position: 'inherit'}}>
                    <Map 
                        google={this.props.google}
                        style = {mapStyles}
                        initialCenter={{
                            lat: 51.481583,
                            lng: -3.179090
                        }}
                        zoom={14}
                        onClick={this.onMapClicked}>
                        {this.state.markers.map((marker, key) => (
                            <Marker
                                key={key}
                                name={marker.name}
                                description={marker.description}
                                position={marker.position}
                                onClick={this.onMarkerClick} >
                            </Marker> 
                        ))}
                        <InfoWindow
                            marker = { this.state.activeMarker }
                            visible = { this.state.showingInfoWindow }>
                            <h1>{this.state.selectedPlace.name}</h1>
                            <p>{this.state.selectedPlace.description}</p>
                            <p>50 dB</p>
                        </InfoWindow>
                    </Map>
            </div>
        );
      }
}
export default GoogleApiWrapper({
    apiKey: ('AIzaSyBAz_fOHTtaJ8spTq2h5kiGtSP-GCBDEEc')
  })(MapView)