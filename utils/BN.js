import { ethers } from 'ethers'

// Regex to parse numbers safely
const BNRegex = /^(?<neg>-?)(?<whole>\d*)(\.(?<fraction>\d*))?$/

export function toBN(x) {
  return ethers.BigNumber.from(x)
}

// -----------------------------
// BigNumber prototype extensions
// -----------------------------
ethers.BigNumber.prototype.format = function (decimals, precision = 0) {
  const num = Number(this.toString()) / 10 ** decimals
  return num.toLocaleString(undefined, {
    maximumFractionDigits: precision
  })
}

ethers.BigNumber.prototype.e = function (x) {
  return this.mul(toBN(10).pow(x))
}

// -----------------------------
// String → BigNumber parsing
// -----------------------------
export function parse(input, decimals = 0) {
  if (typeof input !== 'string') {
    throw new Error(`[BN.parse] Input must be string, got: ${typeof input}`)
  }

  const match = input.match(BNRegex)
  if (!match) {
    throw new Error(`[BN.parse] Invalid number: ${input}`)
  }

  const { whole, fraction, neg } = match.groups

  if (fraction && fraction.length > decimals) {
    throw new Error(`[BN.parse] Too many decimal places in ${input}`)
  }

  const fractionBN = !fraction
    ? '0'
    : fraction.length > decimals
    ? fraction.substring(0, decimals)
    : fraction.padEnd(decimals, '0')

  return toBN(neg + whole).e(decimals).add(neg + fractionBN)
}
