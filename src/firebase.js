import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
const config={
  apiKey: "AIzaSyCwfxRltn9QJGPk15riXEiAPakEh3NSAEs",
  authDomain: "claps-education.firebaseapp.com",
  projectId: "claps-education",
  storageBucket: "claps-education.appspot.com",
  messagingSenderId: "291544981715",
  appId: "1:291544981715:web:c0fde6b05676cbcf603426",
  measurementId: "G-QCWC2C2N36"
 }




const app=firebase.initializeApp(
    config
);


  const db=app.firestore();
  const auth=app.auth();
  const storage=app.storage();

  export {db,auth,storage} 