export function currencyFormatter(penny: number) {
  const currencyAmount = penny / 100
  return currencyAmount.toLocaleString('en-gb', {
    style: 'currency',
    currency: 'EUR',
  })
}
