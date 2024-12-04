// HTTP 서버
const port = process.env.PORT || 4000; // 포트를 4000으로 변경
const http = require('http');
const sever = http.createServer((req,res)=> {
    res.write("Node.js");
    res.end()

});
sever.listen(port,()=>{
    console.log(`서버 로딩 on 포트 ${port}`)
});

