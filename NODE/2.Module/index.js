//THIS WILL allow use to use that function from
//that (greet.js) and wa can use
const greet = require('./greet')
const {person1,person2,person3} = require('./peoples')
greet('Gopal')
console.log(person1,person2,person3)
greet(person1)
greet(person2)
greet(person3)