import './App.css';
import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

import BranchList from './components/BranchList';
import Button from './components/Button';
import Create from './components/Create';
import Location from './components/Location';

import { newId } from './helpers/newId';
import { getBranchByCoords } from './helpers/selectors';

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

const recentVisits = [
  {
    id: 1,
    name: "Branch One",
    lat: 43.689,
    lng: -79.474,
    promoOffer: "Bonus $1000 on signing",
    promoPhoto: "images/signingBonus.jpg"
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

  const [user, setUser] = useState("Marketer");

  const toggleUser = () => {
    if (user === "Marketer") {
      setUser("End User")
    }
    if (user === "End User") {
      setUser("Marketer")
    }
  }

  const [create, setCreate] = useState("false");
  const onCreate = event => {
    event.preventDefault();
    setCreate("true");
  }

  const [location, setLocation] = useState("false");
  const addLocation = event => {
    event.preventDefault();
    setLocation("true");
  }

  const onSubmit = (name, latitude, longitude, promoOffer, promoPhoto) => {
    const id = newId(branches)
    branches.push({ id, name, lat: Number(latitude), lng: Number(longitude), promoOffer, promoPhoto });
    setState(branches);
    setCreate("false");
  }

  const onLocation = (latitude, longitude) => {
    const branch = getBranchByCoords(branches, Number(latitude), Number(longitude));
    console.log('onlocbra', branch, typeof latitude, typeof longitude)
    recentVisits.push({ id: branch.id, name: branch.name, lat: Number(latitude), lng: Number(longitude), promoOffer: branch.promoOffer, promoPhoto: branch.promoPhoto});
    setLocation("false")
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

  const userMarkers = recentVisits.map(marker =>
    <Marker
      onLoad={onLoad}
      position={marker}
    />
  )

  if (user === "Marketer") {

    if (create === "false") {

      return (
        <main className="layout">
          <section className="sidebar">
            <h2>User: Marketer</h2>
            <Button
            text="Toggle User"
            onClick={toggleUser}
            />
            <BranchList
              branches={branches}
              onDelete={onDelete}
              offerSubmit={offerSubmit}
              user={user}
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

                    { /* Child components, such as markers, info windows, etc. */}
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
          <h2>User: Marketer</h2>
            <BranchList
              branches={branches}
              onDelete={onDelete}
              offerSubmit={offerSubmit}
              user={user}
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

                    { /* Child components, such as markers, info windows, etc. */}
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

  if (user === "End User") {
    if (location === "false") {
      return (
        <main className="layout">
          <section className="sidebar">
            <h2>User: End User</h2>
            <Button
            text="Toggle User"
            onClick={toggleUser}
            />
            <h2>List of Offer(s):</h2>
            <BranchList
              branches={recentVisits}
              onDelete={onDelete}
              offerSubmit={offerSubmit}
              user={user}
            />
            <Button
              text="Add Location"
              type="submit"
              onClick={addLocation}
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
                    {userMarkers}

                    { /* Child components, such as markers, info windows, etc. */}
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

    if (location === "true") {

      return (
        <main className="layout">
          <section className="sidebar">
          <h2>User: End User</h2>
            <BranchList
              branches={recentVisits}
              onDelete={onDelete}
              offerSubmit={offerSubmit}
              user={user}
            />
            <Location
              onLocation={onLocation}
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

                    { /* Child components, such as markers, info windows, etc. */}
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


