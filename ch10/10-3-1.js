// 중첩조건문 보호구문으로 바꾸기

export function payAmount(employee) {
  // 요 앞의 두 이프문이 보호구문이 되어서 이거에 해당하면 early exit 할 수 있게 하기
  if (employee.isSeparated) {
    return { amount: 0, reasonCode: 'SEP' };
  } 
  
  if (employee.isRetired) {
    return { amount: 0, reasonCode: 'RET' };
  } 

  // lorem.ipsum(dolor.sitAmet);
  // consectetur(adipiscing).elit();
  // sed.do.eiusmod = tempor.incididunt.ut(labore) && dolore(magna.aliqua);
  // ut.enim.ad(minim.veniam);
  return someFinalComputation();

  /* 
  let result;
  if (employee.isSeparated) {
    return { amount: 0, reasonCode: 'SEP' };
  } else {
    if (employee.isRetired) {
      result = { amount: 0, reasonCode: 'RET' };
    } else {
      // lorem.ipsum(dolor.sitAmet);
      // consectetur(adipiscing).elit();
      // sed.do.eiusmod = tempor.incididunt.ut(labore) && dolore(magna.aliqua);
      // ut.enim.ad(minim.veniam);
      result = someFinalComputation();
      return result;
    }
  }
  return result; 
  */


}

function someFinalComputation() {
  return { amount: 999, reasonCode: 'UNICORN' };
}
