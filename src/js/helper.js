import icons from './weathers'

export function convertInCelsius (data) {
  return `${Math.floor(data - 273.16)}`
}
export function mini (variableOfImg, dataWeather) {
  variableOfImg.src = icons[dataWeather].url
}
export function convertData (data) {
  const time = new Date(data * 1000)
  return time.toLocaleString('en', { month: 'long', weekday: 'long', day: 'numeric' })
}
