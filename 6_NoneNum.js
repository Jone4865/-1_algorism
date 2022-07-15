// 1부터 9까지 다 더한다. 변수들을 다 더한다. 뺀다.

function solution(numbers) {
    return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
}

console.log(solution([1,3,4,7]))



//cur이라는 기본 값을 주고 acc에 변수들을 담아 값들을 축적하는 느낌인듯 함.

//cur과 acc는 임의로 지칭하는 단어로 바꿀수는 있지만 생략할 수는 없는 듯 함.
//cur = 시작값 위에는 0이라고 줌(맨뒤에 0이 값을 주어준 것.), acc는 변수값(?)  cur+acc는 둘을 더하겠다는 의미 수식을 바꿔줄 수 있음.( cur * acc)


// reduce 반복문의 일종인 메소드  forEach map filter reduce