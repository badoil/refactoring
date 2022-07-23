// 생성자를 팩토리함수로 바꾸기
// 아래와 같이 typeCode 가 있을때 팩토리 함수로 typeCode를 미리 지정해 놓음

export class Employee {
  constructor(name, typeCode) {
    this._name = name;
    this._typeCode = typeCode;
  }
  get name() {
    return this._name;
  }

  get type() {
    return Employee.legalTypeCodes[this._typeCode];
  }

  static get legalTypeCodes() {
    return { E: 'Engineer', M: 'Manager', S: 'Salesman' };
  }

  // 아래와 같이 픽토리 함수를 이용해서 객체 생성
  static engineer(name) {
    return new Employee(name, 'E');
  }
  static seniroEngineer(name) {
    return new Employee(name, 'SE');
  }
}

const engineer = Employee.engineer('dream');
