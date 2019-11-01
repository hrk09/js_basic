// ★★★★ 일반 언어와 차이가 있는 흐름(비동기처리)
// 동기 처리: 하나의 요청이 처리되는 동안 다른 요청이 처리되지 못하며 요청이 완료되어야만 다음 처리가 가능한 방식
// 비동기 처리: 하나의 요청 처리가 완료되기 전에 제어권을 다음 요청으로 넘기는 것
// 대표적인 비동기 함수 setTimeout
// 비동기 프로그래밍의 기본: 비동기 API를 사용하여 비동기 이벤트를 발생시키고 완료여부를 알 수 있도록 Callback을 정의하는 것


function sleep_3() {
    setTimeout(function() {  // 3; 비동기함수
        console.log('wake up')
    }, 3000)  // 3000ms === 3s  
}

console.log('start sleeping')  // 1
sleep_3()  // 2 ; 3초 뒤에 실행해 하고 함수 시켜놓고
console.log('end of program')  // 4 바로 실행하고 있는 것