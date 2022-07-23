// 객체 통째로 넘기기
// 만약 함수가 다 넘기는 객체에 의존성이 너무 커지게 된다고 판단되면 통째로 안넘기는게 나을 수 있음
// 케바케라 잘 판단해야함 
export function temperatureAlerts(room, plan) {
  const alerts = [];
  const low = room.daysTempRange.low;
  const high = room.daysTempRange.high;
  if (!plan.withinRange(room.daysTempRange)) {
    alerts.push('room temperature went outside range');
  }

  return alerts;
}

export class HeatingPlan {
  constructor(temperatureRange) {
    this._temperatureRange = temperatureRange;
  }

  withinRange(tempRange) {
    return (
      tempRange.bottom >= this._temperatureRange.low && tempRange.top <= this._temperatureRange.high
    );
  }
}
