function makeShowTemperature(isFahrenheit){
// function expressions are perfect to return a function as a return value
    if (isFahrenheit){
        return function (degrees){
            return `The temperature is: ${degrees * 1.8 + 32} Fahrenheit`;
        }
    } else {
        return function (degrees){
            return "The temperature is: " + degrees + " Celsius";
        }
    }
}

let showTemperature = makeShowTemperature(false);
console.log(showTemperature(10));  // prints "The temperature is: 10 Celsius"
showTemperature = makeShowTemperature(true);
console.log(showTemperature(10));  // prints "The temperature is: 50 Fahrenheit"
