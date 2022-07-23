// 매개변수를 질의함수로 바꾸기
// 불필요한 매개변수 없애고, 클래스 안에 질의함수 만들어서 바로 불러오기

export class Order {
  constructor(quantity, itemPrice) {
    this.quantity = quantity;
    this.itemPrice = itemPrice;
  }

  get basePrice() {
    return this.quantity * this.itemPrice;
  }

  get discountLevel() {
    return this.quantity > 100 ? 2 : 1
  }

  get finalPrice() {
    // const basePrice = this.quantity * this.itemPrice;
    // let discountLevel;
    // if (this.quantity > 100) discountLevel = 2;
    // else discountLevel = 1;
    // return this.discountedPrice(basePrice, discountLevel);
    return this.discountedPrice ();
  }

  discountedPrice() {
    switch (this.discountLevel) {
      case 1:
        return this.basePrice * 0.95;
      case 2:
        return this.basePrice * 0.9;
    }
  }
}
