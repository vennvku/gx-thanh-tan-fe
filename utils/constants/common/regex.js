const isEmpty = (field) => {
  return !field || String(field).length === 0
}

const formatPhone = (value) =>
  String(value)
    .replace(/[^\d]+/g, '')
    .substring(0, 16)

const formatCode = (code, maxLength) => {
  return String(code)
    .replace(/[^\d]+/g, '')
    .substring(0, maxLength)
}

const postCode = (code) => {
  const regex = /^\d{7}$/

  return regex.test(code)
}

const formatNumber = (value) => String(value).replace(/[^\d]+/g, '')

const camelToSnake = (string) => {
  return String(string).replace(
    /[A-Z]/g,
    (letter) => `_${letter.toLowerCase()}`
  )
}

const snakeToCamel = (string) => {
  return String(string).replace(/([-_][a-z0-9])/gi, ($sub) => {
    return $sub.toUpperCase().replace('-', '').replace('_', '')
  })
}

const snakeToDash = (string) => {
  return String(string).replace(/_/g, '-')
}

const formatNumeric = (price) => {
  return String(price).replace(/^0+|[^0-9]+/g, '')
}

const formatLimitNumber = (value, limit) => {
  value = String(value).replace(/^0+|[^0-9]+/g, '')

  if (value > limit) return limit
  else return value
}

export default {
  isEmpty,
  formatPhone,
  formatCode,
  postCode,
  formatNumber,
  camelToSnake,
  snakeToCamel,
  snakeToDash,
  formatNumeric,
  formatLimitNumber,
}
