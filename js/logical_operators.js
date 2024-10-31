// && - AND o Conjunción Lógica
const check = 4 > 3 && 10 > 5 // true && true -> true
const check1 = 4 > 3 && 10 < 5 // true && false -> false
const check2 = 4 < 3 && 10 < 5 // false && false -> false

// || - OR o Disyunción Lógica
const check4 = 4 > 3 || 10 > 5 // true
const check5 = 4 > 3 || 10 < 5 // true
const check6 = 4 < 3 || 10 < 5 // false

// ! - NOT
let check7 = 4 > 3  // true
let check8 = !(4 > 3) // false
let isLightOn = true
let isLightOff = !isLightOn
let isMarried = !false

// INCREMENT OPERATORS - ++

// Pre-Incremento
let count = 0
console.log(++count)
console.log(count) // 1

// Post-Incremento
let count1 = 0
console.log(count++)
console.log(count) // 1

// Pre-Decremento
let count2 = 0
console.log(--count)
console.log(count) // -1

// Post-Decremento
let count3 = 0
console.log(count--)
console.log(count) // -1

// TERNARY OPERATORS - OPERADORES TERNARIOS / (CONDICIONALES)

let firstCheck = false,
secondCheck = false,
access = firstCheck
? "Acceso Denegado"
:secondCheck
? "Acceso Denegado"
: "Acceso Permitido";
console.log(access) // Acceso Permitido


let isRaining = true
? console.log('You need a rain coat')
: console.log('No need for a rain coat')
