import { getDate } from './timeanddata'
import { mini, convertInCelsius } from './helper'

export async function getInformation (data) {
  const {
    name, weather, main, wind

  } = data
  const nameCity = document.querySelector('.nameCity')
  const dateCity = document.querySelector('.tempDate')
  const conCity = document.querySelector('.cityCondition')
  const tempCity = document.querySelector('.tempCity')
  const windCity = document.querySelector('.windCity')
  const humidityCity = document.querySelector('.humidityCity')
  const imgCity = document.querySelector('.cityIcon')

  nameCity.innerHTML = name
  dateCity.innerHTML = getDate()
  conCity.innerHTML = weather[0].main
  tempCity.innerHTML = convertInCelsius(main.temp)
  windCity.innerHTML = `${wind.speed} Km/h`
  humidityCity.innerHTML = ` ${main.humidity} %`

  mini(imgCity, weather[0].main)
}

export function getInformationForList (data) {
  const {
    name, main, weather

  } = data
  const mainblock = document.querySelector('.container_list')
  const div = document.createElement('div')
  div.classList.add('main__item')
  const nameP = document.createElement('p')
  nameP.classList.add('main__item-title')
  const tempP = document.createElement('p')
  tempP.classList.add('main__item-temp')
  const spanP = document.createElement('span')
  const imgP = document.createElement('img')
  imgP.classList.add('main__item-icon')

  nameP.innerHTML = name
  tempP.innerHTML = convertInCelsius(main.temp)
  spanP.innerHTML = '°C'

  mainblock.append(div)
  div.append(nameP)
  div.append(spanP)
  spanP.append(tempP)
  div.append(imgP)

  mini(imgP, weather[0].main)
}
