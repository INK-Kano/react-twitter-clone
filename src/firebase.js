import firebase from 'firebase/app';

// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
const firebaseConfig = {
    apiKey: process.env.REACT_APP_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_NESSAGIN_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: "G-N6DCGRLSHX"
};

export default firebase.initializeApp(firebaseConfig);