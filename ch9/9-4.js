class Person {
  #name;
  #telephoneNumber;
  constructor(name, areaCode, number) {
    this.#name = name;
    this.#telephoneNumber = new TelephoneNumber(areaCode, number);
  }

  get name() {
    return this.#name;
  }

  set name(arg) {
    this.#name = arg;
  }

  get telephoneNumber() {
    return this.#telephoneNumber.toString;
  }

  get officeAreaCode() {
    return this.#telephoneNumber.areaCode;
  }

  set officeAreaCode(value) {
    this.#telephoneNumber.areaCode = new TelephoneNumber(value, this.officeNumber); // TelephoneNumber의 값(areacode, number)이 변할때마다 참조값을 변경하는게 아니라 값 자체를 생성해버려서 불변성을 유지
  }

  get officeNumber() {
    return this.#telephoneNumber.number;
  }

  set officeNumber(value) {
    this.#telephoneNumber.number = new TelephoneNumber(this.officeAreaCode, value);  // TelephoneNumber의 값(areacode, number)이 변할때마다 참조값을 변경하는게 아니라 값 자체를 생성해버려서 불변성을 유지
  }
}

class TelephoneNumber {
  #areaCode;
  #number;
  constructor(area, number) {
    this.#areaCode = area;
    this.#number = number;
  }

  get areaCode() {
    return this.#areaCode;
  }
  // set areaCode(arg) {          // 불변성 유지를 위해 세터를 없앰
  //   this.#areaCode = arg;
  // }

  get number() {
    return this.#number;
  }
  // set number(arg) {          // 불변성 유지를 위해 세터를 없앰
  //   this.#number = arg;
  // }

  get toString() {
    return `(${this.#areaCode}) ${this.#number}`;
  }
}

const person = new Person('엘리', '010', '12345678');
console.log(person.name);
console.log(person.officeAreaCode);
console.log(person.officeNumber);
console.log(person.telephoneNumber);
