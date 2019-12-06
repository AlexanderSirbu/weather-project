
const API_KEY = '7429042c97e6a05117b067c14694f822'

export function getApi (city) {
  return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
    .then((response) => response.json())
}
export function getApiDaily (city) {
  return fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`)
    .then((response) => response.json())
}
