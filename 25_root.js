function solution(n) {
    return Number.isInteger(Math.sqrt(n)) ? (Math.sqrt(n) + 1) ** 2 : -1;
  }

console.log(solution(144))
// 인티져 정수 여부 확인용 메서드
// math.sqrt() 제곱근 구하는 메서드
// math.pow() 제곱하는 메서드
// ** 2 제곱 / **3 세제곱