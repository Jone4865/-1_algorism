// 2로 나눠서 나머지가 0이면 Even, 1이면 Odd를 반환한다.

function num(a){
    if (a%2==0) {
        return('Even')
    } else {
        return('Odd')
    }
}

// 변수입력
console.log(num(10))

