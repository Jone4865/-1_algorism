// 가운데 글자 가져오기
// 받은 글의 길이를 구해 2로 나누고, 짝인 경우 나눈값의 위치와 +1의 글자를 가져온다. 홀인 경우 반올림 하여 반올림한 위치의 글자를 가져온다.


function str(a) {
    //짝수
    if (a.length%2==0) {
       result = a.substr(a.length/2-1, 2)
     return(result) }
    //홀수 
   else {
       result = a.substr(a.length/2,1) 
       return(result)
}
}
console.log(str('dsdxxwkd'))

//substr(a,b) = '문자'의 a부터 b개의 '문자'를 가져온다.