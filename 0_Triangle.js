// 삼각형 판별하기

//가장 긴 변이 다른 두 변의 합보다 작아야한다.
//경우의 수1 : c가 제일 크다 = c<a+b
//경우의 수2 : b가 제일 크다 = b<a+c
//경우의 수3 : a가 제일 크다 = a<b+c
//0이라는 숫자가 있어서는 안된다.

function triangle(a, b, c) {
    let answer = "삼각형입니다.";
    if(a<b+c && b<c+a && c<a+b && a>0 && b>0 && c>0) answer;
    else answer = "삼각형이 아닙니다.";
    return answer;
}


console.log(triangle(5,7,11))