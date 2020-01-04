import firebase from 'firebase/app'


const firebaseConfig = {
    apiKey: "AIzaSyAfOChqxxW5lJ_-9Mqt9Kp0xybI5htBjI4",
    authDomain: "top50albums2019.firebaseapp.com",
    databaseURL: "https://top50albums2019.firebaseio.com",
    projectId: "top50albums2019",
    storageBucket: "top50albums2019.appspot.com",
    messagingSenderId: "948880214967",
    appId: "1:948880214967:web:9fabacf847d1b41495f632",
    measurementId: "G-Q5BZRT3Z51"
}
firebase.initializeApp(firebaseConfig)

export default firebase
