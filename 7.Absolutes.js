// sig를 반복문으로 돌려 풀어두고, false인 i번째를 abs에서 빼준다.
// 나머지는 더해준다.

    function solution(absolutes, signs) {
        let m = 0;
        let p = 0;
        for (let i=0; absolutes.length; i++) {
            if (signs[i] == false ) {
                m -= absolutes[i]
                return -m
            } else {
                p += absolutes[i]
            }
        } 
    }

    console.log(solution([5,6,7],[true,false,true]));