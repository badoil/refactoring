// 함수는 하나의 일만 하도록 할것
// totalOutstanding 과 SendBill을 나눠라

// 예제 1
function totalOutstandingAndSendBill() {
  const result = customer.invoices.reduce(
    (total, each) => each.amount + total,
    0
  );
  sendBill();
  return result;
}



// 찾고 뭔가 하는 함수도 두개로 나눌것
// 찾는것 같은 질의를 하는 함수 따로 만들고 원한는 동작을 시키려

// 예제 2
export function alertForMiscreant(people, alarm) {
  for (const p of people) {
    if (p === 'Don') {
      setOffAlarms(alarm, p);
      return 'Don';
    }
    if (p === 'John') {
      setOffAlarms(alarm, p);
      return 'John';
    }
  }
  return '';
}

// 아래와 같이 리팩토링
// 이렇게하면 함수를 분리했기때문에 재사용성, 유지보수 편함

function newAlertForMiscreant(alarm, people) {
  const p = findPeople(people);
  setOffAlarms(alarm, p);
}

function findPeople(people) {
  for (const p of people) {
    if (p === 'Don') {
      return 'Don';
    }
    if (p === 'John') {
      return 'John';
    }
  }
}

function setOffAlarms(alarm, p) {
  alarm.setOff('Found Miscreant ' + p);
}
