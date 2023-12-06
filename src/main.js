
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; 
import { initializeApp } from "firebase/app";
import dotenv from 'dotenv'
dotenv.config()

const firebaseConfig = {
    apiKey: process.env.FIREapiKey,
    authDomain: process.env.FIREauthDomain,
    databaseURL: process.env.FIREdatabaseURL,
    projectId: process.env.FIREprojectId,
    storageBucket: process.envFIREstorageBucket,
    messagingSenderId: process.env.FIREmessagingSenderId,
    appId: process.env.FIREappId,
    measurementId: process.env.FIREmeasurementId
};

initializeApp(firebaseConfig);
const app = createApp(App);
app.use(router); 

app.mount('#app');
