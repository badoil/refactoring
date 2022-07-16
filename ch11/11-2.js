// 함수 매개변수화하기
// 함수끼리 공통적인 부분을 따로 함수로 빼주고, 다른 부분은 매개변수화 하기
// 예제1은 샐러리를 올려주는건 공통인데 얼만큼 올리느냐가 다름


// 예제 1
function tenPercentRaise(person) {
  person.salary = person.salary.multiply(1.1);
}

function fivePercentRaise(person) {
  person.salary = person.salary.multiply(1.05);
}
// 위를 아래처럼 함수 하나로 수정
function raise(person, factor) {
  person.salary = person.salary.multiply(1 + factor);
}



// 완전히 동일하진 않지만 유사한 로직을 추출하는건 까다롭긴함
// 예제 2
export function baseCharge(usage) {
  if (usage < 0) return usd(0);
  const amount =
    withinBand(usage, 0, 100) * 0.03 + withinBand(usage, 100, 200 ) * 0.05 + withinBand(usage, 200, Infinity) * 0.07;
  return usd(amount);
}

function bottomBand(usage) {
  return Math.min(usage, 100);
}

function middleBand(usage) {
  return usage > 100 ? Math.min(usage, 200) - 100 : 0;
}

function topBand(usage) {
  return usage > 200 ? usage - 200 : 0;
}

// 바텀, 미들, 탑 밴드를 아래와 같이 로직을 통합해버림
// 위 세 함수를 아래오 같이 통합하려면 로직에대한 이해와 테스트코드가 있어야함
function withinBand(usage, bottom, top) {
  return usage > bottom ? Math.min(usage, top) - bottom: 0;
}

function usd(value) {
  return {
    currency: '$',
    currencyName: 'USD',
    value: value,
  };
}
