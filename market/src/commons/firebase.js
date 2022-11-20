//firebase.js
import firebase from "firebase/compat/app"
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
};

 const app = initializeApp(firebaseConfig)

// firebase의 firestore 인스턴스를 변수에 저장
export const db = getFirestore(app);


// 필요한 곳에서 사용할 수 있도록 내보내기
