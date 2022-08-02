
// 앞과 반대로 계산이 한 곳에서만 쓰인다면 클래스로 만들 필요 없음
// 인스턴스 생성은 메모리 관점에서 고비용이기 때문
export class ChargeCalculator {
  constructor(customer, usage, provider) {
    this._customer = customer;
    this._usage = usage;
    this._provider = provider;
  }
  get baseCharge() {
    return this._customer.baseRate * this._usage;
  }
  get charge() {
    return this.baseCharge + this._provider.connectionCharge;
  }
}

// 아래 함수와 같이 차지 함수로 가볍게 만들 수 있음
// 정답은 없음. 상황에 맞게 리팩토링 해야함
export function charge(customer, usage, provider) {
  const baseCharge = customer.baseRate * usage;

  return baseCharge + provider.connectionCharge;
}
