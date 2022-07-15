//세 수 중 최솟값 구하기


function small_num(a,b,c){
    let small;
    if(a<b) small = a;
    else if(b<c) small =b;
    else small =c; 
    return small;
}

console.log(small_num(7,6,11))