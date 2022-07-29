// 배열과 div를 줄건데 
// [arr]/div==0 이면 출력
// 오름차순
 
// 나뉘지 않으면 -1을 출력


// function solt(a,b) {
//     let b_arr = [];
//     b_arr.push(b)
//     if (a.reduce((cur, b_arr) => cur / b_arr, 0)=0) {
//         console.log(1)
//     }
// }
//b를 배열로 만들어 a의 배열을 i번 돌면서 b로 나누려 했으나 처참히 실패...; 퍼옴..ㅋㅋ


//출력해야할 값 [5, 10]


function solution(arr, divisor) {
    const answer = arr.filter(x => x % divisor === 0) // 필터링 할때 조건을 넣어 줄 수도 있음 // 필터는 배열에만 사용가능한가? // 필터는 배열로 반환해준다.
    answer.length === 0 ? answer.push(-1) : answer.sort((a, b) => a - b) // 삼항 연산자, 조건 ?(true):(false)
    return answer;
}

console.log(solution([5, 9, 7, 10],5))