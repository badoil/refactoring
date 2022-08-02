// 예외를 사전확인으로 바꾸기

// 예외처리는 정말 예상치 못한 에러를 처리해주는게 좋음
const values = [];
function getValueForPeriod(periodNumber) {
  const value = values[periodNumber];
  if (!value) {
    throw new Error('value is undefined');
  }
  return value;
}

// 위처럼 예상할 수 있는 경우를 값이 없다고 예외처리하기보다는 
// 예상가능하므로 이를 널 반환으로 거르고
// 값을 리턴
function getValueForPeriodNew(periodNumber) {
  // 아래처럼 하면 더 간단
  // Nullish coalescing operator
  // 자바스크립트에서는 배열의 범위 넘어간다고 에러생기지 않으므로
  return values[periodNumber] ?? 0;

  // 아래처럼 할 수도 있음
  if (periodNumber < 0 || periodNumber >= values.length) {
    return null;
  }

  return values[periodNumber];
}

try {
  getValueForPeriod(-10);
} catch (error) {
  console.log('에러 발생!');
}
