export function hasPromotion(branch) {
  if (branch["promoOffer"]) {
    return "true"
  }
  return "false"
}