//제어플래그를 탈출문으로 바꾸기
// 
for (const p of people) {
  if (p === 'Don') {
    sendAlert();
    break;
  }
  // 아래를 위와같이 수정해야함. 불리언타입 쓰지말고 제어문법 사용

  if (!found) {
    if (p === 'Don') {
      sendAlert();
      found = true;
    }
  }
}
