import firebase from 'firebase/compat/app'; 
import 'firebase/compat/auth'; 
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDAGo_U03837nmi-BDGQgWfl7Ztr4_73cs",
    authDomain: "discord-clone-e3d95.firebaseapp.com",
    projectId: "discord-clone-e3d95",
    storageBucket: "discord-clone-e3d95.appspot.com",
    messagingSenderId: "170620467035",
    appId: "1:170620467035:web:6bd0d4c32d17e85d4e0c7e",
    measurementId: "G-K6SG2KMRYD"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db; 
