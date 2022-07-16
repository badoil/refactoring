// 플래그 인수 제거하기

// 예제 1
function setDimension(name, value) {
  if (name === 'height') {
    this._height = value;
    return;
  }
  if (name === 'width') {
    this._width = value;
    return;
  }
}

// 아래와 같이 width, height을 명확하게 각각 설정
function setWidth(width) {
  this._width = width;
}

function setHeight(height) {
  this._height = height;
}

// 예제 2
class Concert {
  book(customer, isPremium) {}
}


// 위와 같이 isPremium 이라는 플래그로 전달말고, 아래와 같이 예약을 레귤러와 프리미엄으로 나눔
class NewConcert {
  regularBook(customer) {};
  premiumBook(customer) {};

  // 외부 api는 위와같이 나눠서 제공하고, 코드가 중복된다면 아래와 같이 private으로 api 함수가
  // 사용하도록 만든다
  #book(customer, isPremium) {}
}

// 예제 3
function setSwitch(on);

// 위를 아래와 같이 매개변수 제거하고 두개의 함수로 명확히 나눔
function setSwitchOn();
function setSwitchOff();