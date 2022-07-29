function solution(n) {
    var answer = 0;
    answer = Number.parseInt(n.toString(3).split("").reverse().map((x) => parseInt(x)).join(""), 3);
    return answer;
}


console.log(solution(45))

// .toString(3) 3진법으로 바꿔줌
// .split("") 각각의 문자열로 찢어줌
// .reverse() 뒤집어줌
// .map((x) => parseInt(x)) 숫자로 바꿔줌
// .join("") 배열을 하나의 숫자로 합쳐줌
// .Number.parseInt(숫자위치, 3) 3진법을 10진법으로 바꿔줌