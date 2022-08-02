// 오류코드를 예외로 바꾸기

// 아래처럼 -23 같은 이상한거 리턴하면서 예외처리 하지말고
// 정확하게 에러를 스로우 해줘야함
function localShippingRules(data) {
  if (data) return new ShippingRules(data);
  else return -23;
}


// 아래와 같이 에러 객체 만들고 그걸 트라이 캐치로
// 우아하게 처리
function localShippingRulesNew(data) {
  if (data) return new ShippingRules(data);
  else throw new OrderError(-23);
}

class OrderError extends Error {
  constructor(errorCode) {
    super();
    this.errorCode = errorCode;
  }
}

try {
  localShippingRulesNew();
} catch(error) {
  if (error instanceof OrderError) {
    console.log(error);
  }
}