function solution(num) {
    return  num.toString()
    .split("")
    .map((x) => parseInt(x))
    .reverse();
}

console.log(solution(12345))