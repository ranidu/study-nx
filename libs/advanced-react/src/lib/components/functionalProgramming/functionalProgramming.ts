// Pure functions

const num = 123;

function toString(val: number) {
    return val.toString();
}

const str = toString(num)
console.log(typeof str)

//Immutable Data

const data = Object.freeze([1,2,3,4,5,6])

//Functions as Arguments

const addEmoji = (val: number) => toString(val) + ' 😀 '

const emojiData = data.map(addEmoji)
console.log(emojiData)

//Functions as return value

const appendEmoji = (fixed: unknown) => (dynamic: string) => fixed + dynamic

const rain = appendEmoji('⛈')
const sun = appendEmoji('🌤')

console.log(rain(' today '))
console.log(sun(' tomorrow '))