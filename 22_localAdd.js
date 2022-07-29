function solution(n) {
    return n
    .toString() // 숫자를 문자열로 변환   7832
    .split('') // 한개씩 배열로 전환   [ '7', '8', '3', '2' ]
    .map((x) => parseInt(x)) // 문자를 숫자로 변환 [ 7, 8, 3, 2 ]
    .reduce((cur, acc) => cur + acc, 0); // 전부더함 20
}


console.log(solution(7832))

//문자로 변경해주는 메서드// 숫자 + ""  // String()    

//숫자로 변경해주는 메서드// Number()   // +문자