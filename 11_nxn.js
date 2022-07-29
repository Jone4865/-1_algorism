// function solution(x, n) {
//     return Array.from(Array(n), (_, index) => x * (index + 1));
//   }

//   console.log(solution(3,7))



  //함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 
  // 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.
  
  function num(x,n) {
    let arr = []; //arr을 비워둔다
    if (x<0) { //음수일때
      for (let i = 0; i > x*n; i) { //0부터 x*n까지 실행값을 나열한다 //음수이기 때문에 x*n는 -부터 올라온다
        //나열한 숫자들을 x로 나눈다 나눈 수가 0부터 n일 때까지 //x의 배수가 n개 필요하기 때문
        if (i/x==0, i/x<=n) {
          //나눈 값들을 i에 담아 []에 밀어준다 //좀 더 이해가 필요함;;
          arr.push(i += x);
        }
      }
    } else { //양수일때
      for (let i = 0; i < x*n; i) {
        if (i/x==0 , i/x<=n) {
          arr.push(i += x);
        }
      }
    }
    return arr;
  }

  console.log(num(-4,30))