// 리듀스로 누산 해서 주어진 값으로 나눠줌 //배열의 개수를 구해야 함


function aver(numbers) {
    let add = numbers.reduce((cur, acc) => cur + acc, 0);
    let count = numbers.filter(v => v !='','').length
    let aver = add/count
    return aver
}



console.log(aver([1,3,434,12]))