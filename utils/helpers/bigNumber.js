import { BigNumber } from 'bignumber.js'

export default class BigNumberClass {
  static toFormat = (bigNumber, decimal) => {
    return new BigNumber(bigNumber).toFormat(decimal, BigNumber.ROUND_UP)
  }
}
