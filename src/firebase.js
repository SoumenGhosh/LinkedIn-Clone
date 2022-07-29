// import firebase from 'firebase';
// import * as firebase from 'firebase/app'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAlYmwW2jhf_q8rcQKmmv4QYvpH8cS5I7E",
    authDomain: "linkedin-clone-e5a6b.firebaseapp.com",
    projectId: "linkedin-clone-e5a6b",
    storageBucket: "linkedin-clone-e5a6b.appspot.com",
    messagingSenderId: "991131045067",
    appId: "1:991131045067:web:c775ec1b6dff873ccf9f4e"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();


export { db, auth};
// export default firebase;