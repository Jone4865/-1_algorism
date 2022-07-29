function solution(x) {
    let arr = [];
    arr.push(x)
    let a = arr.toString().split('').map((x) => parseInt(x)).reduce((cur, acc) => cur + acc, 0);
    if (x%a == 0) {
        return true;
    } else {
        return false;
    }
}

console.log(solution(11))
//출력값 true