const admin = require('firebase-admin');

// 서비스 계정 키 파일 절대경로
const serviceAccount = require('/home/t23305/server/test-96370-firebase-adminsdk-4rw0x-c11cc6cc7c.json');

// databaseURL 작성
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://test-96370-default-rtdb.asia-southeast1.firebasedatabase.app'
});

const db = admin.firestore();
var fs = require("fs");
var text = fs.readFileSync("./test.txt",{encoding:'utf-8',flag:'r'});
var textByLine = text.split("\n")
console.log(textByLine)
textByLine.forEach((name)=>{
  const docRef = db.collection('nutrition').doc(name);
docRef.get()
  .then(doc => {
    if (doc.exists) {
      // console.log('Document data:', doc.data());
    } else {
      console.log('No such document!',name);
    }
  })
  .catch(error => {
    console.error('Error getting document:', error);
  });
});