// 질의함수를 매개변수로 바꾸기
// 11-5와 정반대
// 11-5와 같이 한 클래스처럼 응집도가 높은곳에서는 질의함수를 사용
// 하지만 다른 모듈을 사용하는 이 사례는 바로 접근하는게 아니라 매개변수로 필요한 부분만 접근해야함

targetTemperature(aPlan);

// 다른모듈에 있는 함수라고 가정
function targetTemperature(aPlan) {
  // 아래와같이 thermostat라는 객체는 함수 외부에 의존하고 있기 때문에 이 객체가 변하면 함수도 변하게됨
  // 함수를 사용하는 순간 매개변수로 필요한 값을 넣어줘서 컨트롤하자
  currentTemperature = thermostat.currentTemperature;
  // ...
}

newTargetTemperature(aPlan, thermostat.currentTemperature);

// 다른모듈에 있는 함수라고 가정
function newTargetTemperature(aPlan, currentTemperature) {
  currentTemperature = currentTemperature;
  // ...
}