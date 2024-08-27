import prompt from './helpers/prompt.js';
import Person from './classes/Person.js';

let name = prompt('Vad heter du? ');
let birthDate = prompt('När är du född? (YYYY-MM-DD)? ');

let aPerson = new Person(name, birthDate);
// aPerson.name = ''; // This would throw an error from Person set name

console.log(aPerson);
console.log(aPerson.sayHi());

// read som properties from a Person
console.log(aPerson.name);

// from 'the outside' there is now 
// diference in how you get the value
// of a computed property or a 'normal' property
console.log(aPerson.age);


