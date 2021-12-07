export function getBranchById(branches, id) {
  for (let branch of branches) {
    if (branch.id === id) {
      return branch
    }
  }
}

export function getBranchByCoords(branches, latitude, longitude) {
  for (let branch of branches) {
    if (branch.lat === latitude && branch.lng === longitude) {
      return branch
    }
  }
}