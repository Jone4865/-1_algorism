function kim(seoul) {
    return `김서방은 ${seoul.indexOf('Kim')}에 있다`;//indexOf의 첫번째 파라미터는 찾을 값, 두번째는 실행할 위치
}

console.log(kim(["Jane", "Kim"]))

// 배열 안에서 찾으려는 값(searchElement)과 정확하게 일치(===)하는   '첫번째' element의 index를 리턴합니다. 
// 만약, 찾으려는 값이 배열에 없으면 -1을 리턴합니다.
// fromIndex를 파라미터로 전달하면, fromIndex부터 값을 찾습니다.
// 출처: https://hianna.tistory.com/404 [어제 오늘 내일:티스토리]