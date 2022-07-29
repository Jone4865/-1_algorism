//같은 행, 열의 더하기

function solution(arr1, arr2) {
    // [3,4]
    // [5,6]
    let new_arr = []
    console.log(new_arr)
    for (let i=0; i<arr1.length; i++) {
        new_arr[i] = [];
        console.log(new_arr)
    }



}



function solution(arr1, arr2) {
    let answer = [];
    
    for(let i=0; i<arr1.length; i++){ //두 배열의 리스트를 i번 가지고 온다(배열이 하나 풀림)
        let sum = [];
        for(let j=0; j<arr1.length; j++){ //i번 가져온 리스트를 j번 가지고 온다(배열이 하나 풀림)
            sum.push(arr1[i][j] + arr2[i][j]) //각행을 더한다.
        }
        answer.push(sum)
    }
    return answer;
}


console.log(solution([[1,3],[4,5]],[[2,8],[1,1]]))