
import firebase from 'firebase/app'
import 'firebase/firestore'


//initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCr1fZ-k2dPsqJIKsC-JgZZ4BfyHo_6Gz0",
    authDomain: "vuetifyfoross-6f13b.firebaseapp.com",
    databaseURL: "https://vuetifyfoross-6f13b.firebaseio.com",
    projectId: "vuetifyfoross-6f13b",
    storageBucket: "vuetifyfoross-6f13b.appspot.com",
    messagingSenderId: "89105832371",
    appId: "1:89105832371:web:dd88e99584ecb74302d3c6"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
db.settings({ timestampsInSnapshot: true })

export default db;