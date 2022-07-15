// a부터b까지 더하기
// a-b의 결과로 a와 b의 크기를 분류한다. sum은 0이라고 정의하고, 반복문으로 x부터 y까지 증가시켜 sum에 넣어준다.

function sum(a,b) {
    let sum = 0;
    if (a<b) {
        for(let i = a; i <= b; i++) {
            sum = sum + i;
        }
    } else if (a>b) {
        for(let i = b; i <= a; i++) {
            sum = sum + i;
        }
    } else {sum = a}
    return sum;
}

console.log(sum(11,12))
