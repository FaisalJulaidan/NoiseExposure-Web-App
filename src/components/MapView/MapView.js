import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React from 'react';

//used https://www.npmjs.com/package/google-maps-react
// and https://itnext.io/google-maps-react-makes-adding-google-maps-api-to-a-react-app-a-breeze-effb7b89e54

const mapStyles = {
        width: '70%',
        height: '80%',
        marginLeft: "auto",
        marginRight: "auto",
        border: '3px solid',
        borderColor: '#018A99'
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
                description: 'This is the Principality Stadium',
                dB_Level: '90dB'     
            },
            {
                name: 'Cardiff Council',
                position: { lat: 51.4694, lng: -3.1625},
                description: 'This is the Cardiff Council',
                dB_Level: '50dB'   
            },
            {
                name: 'Cardiff University',
                position: { lat: 51.4866, lng: -3.1789},
                description: 'This is the Cardiff University',
                dB_Level: '73dB'   
            },
            {
                name: 'Cardiff City Football Club',
                position: { lat: 51.4728, lng: -3.2030},
                description: 'This is the Cardiff City Football Club',
                dB_Level: '61dB'   
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
    onMapClick = () => {
        if (this.state.showingInfoWindow) {
            this.setState({
            showingInfoWindow: false,
            activeMarker: null
            });
        }
    }
    render() {
        return (
            <div>
                <div>
                    <Map 
                        google={this.props.google}
                        style = {mapStyles}
                        initialCenter={{
                            lat: 51.481583,
                            lng: -3.179090
                        }}
                        zoom={14}
                        onClick={this.onMapClick}>
                        {this.state.markers.map((marker, key) => (
                            <Marker
                                key={key}
                                name={marker.name}
                                description={marker.description}
                                position={marker.position}
                                dB_Level={marker.dB_Level}
                                onClick={this.onMarkerClick} >
                            </Marker> 
                        ))}
                        <InfoWindow
                            marker = { this.state.activeMarker }
                            visible = { this.state.showingInfoWindow }>
                            <h1>{this.state.selectedPlace.name}</h1>
                            <p>{this.state.selectedPlace.description}</p>
                            <p>Noise Level: {this.state.selectedPlace.dB_Level}</p>
                        </InfoWindow>
                    </Map>
                </div>
            </div>
        );
      }
}
export default GoogleApiWrapper({
    apiKey: ('AIzaSyBAz_fOHTtaJ8spTq2h5kiGtSP-GCBDEEc')
  })(MapView)