export function newId(branches) {
  let highestId = 0;
  for (let branch of branches) {
    if (branch.id > highestId) {
      highestId = branch.id
    }
  }
  return highestId + 1
}