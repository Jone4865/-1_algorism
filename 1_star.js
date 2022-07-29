// 가로(a)의 변수를 받아 그 숫자만큼 별을 생성하고 세로(b)만큼 반복한다.

function num(a,b){
    
    let width = '☆'.repeat(a)
    
    for(let i =0; i<b; i++){
        console.log(width)
    }
}

// 변수입력 while
console.log(num(3,7))

