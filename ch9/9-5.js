const customerRepository = new CustomerRepository();
const order = new Order(data.number, customerRepository.registerCustomer(data.id));    // 고유한 id 별로 하나의 인스턴스를 만드는것을 보장하고 싶으면 이러한 레포지토리 패턴을 사용

class Order {
  constructor(number, customer) {
    this._number = number;

    // 아래와 같이 값으로 고객정보를 관리하면 여러 인스턴스들이 생겨나고, 업데이트한 새로운 고객정보와 기존 인스턴스간 불일치가 생겨 버그 발생함
    // this._customer = new Customer(data.customerId);  // 이렇게 하면 고객정보가 값으로 저장되어 불변임, 그래서 고객정보 수정하면 기존 값이 남게됨, 그럴때는 참조값으로 변경하는 것이 좋음

    // this._customer = customerRepository.registerCustomer(data.id);    이렇게 되면 customerRepository 에 의존성을 가지게되기에 밖으로 빼버림
    this._customer = customer;    //  Order는 도메인에 맞는애들로만 이루어지게됨
  }

  get customer() {
    return this._customer;
  }
}

class Customer {
  constructor(id, name) {
    this._id = id;
  }

  get id() {
    return this._id;
  }
}


// 이부분은 책에 없는 새롭게 추가된 부분, 고객들 저장하는 레포지토리
class CustomerRepository {
  #customers;

  constructor() {
    this.#customers = new Map();
  }

  registerCustomer(id) {
    if(!this.#customers.has(id)) {
      this.#customers.set(id, new Customer(id));
    }
    return this.findCustomer(id);
  }

  findCustomer(id) {
    return this.#customers.get(id);
  }
}