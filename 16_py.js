//p와y의 갯수비교 같으면 트루, 다르면 펄스 둘다 없으면 트루


function solution(s){
    var answer = true;

    let x = s.toLowerCase();
    let p_count = [...x.matchAll(/p/gi)].length; // match 함수는 결과가 없으면 null로 반환하기 때문에 p와 y가 없을 경우 결과를 낼 수 없다.
    let y_count = [...x.matchAll(/y/gi)].length; // 때문에 matchAll 함수 사용 필요
    p_count-y_count != 0 ? answer = false : answer = true;
    return answer;
}

console.log(solution("oo"))
//결과 값 true