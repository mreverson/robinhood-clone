import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBByNayd11d7pm8a_qQrx7DbvYw8515Tw0",
    authDomain: "robinhood-46dfa.firebaseapp.com",
    databaseURL: "https://robinhood-46dfa.firebaseio.com",
    projectId: "robinhood-46dfa",
    storageBucket: "robinhood-46dfa.appspot.com",
    messagingSenderId: "569012912218",
    appId: "1:569012912218:web:ccfa2cc95df14362a61863"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export { db };