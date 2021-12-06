export function hasPromotion(branch) {
  console.log('bpo', branch)
  if (branch["promoOffer"]) {
    return "true"
  }
  return "false"
}