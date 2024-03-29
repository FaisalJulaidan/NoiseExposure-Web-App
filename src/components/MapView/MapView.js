import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React from 'react';
import { severityStyle } from './../../utilities';

//used https://www.npmjs.com/package/google-maps-react
// and https://itnext.io/google-maps-react-makes-adding-google-maps-api-to-a-react-app-a-breeze-effb7b89e54

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
    };

    onMapClick = () => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };

    render() {
        const {noiseData} = this.props;
        const {selectedPlace} = this.state;
        return (
                <div>
                    {noiseData ?
                        <Map
                            google={this.props.google}
                            style = {mapStyles}
                            initialCenter={{
                                lat: 51.481583,
                                lng: -3.179090
                            }}
                            zoom={14}
                            onClick={this.onMapClick}>
                            {noiseData.map((marker, key) => (
                                <Marker
                                    key={key}
                                    name={marker.locationName}
                                    position={{ lat: marker.latitude, lng: marker.longitude}}
                                    dBLevel={marker.level}
                                    severity={marker.severity}
                                    noiseType={marker.noiseType}
                                    device={marker.deviceModel}
                                    timeStamp={marker.timeStamp}
                                    onClick={this.onMarkerClick}
                                    icon={{url: severityStyle(marker.severity).markerLink}}
                                    >
                                </Marker>
                            ))}
                            <InfoWindow
                                marker = { this.state.activeMarker }
                                visible = { this.state.showingInfoWindow }>
                                    <h1>{selectedPlace.name}</h1>
                                    <p>Noise Level: {selectedPlace.dBLevel ? selectedPlace.dBLevel : "Unknown"} dB</p>
                                    <p>Severity: {selectedPlace.severity ? selectedPlace.severity : "Unknown"}</p>
                                    <p>Noise Type: {selectedPlace.noiseType  ? selectedPlace.noiseType : "Unknown"}</p>
                                    <p>Device Model: {selectedPlace.device  ? selectedPlace.device : "Unknown"}</p>
                                    <p>Timestamp: {selectedPlace.timeStamp  ? selectedPlace.timeStamp : "Unknown"}</p>
                            </InfoWindow>
                        </Map>
                        : null
                    }

                </div>
        );
    }
}
export default GoogleApiWrapper({
    apiKey: ('AIzaSyBAz_fOHTtaJ8spTq2h5kiGtSP-GCBDEEc')
})(MapView)