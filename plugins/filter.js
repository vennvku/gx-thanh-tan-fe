import Vue from 'vue'
import BigNumberClass from '~/utils/helpers/bigNumber'
import DayJSClass from '~/utils/helpers/day'

Vue.filter('formatNumber', (value, decimal = 0, getZero = true) => {
  if (value) {
    value = BigNumberClass.toFormat(value, decimal)
    const [beforeDot, afterDot] = `${value}`.split('.')
    const beforeDotTrimmed = beforeDot
    let afterDotTrimmed = afterDot?.split('') ?? []
    while (+afterDotTrimmed[afterDotTrimmed.length - 1] === 0) {
      afterDotTrimmed.pop()
    }
    afterDotTrimmed = afterDotTrimmed.join('')
    return afterDotTrimmed
      ? `${beforeDotTrimmed}.${afterDotTrimmed}`
      : `${beforeDotTrimmed}`
  } else if (getZero) return 0
  else return null
})

Vue.filter('dayDisplay', (value, format = 'DD/MM/YYYY HH:mm:ss') => {
  if (value) {
    return DayJSClass.formatTime(value, format)
  } else return ''
})
