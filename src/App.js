import './App.css';
import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

import BranchList from './components/BranchList';
import Button from './components/Button';
import Create from './components/Create';

import { newId } from './helpers/newId';

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
    lng: -79.474,
    promoOffer: "Bonus $1000 on signing",
    promoPhoto: "images/signingBonus.jpg"
  }, 
  {
    id: 2,
    name: "Branch Two",
    lat: 43.72,
    lng: -79.494,
    promoOffer: undefined,
    promoPhoto: undefined
  },
  {
    id: 3,
    name: "Branch Three",
    lat: 43.684,
    lng: -79.576,
    promoOffer: undefined,
    promoPhoto: undefined
  }
]

function App() {
  const [state, setState] = useState({
    branches: branches
  })

  const [create, setCreate] = useState("false")
  const onCreate = event => {
    event.preventDefault();
    setCreate("true");
  }

  const onSubmit = (name, latitude, longitude, promoOffer, promoPhoto) => {
    const id = newId(branches)
    branches.push({id, name, lat: Number(latitude), lng: Number(longitude), promoOffer, promoPhoto});
    setState(branches);
    setCreate("false");
  }

  const onDelete = (branchID) => {

    for (let i = 0; i < branches.length; i++) {
      if (branches[i].id === branchID) {
        branches.splice(i, 1);
        setState(branches);
      }
    }    

  }

  const offerSubmit = (branch, promoOffer, promoPhoto) => {
    // const branch = getBranchById(branches, id);
    console.log(branch)
    branch.promoOffer = promoOffer;
    branch.promoPhoto = promoPhoto;
    setState(branches)
  }

  const markers = branches.map(marker => 
    <Marker
        onLoad={onLoad}
        position={marker}
      />
  )

  if (create === "false") {

  return (
    <main className="layout">
      <section className="sidebar">
        <BranchList
          branches={branches}
          onDelete={onDelete}
          offerSubmit={offerSubmit}
        />
        <Button
          text="Create"
          type="submit"
          onClick={onCreate}
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

  if (create === "true") {

    return (
      <main className="layout">
        <section className="sidebar">
          <BranchList
            branches={branches}
            onDelete={onDelete}
            offerSubmit={offerSubmit}
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
}

export default React.memo(App);


