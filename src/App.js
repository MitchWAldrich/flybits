import './App.css';
import React from 'react';
import { GoogleMap, LoadScript,useJsApiLoader, Marker } from '@react-google-maps/api';

import BranchList from './components/BranchList';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: 43.689,
  lng: -79.474
};

const onLoad = marker => {
  console.log('marker: ', marker)
}

const branches = [
  {
    name: "Branch One",
    lat: 43.689,
    lng: -79.474
  }, 
  {
    name: "Branch Two",
    lat: 43.72,
    lng: -79.494
  },
  {
    name: "Branch Three",
    lat: 43.684,
    lng: -79.576
  }
]

const markers = branches.map(marker => 
  <Marker
      onLoad={onLoad}
      position={marker}
    />
)

function App() {
  return (
    <main>
      <section>
        <BranchList
        branches={branches}/>
      </section> 
      <section>
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
        {markers}
       
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
      </header>
    </div>
    </section>
    </main>
  );
}

export default React.memo(App);


