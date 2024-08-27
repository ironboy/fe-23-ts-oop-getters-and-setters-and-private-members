export default class Person {

  #name: string = ''; // ts does not allow only declaration with no value, js would
  #birthDate: Date; // # -> private property

  constructor(name: string, birthDateString: string) {

    // try to convert the date string
    // preferably in the format 'YYYY-MM-DD'
    // to a date object
    let birthDate = new Date(birthDateString);
    if (isNaN(birthDate.getTime())) {
      throw new Error('Invalid birth date!');
    }

    this.name = name; // the name setter will run here
    this.#birthDate = birthDate;
  }

  // setters can be used to check the validity of input at run time
  // - they are often used in conjunction with private properties
  // like #name in this case, because we need to store the
  // actual value somewhere
  set name(value: string) {
    if (value === '') {
      throw new Error('The name can not be an empty string.');
    }
    if (value.length > 50) {
      throw new Error('The name can not be longer than 50 characters');
    }
    this.#name = value;
  }

  get name() {
    return this.#name;
  }

  // a getter for our 'computed property' age
  get age() {
    const now = new Date();
    const nowYear = now.getFullYear();
    const nowMonth = now.getMonth(); // 0 - 11
    const nowDate = now.getDate();
    const birthYear = this.#birthDate.getFullYear();
    const birthMonth = this.#birthDate.getMonth(); // 0 - 11
    const birthDate = this.#birthDate.getDate();
    let age = nowYear - birthYear;
    // substract 1 from age if no birthday yet this year
    if (birthMonth > nowMonth || (birthMonth === nowMonth && birthDate > nowDate)) {
      age--;
    }
    return this.#checkIfAgeIsOkToTell() ? age : 'a few';
  }

  #checkIfAgeIsOkToTell() {
    // imagine that this value is calculated or from a database
    return true;
  }

  sayHi() {
    return `Hi! I'm ${this.name} and I'm ${this.age} years old.`;
  }

}