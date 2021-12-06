import './App.css';
import React, { useState } from 'react';
import { GoogleMap, LoadScript,useJsApiLoader, Marker } from '@react-google-maps/api';

import BranchList from './components/BranchList';
import Button from './components/Button';
import Create from './components/Create';

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
    id: 1,
    name: "Branch One",
    lat: 43.689,
    lng: -79.474
  }, 
  {
    id: 2,
    name: "Branch Two",
    lat: 43.72,
    lng: -79.494
  },
  {
    id: 3,
    name: "Branch Three",
    lat: 43.684,
    lng: -79.576
  }
]

function App() {
  const [state, setState] = useState({
    branches: branches
  })

  const onSubmit = (name, latitude, longitude) => {
    branches.push({name, lat: Number(latitude), lng: Number(longitude)});
    setState(branches);
  }

  const onDelete = (branchID) => {

    for (let i = 0; i < branches.length; i++) {
      if (branches[i].id === branchID) {
        branches.splice(i, 1);
        setState(branches);
      }
    }    

  }

  const markers = branches.map(marker => 
    <Marker
        onLoad={onLoad}
        position={marker}
      />
  )

  return (
    <main className="layout">
      <section className="sidebar">
        <BranchList
          branches={branches}
          onDelete={onDelete}
        />
        <Button
          text="Create"
          type="submit"
        />
        <Create
          onSubmit={onSubmit}
        />
      </section> 
      <section className="map">
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


