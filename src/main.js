
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; 
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAK2WTd9bT7qADAd83wCcdyNnmt9flFkKE",
    authDomain: "test-96370.firebaseapp.com",
    databaseURL: "https://test-96370-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "test-96370",
    storageBucket: "test-96370.appspot.com",
    messagingSenderId: "241581928912",
    appId: "1:241581928912:web:cc540eae4b7c2db551c9d5",
    measurementId: "G-585FMY913H"
};

initializeApp(firebaseConfig);
const app = createApp(App);
app.use(router); 

app.mount('#app');
