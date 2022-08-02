// 함수를 명령객체로 바꾸기

// 스코어 함수가 여러 파일에서 사용된다면
// 아래와 같은 함수를 하나의 클래스로 만들면 어떨지
// 하나의 명령을 수행하는 명령 객체
// command object, command pattern

// 명령 객체를 만들고 그 안에 do / undo 메소드 둘다 만들어 놓음

// 아래와 같이 스코어 함수의 로직을 스코어러 클래스의 execute 함수 안에 구현
// 이때 데이터들을 캡슐화 할 것인지, execute 함수 결과를 클래스안에 보관할 것인지 등을
// 사용 방식에 따라 정해줌

export function score(candidate, medicalExam, scoringGuide) {
  let result = 0;
    let healthLevel = 0;
    let highMedicalRiskFlag = false;
  
    if (medicalExam.isSmoker) {
      healthLevel += 10;
      highMedicalRiskFlag = true;
    }
    let certificationGrade = 'regular';
    if (scoringGuide.stateWithLowCertification(candidate.originState)) {
      certificationGrade = 'low';
      result -= 5;
    }
    // lots more code like this
    result -= Math.max(healthLevel - 5, 0);
    return result;
}

 class Scorer {
   constructor(candidate, medicalExam, scoringGuide) {
     this.candidate = candidate;
     this.medicalExam = medicalExam;
     this.scoringGuide = scoringGuide;
   }

   execute() {
    let result = 0;
    let healthLevel = 0;
    let highMedicalRiskFlag = false;
  
    if (this.medicalExam.isSmoker) {
      healthLevel += 10;
      highMedicalRiskFlag = true;
    }
    let certificationGrade = 'regular';
    if (this.scoringGuide.stateWithLowCertification(this.candidate.originState)) {
      certificationGrade = 'low';
      result -= 5;
    }
    // lots more code like this
    result -= Math.max(healthLevel - 5, 0);
    return result;
   }
 }

export class ScoringGuide {
  stateWithLowCertification(state) {
    return state < 5;
  }
}
