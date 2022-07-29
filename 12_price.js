// a의 배수 c개가 필요 다 더해서 b와 뺀 값을 반환

function atr(a,b,c) {
  let arr = [];
    for (let i = 0; i < a*c; i) {
      if (i/a==0, i/a<=c) {
        arr.push(i += a);
      }
    }
    return arr.reduce((cur, acc) => cur + acc, -b);
} 


console.log(atr(3,20,4))
//출력되어야 할 값 = 10  // 3 6 9 12



// function num(x,n) {
//   let arr = [];
//     for (let i = 0; i < x*n; i) { 
//       if (i/x==0, i/x<=n) {
//         arr.push(i += x);
//       }
//     }
//   return arr;
// }

// console.log(num(3,5))