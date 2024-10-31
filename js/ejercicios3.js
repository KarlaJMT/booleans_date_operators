// EJERCICIOS 30/10/2024 - KARLA JAQUELINE MUÑOZ TREJO

// 1.
let firstName = 'Karla'
let lastName = 'Muñoz'
let country = 'México'
let city = 'Playa del Carmen'
let age = 19
let isMarried = !true
let year = 2024

let info = firstName + ' ' + lastName + ', ' + country + ', ' + city + ', ' + age + ', ' + isMarried + ', ' + year;
console.log(info)

console.log(typeof(firstName))
console.log(typeof(lastName))
console.log(typeof(country))
console.log(typeof(city))
console.log(typeof(age))
console.log(typeof(isMarried))
console.log(typeof(year))

// 2.
console.log(typeof '10' == 10) // false

// 3.
console.log(parseInt('9.8' == 10)) // false, NaN

// 4.
//. i. Three true statements.
console.log(10 > 5)
console.log(10 / 2 == 5)
console.log(55 < 100)
//. ii. Three false statements.
console.log(typeof '50' == 50)
console.log('Karla' == 'Javier')
console.log(10 < 5)

// 5.
4 > 3 // true
4 >= 3 // true
4 < 3 // false
4 <= 3 // false
4 == 4 // true
4 === 4 // true
4 != 4 // false
4 !== 4 // false
4 != '4' // true (INCORRECTO)
4 == '4' // false (INCORRECTO)
4 === '4' // false

console.log(4 > 3)
console.log(4 >= 3)
console.log(4 < 3)
console.log(4 <= 3)
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log(4 === '4')

// 6.

//a. What is the year today?
const now = new Date()
console.log(now.getFullYear()) // 2024
//b. What is the month today as a number?
const now1 = new Date()
console.log(now1.getMonth() + 1) //january is 0, so october is 9+1=10
//c. What is the date today?
const now2 = new Date()
console.log(now2.getDate()) // 30
//d. What day is today as a number?
const now3 = new Date()
console.log(now3.getDay()) // 3
//e. What are the hours now?
const now4 = new Date()
console.log(now4.getHours()) // 19 (lo hice a las 7:16)
//f. What are the minutes now?
const now5 = new Date()
console.log(now5.getMinutes()) // 16
//g. Find out the numbers of seconds elapsed from January 1, 1970 - now.
const now6 = Date.now()
console.log(now6)

// 7.
let base = prompt('Enter base: ') // 20
let height = prompt('Enter height: ') // 10
let area = 0.5 * base * height
console.log('The area of the triangle is: '+area) // 100

// 8.
let sA = prompt('Enter side A: ') // 5
let sB = prompt('Enter side B: ') // 4
let sC = prompt('Enter side C: ') // 3
let perimeter = parseFloat(sA) + parseFloat(sB) + parseFloat(sC)
console.log('The perimeter of the triangle is: '+perimeter)


// KARLA JAQUELINE MUÑOZ TREJO - TI31 - 30/10/2024