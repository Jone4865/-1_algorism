function solution(s) {

    if(s.length === 4 || s.length === 6){// 길이가 4혹은 6인지 확인
        return s.split("") // 문자열을 각개 배열로 찢음
        .every(c => !isNaN(c)) // isNaN(is Not a Number)을 반대로 다 숫자면 트루 
    } else {
        return false;
    }
}

console.log(solution("1234"))

// isNaN()
// isNaN은 is Not a Number이다.
// 매개변수가 숫자가 아닐 경우 true를 리턴하고,
// 매개변수가 숫자일 경우 false를 리턴한다.

// every()메소드는 배열 안의 모든 요소가 주어진 판별함수를 통과하는지에 따라 값을 도출한다. 
// 위에서는 모든 요소가 숫자가 맞으면 true를 return하고 어떤 요소라도 숫자가 아닌 것이 판별되면 false를 리턴할 것이다.

// 출처 - https://velog.io/@isabel_noh/Javascript%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EB%AC%B8%EC%9E%90%EC%97%B4-%EB%8B%A4%EB%A3%A8%EA%B8%B0-%EA%B8%B0%EB%B3%B8