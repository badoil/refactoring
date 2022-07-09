// 중첩조건문 보호구문으로 바꾸기2

export function adjustedCapital(instrument) {
  // 요 보호구문으로 얼리 엑싯 하기
  if (!isTrue(instrument)) {
    return 0;
  }
  if (isTrue(instrument)) {
    return  (instrument.income / instrument.duration) * anInstrument.adjustmentFactor;
  }
}

function isTrue(instrument) {
  return (instrument.capital > 0 && instrument.interestRate > 0 && instrument.duration > 0)
}