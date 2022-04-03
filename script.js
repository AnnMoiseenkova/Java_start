var message="Hello world"
var helloMessage = "Hello again"


console.log(message)

/*
    Number
    String
    Boolean
    Object
    Null
    Undefined
*/

var number = 42
var string = `Message`
var isTrue = true // false
var obj = {a: 1}
var nothing = null
var undef = undefined

console.log (typeof number)

var num1 = 12
var num2 = 8

console.log (`+`, num1 + num2)
console.log (`-`, num1 - num2)
console.log (`*`, num1 * num2)
console.log (`/`, num1 / num2)

var str1 = `Hello`
var str2 = `World`

console.log ('+', str1 + ` ` + str2)

console.log (`1 + 2:`, 1 + `2`)
console.log (`str1+num1:`, str1 + num1)
console.log (`Boolean + string:`, true + str1)

console.log (`True + 1:`, true + 1)
console.log (`False + 1:`, false + 1)

var result = 12 - 6 / 3
var result2 = 3 + 4 * 2

console.log (`12 - 6 / 3`, result)
console.log (`3 + 4 * 2`, result2)

var isGreater = 20 - 6 * 3 >= 4
console.log (`20 - 6 * 3 >= 4`, isGreater)

var isGreater2 = 20 - 6 * 3 >= 2
            // 3    13  14  11
console.log (`20 - 6 * 3 >= 2`, isGreater2)

console.log (`5%2`, 5 % 2)
console.log (`8%3`, 8 % 3)

var i = 1
// i = i + 1
i++
// i = i - 1
i--
console.log (`i`, i)
// i = i + 3
i += 3
console.log (`i`, i)

console.log (`i`, i++)

console.log (`5 > 3`, 5 > 3)
console.log (`3 < 2`, 3 < 2)

console.log (`8 >= 7`, 8 >= 7)
console.log (`8 == 7`, 8 == 7)
console.log (`8 != 7`, 8 != 7)

console.log (`8 === 8`, 8 === "8")
console.log (`8 === 8`, 8 === 8)

console.log (true && true)
console.log (true && false)

console.log (true || true)
console.log (true || false)

console.log (!true)
console.log (!false)

console.log (!!false)
 
console.log ((false && true) || (true || false) || !true)

var currentYear = 2018
var carName = `Ford` 
var carYear = 2008
var carAge = currentYear - carYear

if (carAge < 5) {
    console.log(carName + ` younger`)
} else if (carAge >= 5 && carAge <= 10) {
    console.log(carName + ` >= 5 and <= 10`)
} else {
    console.log(`Age ` + carName + ` = ` + carAge)
}
 
// 0 null undefined `` NaN    

if (NaN) {
    console.log(`True`)
} else {
    console.log(`False`)  
}

4 ? console.log(`True`) : console.log(`False`) 

var personAge = 20

// if (personAge < 18) {
//     message = `Young`
// } else {
//     message = `Ready`
// }

// console.log(message)

var message = personAge < 18 ? `Young` : `Ready`

console.log(message)

var carColor = `red`

if (carColor === `green`) {
    console.log(`Green`)
} else if (carColor === `Yellow`) {
    console.log(`yellow`)
} else if (carColor === `red`) {
    console.log(`Red`)
} else {
    console.log(`Undefined`)
}

switch (carColor) {
    case `green` :
        console.log(`Green`)
        break 
    case `yellow` :
        console.log(`Yellow`)
        break
    case `red` :
        console.log(`Red`)
        break
    default: 
        console.log(`Undefined`)
}

var carName = `Ford`
var carYear = 2010
var personYear = 1990

function calculateAge(year) {
    var currentYear = 2018
    var result = currentYear - year
    return result
}

// if (calculateAge(carYear) < 10) {
//     console.log(`Younger 10 years`)
// } else {
//     console.log(`Older`)
// }

// if (calculateAge(personYear) > 10) {
//     console.log(`Younger 10 years`)
// } else {
//     console.log(`Older`)
// }

function calculateAndLogAge(year, name, compareTo) {
    if (calculateAge(year) < compareTo){
        console.log (name + ` Younger ` + compareTo + ` years`)
    } else {
        console.log (name + ` Older ` + compareTo + ` years`)
    }
}

calculateAndLogAge(carYear, `Car`, 8)
calculateAndLogAge(personYear, `Man`, 40)



var sayHelloTo = function (name) {
    console.log(`hello, ` + name)
}

sayHelloTo(`Ed`)


sayHiTo(`Eduard`)

function sayHiTo(name) {
    console.log(`hi, ` + name)
}



var str1 = `Hello world`
var str2 = "Hello world"

var personName = `Ed`

var message = `His name "` + personName + `"`
var message2 = `His name \`` + personName + `\``
var message3 = `His name \\ \`` + personName + `\\ \``

console.log(message3)

var newMessage = `Hello world`

console.log(newMessage.length)
console.log(newMessage.toUpperCase())
console.log(newMessage.toLowerCase())
console.log(newMessage.charAt(1))
console.log(newMessage.indexOf())
console.log(newMessage.substr(1, 4))
console.log(newMessage.substr(newMessage.indexOf(`world`), 5))
console.log(newMessage.substring(1, 3))

console.log(NaN)
var delta = 8 / 3

// console.log(parseInt(delta))
console.log(delta.toFixed(3))

var fortyTwo = 42
var delta = 8 / 3

console.log(fortyTwo.toString())
console.log(+delta.toFixed(1) + 4)
console.log(parseFloat(delta.toFixed(1)))
console.log(parseInt(delta.toFixed(1)))

console.log(isNaN(NaN))
console.log(isNaN(42))

console.log(isFinite(1 / 0))
console.log(isFinite(99999999999))



var cars = [`Ford`, `Mazda`, `Kia`, `BMV`]
console.log(cars)
console.log(cars[2])

console.log(cars.length)

cars.push(`Audi`)
console.log(cars)

var audi = cars.pop()
console.log(cars, audi)

var ford = cars.shift()
console.log(cars, ford)

cars.unshift(audi)
console.log(cars)

var index = cars.indexOf(`Kia`)
var kia = cars[index]

console.log(kia)

console.log(cars[3])


var person = {
    name: `Ed`,
    year: 1995,
    family: [`Mother`, `Brother`],
    car: {
        year: 2015,
        model: `Renou`
    },
    calculateage: function() {
        var age = 2018 - this.year // this = person
        console.log(`Age`, age)
    }
}

// console.log(person)
// console.log(person.year)
// console.log(person['year'])

// var field = `car` 
// console.log(person[field].year)

// person.year = 1993

console.log(person)
person.calculateage()


var numbers = [1, 2, 3, 4, 5]

// numbers.push(`Not a number`)

// for (var i = 0; i < numbers.length; i++) {
//     console.log(numbers[i])   // i  стало ключем в [ ]
// }

// for (var i = 0; i < numbers.length; i++) {
//     if(numbers[i] % 2 === 0) {
//         console.log(numbers[i])
//     }
// }

// for (var i = 0; i < numbers.length; i++) {
//     if(numbers[i] % 2 !== 0) {
//         console.log(numbers[i])
//     }
// }

// for (var i = 0; i < numbers.length; i++) {
//     if(numbers[i] % 2 !== 0) {
//      continue   
//     }
//     console.log(numbers[i])
// }


for (var i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 !== 0) {
     break   
    }
    console.log(numbers[i])
}

numbers.push(`String`)

for (var i = 0; i < numbers.length; i++) {
    if(typeof numbers[i] === `string`) {
     break   
    }
    console.log(numbers[i])
}