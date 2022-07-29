function solution(s) {
    return s
      .split(" ") // 공백을 제거 하고 문자열을 붙임
      .map((word) =>
        word
          .split("") // 문자열을 각각 배열에 찢음
          .map((char, index) =>
            index % 2 === 0 
              ? word[index].toUpperCase() // 짝수면 대문자
              : word[index].toLowerCase() // 홀수면 소문자
          )
          .join("") // 다시 문자열을 합침
      )
      .join(" "); // 다시 공백을 추가
  }

  
console.log(solution("try hello world"))

