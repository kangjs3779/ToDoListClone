// 서버 오픈하는 코드/기본세팅
const express = require('express');
const app = express();

app.listen(8080, function() {
    console.log('listening on 8080');
});
// 1 파람 : 서버띄울 포트번호, 2 파람 : 서버 띄우고 나서의 함수
// 8080 포트로 들어오면 이렇게 출력해라

// app.get('/pet', function(요청, 응답) {
app.get('/pet', function(req, res) {
    res.send('펫용품 쇼핑할 수 있는 페이징입니다.');
})

app.get('/beauty', function(req, res) {
    res.send('뷰티 용품을 쇼핑하는 페이징입니다.')
})

// 서버 재실행이 귀찮음 -> 자동화시키자

app.get('/', function(req, res) {
    // 홈페이지라는 뜻
    res.sendFile(__dirname + '/index.html')
})