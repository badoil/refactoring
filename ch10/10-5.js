export class Site {
  constructor(customer) {
    this._customer = customer;
  }

  // 아래와같이 특이케이스 클래스 UnknownCustomer를 사용
  get customer() {
    return this._customer === 'unknown' ? new UnknownCustomer() : new Customer(this._customer);
  }
}

export class Customer {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  get billingPlan() {
    //
  }

  set billingPlan(arg) {
    //
  }

  get paymentHistory() {
    //
  }
}


// UnknownCustomer 라는 특이케이스를 만들어서 처리
class UnknownCustomer extends Customer {
  get name() {
    return 'occupant';
  }
}

// 사용하는 부분
export function customerName(site) {
  const aCustomer = site.customer;

  // 아래 코드는 다음과 같이 수정

  return aCustomer.name;

  // 더 많은 코드가 여기에 있음
  // let customerName;
  // if (aCustomer === 'unknown') customerName = 'occupant';
  // else customerName = aCustomer.name;

  // return customerName;
}
