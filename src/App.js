import logo from './logo.svg';
import './App.css';
import React from 'react';
import { GoogleMap, LoadScript,useJsApiLoader, Marker } from '@react-google-maps/api';
// const ScriptLoaded = require("../../docs/ScriptLoaded").default;

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: 43.689,
  lng: -79.474
};

const branchOne = {
  lat: 43.689,
  lng: -79.474
};

const branchTwo = {
  lat: 43.69,
  lng: -79.474
};

const onLoad = marker => {
  console.log('marker: ', marker)
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LoadScript
      googleMapsApiKey=""
    >
      <GoogleMap
        id="marker-example"
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        <Marker
      onLoad={onLoad}
      position={branchOne}
    />
    <Marker
      onLoad={onLoad}
      position={branchTwo}
    />
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
      </header>
    </div>
  );
}

export default React.memo(App);


