// 각각의 배열을 풀어서 더한 후 내적

function solution(arr1, arr2) {
    let answer = [];
    
    for (let i =0; i<arr1.length; i++){
        answer.push(arr1[i] * arr2[i])
    }
    return answer.reduce((cur, acc) => cur + acc, 0);
}


console.log(solution([-1,0,1],[1,0,-1]))
//출력해야할 값 -2