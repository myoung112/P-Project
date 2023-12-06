// 
const express = require('express');
const app = express();
const path = require('path');  // path 모듈 사용
const multer=require('multer');
const tf=require('@tensorflow/tfjs-node-gpu');
const fs=require('fs');
const upload = multer({
    storage: multer.diskStorage({
      destination(req, file, cb) {
        cb(null, 'img/');
      },
      filename(req, file, cb) {
        const ext = path.extname(file.originalname);
        cb(null, path.basename(file.originalname, ext) + Date.now() + ext);
      },
    }),
    // limits: { fileSize: 5 * 1024 * 1024 },
  });
  async function preprocessImage(imagePath) {
    const imageBuffer = await fs.promises.readFile(imagePath); // 이미지 파일을 버퍼로 읽음
    const tfimage = tf.node.decodeImage(imageBuffer); // TensorFlow.js용 이미지 객체로 변환
    
    // 이미지 크기 조정
    const resizedImage = tf.image.resizeBilinear(tfimage, [256, 256]);
    const reshapedImage = tf.expandDims(resizedImage, 0);
  
    // 이미지 정규화
    const normalizedImage = tf.div(reshapedImage, 255.0); // 예시로 255.0으로 정규화
  
    return normalizedImage;
  }
  
  // 모델 로드
  async function loadModel() {
    const model = await tf.loadLayersModel('file://modeltest0/model.json');
    return model;
  }
  
  // 이미지 예측 함수
  async function predictImage(model, imagePath) {
    const processedImage = await preprocessImage(imagePath); // 이미지 전처리
  
    // 모델에 이미지 전달하여 예측
    const prediction = model.predict(processedImage).dataSync();
    prediction.print(); // 예측 결과 출력
  }
  
app.listen(60020, ()=>{
    console.log('server on');
    console.log(tf.getBackend());
})

app.use( '/', express.static( path.join(__dirname, '/dist') ));  
// app.use( '/img', express.static( path.join(__dirname, '/img') ));  
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
app.post('/api/upload', upload.single('image'), async (req, res) => {
    try {
      // 모델 로드
      const model = await loadModel();
      console.log(model.summary());
      // 이미지 전처리
      const processedImage = await preprocessImage(req.file.path);
  
      // 모델에 이미지 전달하여 예측
      const prediction = await model.predict(processedImage);
  
      // 예측 결과 출력
      prediction.print();
      const predictions = prediction.dataSync();
    const classIndex = prediction.argMax(axis=-1).dataSync()[0]; // 가장 높은 확률의 클래스 인덱스
console.log('예측된 클래스 인덱스:', classIndex);
const test = await prediction.data();
    console.log(test)
      // 결과 반환
      return res.json({
        resultCode: 200,
        resultMsg: '파일 업로드 및 분류 성공',
      });
    } catch (error) {
      console.error('Error:', error);
      return res.status(500).json({
        resultCode: 500,
        resultMsg: '파일 업로드 및 분류 실패',
      });
    }
  });
  
// 기본 경로 '/'을 통해 빌드된 dist/index.html 파일을 로드시킨다