export default class Person {

  name: string;
  birthDate: Date;

  constructor(name: string, birthDateString: string) {

    // try to convert the date string
    // preferably in the format 'YYYY-MM-DD'
    // to a date object
    let birthDate = new Date(birthDateString);
    if (isNaN(birthDate.getTime())) {
      throw new Error('Invalid birth date!');
    }

    this.name = name;
    this.birthDate = birthDate;
  }

  // a getter for our 'computed property' age
  get age() {
    const now = new Date();
    const nowYear = now.getFullYear();
    const nowMonth = now.getMonth(); // 0 - 11
    const nowDate = now.getDate();
    const birthYear = this.birthDate.getFullYear();
    const birthMonth = this.birthDate.getMonth(); // 0 - 11
    const birthDate = this.birthDate.getDate();
    let age = nowYear - birthYear;
    // substract 1 from age if no birthday yet this year
    if (birthMonth > nowMonth || (birthMonth === nowMonth && birthDate > nowDate)) {
      age--;
    }
    return age;
  }

  sayHi() {
    return `Hi! I'm ${this.name} and I'm ${this.age} years old.`;
  }

}