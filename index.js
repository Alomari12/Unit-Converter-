/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let userInput= document.getElementById("rectangle")
let convertEL=  document.getElementById("convert-btn")
let unit1El = document.getElementById("unit1")
let unit2El = document.getElementById("unit2")
let unit3El = document.getElementById("unit3")



function convertUnits() {
    let userValue = userInput.value
    let metersToFeet = (3.281* userValue).toFixed(2)
    let feetToMeters = (userValue / 3.281).toFixed(2)
    let answer1 = `${userValue} meters = ${metersToFeet} Feet| ${userValue} Feet = ${feetToMeters}`
    unit1El.innerHTML = answer1;
    
    
    
    let litersTogallons = (0.264* userValue).toFixed(2)
    let gallonsToliters = (userValue / 0.264).toFixed(2)
    let answer2 = `${userValue} liters  = ${litersTogallons} gallons| ${userValue} gallons = ${gallonsToliters} liters`
    unit2El.innerHTML = answer2;
    
    
    let kilosTopounds = (2.204* userValue).toFixed(2)
    let poundsTokilos = (userValue / 2.204).toFixed(2)
    let answer3 = `${userValue} kilos  = ${kilosTopounds} pounds| ${userValue} pounds = ${poundsTokilos} kilos`
    unit3El.innerHTML = answer3;


    
    
    
    
    
    
}
   