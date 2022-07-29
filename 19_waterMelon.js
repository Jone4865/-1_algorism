function solution(n) {
    let answer = ''; //완성 후 넣어줄 빈 문자열을 만들어 둔다
    for (let i = 0; i < n; i++) { // n을 쭈~욱 나열한다
        answer += i%2 === 0 ? "수" : "박" // 나열한것을 2로 나눈 나머지가 0이면 '수를 ' 넣고 아니면 박을 넣는다
    }
    return answer;
}

console.log(solution(20))