import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCN3Uz1OLZLMy3DODJazNf7BIg2rQirQmI",
    authDomain: "voidsapp.firebaseapp.com",
    projectId: "voidsapp",
    storageBucket: "voidsapp.appspot.com",
    messagingSenderId: "512415915277",
    appId: "1:512415915277:web:28cfa227eb2c0664f6a444",
    measurementId: "G-MJZ2SSRPG7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;