import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import tz from 'dayjs/plugin/timezone'

dayjs.extend(utc)
dayjs.extend(tz)

class DayJSClass {
  static localTimeZone = 'Asia/Ho_Chi_Minh'

  constructor(data) {
    if (data) DayJSClass.localTimeZone = data
  }

  static formatTime = (value, format = 'DD/MM/YYYY HH:mm:ss') => {
    return dayjs(value).format(format)
  }

  static convertTimezone = (value) => {
    return dayjs.utc(value).tz(DayJSClass.localTimeZone)
  }

  static convertUTC = (value) => {
    return dayjs(value).utc().format('YYYY-MM-DD HH:mm:ss')
  }
}

export default DayJSClass
