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
    lng: -79.494
  },
  {
    id: 3,
    name: "Branch Three",
    lat: 43.684,
    lng: -79.576
  }
]

export function getBranchById(branches, id) {
  for (let branch of branches) {
    console.log(branches)
    if (branch.id === id) {
      return branch
    }
  }
}

export function getBranchByCoords(branches, latitude, longitude) {
  for (let branch of branches) {
    console.log("latbranch", branch)
    if (branch.lat === latitude && branch.lng === longitude) {
      return branch
    }
  }
}