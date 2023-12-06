// 
const express = require('express');
const app = express();
const path = require('path');  // path 모듈 사용

app.listen(60020, ()=>{
    console.log('server on');
})

app.use( '/', express.static( path.join(__dirname, '/dist') ));  
// 이 부분이 없으면 아래코드에서 index.html을 로드하지 못한다.
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '/dist/index.html'));  
})
app.get('/api/predict',(req,res)=>{
    res.json({
        "음식명": "(검은)콩조림",
        "지방(g)": 2.09,
        "탄수화물(g)": 6.98,
        "단백질(g)": 3.85,
        "에너지(kcal)": 56.83
    })
})
// 기본 경로 '/'을 통해 빌드된 dist/index.html 파일을 로드시킨다