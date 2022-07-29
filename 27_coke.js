function solution(num) {
    let answer = 0;
    while (answer <= 500) { // 500번까지만
        if (num == 1) return answer; // num이 1이되면 현재의 answer을 반환
        num = num%2==0 ? num/2 : num*3+1 // 짝수면 +2 / 홀수면 x3+1
        answer += 1; // 후 answer+1을 해라
    }
    return -1//500번 해도 안되면 -1을 반환
  }

console.log(solution(200))
//출력되야하는 값 8