import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const mapStyles = {
        width: '70%',
        height: '60vh'
    };

const MapComponent = ({ text }) => <div>{text}</div>;
export default class MapView extends Component{
    
    static defaultProps  = {
        centre: {
            lat: 51.48,
            lng: -3.17
        },
        zoom: 13
    }
    render(){
        return(
            <div>
                <p>Map</p>
                    <div style={mapStyles}>
                        <GoogleMapReact
                        bootstrapURLKeys={{key: 'AIzaSyBAz_fOHTtaJ8spTq2h5kiGtSP-GCBDEEc'}}
                        defaultCenter={this.props.centre}
                        defaultZoom={this.props.zoom}
                        >
                        <MapComponent
                            lat = {51.481583}
                            lng = {-3.179090}
                            />
                        </GoogleMapReact>
                </div>
            </div>
        );
    }
}