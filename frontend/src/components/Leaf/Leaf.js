import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import './LeafStyle.css';

class Leaf extends Component {
	state = {
		lat: 32.7766642,
		lng: -96.7969879,
		zoom: 10
	};

	render() {
		const position = [ this.state.lat, this.state.lng ];

		return (
			<Map className="map" center={position} zoom={this.state.zoom} minZoom={12}>
				<TileLayer
					attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>

				<Marker position={position}>
					<Popup>
						A pretty CSS3 popup. <br /> Easily customizable.
					</Popup>
				</Marker>
			</Map>
		);
	}
}

export default Leaf;
