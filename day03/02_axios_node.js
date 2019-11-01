// axios 사용 준비(require : import 같은 개념)
const axios = require('axios')

const url = 'https://jsonplaceholder.typicode.com/posts/1'  // 요청 보낼 url

axios.get(url)  // axios ; js로 요청 보내는 대표적인 라이브러리
    .then(function(response) {  // 응답 도착하면 response 실행해줘 then이 없는 상태에서 node 02_axios_node.js 하면 Promise { <pending> } 출력됨
        console.log(response.data)
}) 

// 터미널에 node 02_axios_node.js 로 결과 출력 확인