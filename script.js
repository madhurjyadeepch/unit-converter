let lengthResult = document.getElementById('length-result')
let volumeResult = document.getElementById('volume-result')
let massResult = document.getElementById('mass-result')

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

function length(inputNum) {
    const lengthFt = (inputNum * 3.281).toFixed(3)
    const lengthMeter = (inputNum * (1 / 3.281)).toFixed(3)

    lengthResult.innerHTML = `${inputNum} meters = ${lengthFt} feet | ${inputNum} feet = ${lengthMeter} meters`
}

function volume(inputNum) {
    const volLiter = (inputNum * 0.264).toFixed(3)
    const volGallon = (inputNum * (1 / 0.264)).toFixed(3)

    volumeResult.innerHTML = `${inputNum} liters = ${volLiter} gallons | ${inputNum} gallons = ${volGallon} liters`
}

function mass(inputNum) {
    const massKg = (inputNum * 2.204).toFixed(3)
    const massPound = (inputNum * (1 / 2.204)).toFixed(3)

    massResult.innerHTML = `${inputNum} kilos = ${massKg} pounds | ${inputNum} pounds = ${massPound} kilos`
}

function result() {
    let inputEl = document.getElementById('number')
    let inputNum = inputEl.valueAsNumber

    if (isNaN(inputNum)) {
        alert("Please enter a number!")
        return
    }

    length(inputNum)
    volume(inputNum)
    mass(inputNum)
}