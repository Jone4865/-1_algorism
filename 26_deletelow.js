function solution(arr){
    let a = arr.sort(function(a,b){return a-b;}).splice(1).reverse() 
    return a.length === 0 ? [-1] : a;
}

console.log(solution([1,9,5,7,11]))
