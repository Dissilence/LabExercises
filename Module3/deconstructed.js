function printWeather() {
  /*  let currentTemp = 28; //degrees celcius
    let maxTemp = 33;
    let windSpeed = 5; //km/h
    let forecast = 'Mostly sunny'; */
    const [currentTemp, maxTemp,  windSpeed, forecast] = [28, 33, 5, 'Mostly sunny']

    console.log(`Today's weather forecast: ${forecast}, with a wind speed of ${windSpeed}km/h. The current temperature is ${currentTemp} with a max of ${maxTemp} degrees.`)
}
console.log(printWeather())

const foods = new Set(['pizza', 'chips', 'pasta', 'seafood', 'salad', 'noodles', 'vegetables']);
    const [firstFood, , thirdFood, , fifthFood, , seventhFood] = foods
    console.log(firstFood, thirdFood, fifthFood)


const plantNames = new Map([
    ['Blueberry', 'Vaccinium'],
    ['Daylily', 'Hemerocallis'],
    ['Foxglove', 'Digitalis'],
    ['Lavender', 'Lavandula']
])
const [ [plantCommon, plantLatin], ...otherPlants] = plantNames
console.log(plantCommon, plantLatin)
console.log(otherPlants)

for (let[commonName, latinName] of plantNames.entries()){
    console.log(commonName + ' is ' + latinName)
}

function displayComponent({height = 200, width = 100, title}) {
    console.log(height)
    console.log(width)
    console.log(title)
    console.log(`<div style="width:${width}px; height:${height}px"><h2>${title}</h2></div>`)
}

displayComponent({width:200, title:'My Awesome Component'})
displayComponent({title:'My Amazing Component'})
displayComponent({width:300, height:300, title:'My Average Component'})