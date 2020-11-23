import numeral from 'numeral'

const dollarfilter = function(value) {
  if (!value) {
    return '$0'
  }

  return numeral(value).format('($ 0.00a)')
}

export { dollarfilter }
