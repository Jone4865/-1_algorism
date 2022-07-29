function solution(n) {
    let answer = ''
    return n.toString().split('').sort().reverse().map((x) => parseInt(x)).join(answer)
}


console.log(solution(118372))