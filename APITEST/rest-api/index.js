const express = require('express');
const app = express();
require('dotenv').config(); // 환경 변수 로드 

// 기본 라우트
app.get('/',(req,res)=> {
    res.send('Express!');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`Sever Running on port ${PORT}`);
});
