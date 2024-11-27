
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA5NjIPiD83OU-XMwFK12Dk9qadu0zSleg",
  authDomain: "vitoshop-39457.firebaseapp.com",
  projectId: "vitoshop-39457",
  storageBucket: "vitoshop-39457.firebasestorage.app",
  messagingSenderId: "823705183978",
  appId: "1:823705183978:web:155efed837ea5edccc9993"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth();

export{app,auth}