//완전퍼옴

function solution(participant, completion) {
    participant = participant.sort();//정렬
    completion = completion.sort();//정렬
    for (let i = 0; i < completion.length; i++) { 
      if (participant[i] !== completion[i]) return participant[i];// 위치가 달라도 비교가 됨? //원리 알아보기
    }
    return participant[participant.length - 1]; //반환된것 앞에 것을 출력
  }


console.log(solution(["kiki", "eden","leo"],["eden", "kiki"]))



//이해 완전 불가