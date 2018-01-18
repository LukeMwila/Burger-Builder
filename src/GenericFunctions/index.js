/** Convert number to have two decimal places */
export function addTwoDecimalPlaces (number) {
  // return parseFloat(number).toFixed(2)
  return numberWithCommas(parseFloat(number).toFixed(2))
}

function numberWithCommas (x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}