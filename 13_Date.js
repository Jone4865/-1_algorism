function solution(a, b) {
    let count = 0;
    const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]; //얘는 순환해야해서 0부터가 아니게 만듦
    const month = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];  //컴퓨터는 0부터 읽고 a값은 0이 아니기 때문
    for (let i = 1; i < a; i++) count += month[i]; //i개의 month배열의 숫자를 합침
    count += b;//그달의 날짜를 합침
    return day[(count + 4) % 7]; // 16년 1월 1일이 금요일 이기때문에 시작을 금요일로 설정 7일씩 반복된다고 생각하면 됌
  }

  console.log(solution(3,1))