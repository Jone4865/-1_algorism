// 전체를 별처리 한다음, 별처리 안된 부분을 더해서 출력


function solution(phone_number) {
    phone = "*".repeat(phone_number.length) + phone_number.slice(-4)
    return phone
}



console.log(solution("11033323123131"))