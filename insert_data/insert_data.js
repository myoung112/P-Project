const admin=require('firebase-admin');
const firebaseConfig = require('./test-96370-firebase-adminsdk-4rw0x-e3ac16f512.json')
  admin.initializeApp({
    credential: admin.credential.cert(firebaseConfig),
  });
const db = admin.firestore();
const fs = require('fs');
const pathToJsonFile = './codebeautify.json'; 
fs.readFile(pathToJsonFile, 'utf8', (err, data) => {
    if (err) {
      console.error('파일을 읽는 도중 오류가 발생했습니다:', err);
      return;
    }
  
    const jsonData = JSON.parse(data);
    jsonData.forEach(item => {
        const documentName = item["음 식 명"]; // 각 데이터의 "음 식 명"을 문서 이름으로 사용
        db.collection('nutrition').doc(documentName).set(item)
          .then(() => {
            console.log(`문서 ${documentName}이 Firestore에 성공적으로 추가되었습니다.`);
          })
          .catch((error) => {
            console.error(`Firestore에 문서를 추가하는 중 오류가 발생했습니다: ${error}`);
          });
      });
  });