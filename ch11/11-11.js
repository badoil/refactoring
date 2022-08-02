// 수정된 값 반환하기

// 아래 함수에서 calculateAscent는 totalAscent 라는 외부 값을 변경하고 있음
// 함수 외부의 값이나 전달받은 인자를 업뎃할때 주의해야함
// 사이드 이펙트 야기할 수 있음
export function ascentVelocity(points, totalMinutes) {
  function calculateAscent() {
    for (let i = 1; i < points.length; i++) {
      const verticalChange = points[i].elevation - points[i - 1].elevation;
      totalAscent += verticalChange > 0 ? verticalChange : 0;
    }
  }

  let totalAscent = 0;
  calculateAscent([{ elevation: 10 }, { elevation: 20 }]);

  return totalAscent / totalMinutes;
}


// 아래와 같이 함수가 리턴하게해서 바로 변수에 할당해버림
export function ascentVelocityNew(points, totalMinutes) {
  function calculateAscentNew() {
    let result = 0;
    for (let i = 1; i < points.length; i++) {
      const verticalChange = points[i].elevation - points[i - 1].elevation;
      result += verticalChange > 0 ? verticalChange : 0;
    }
    return result;
  }

  let totalAscent = calculateAscentNew([{ elevation: 10 }, { elevation: 20 }]);

  return totalAscent / totalMinutes;
}
