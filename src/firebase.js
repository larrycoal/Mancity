import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyCuHspaCgCMDmRFx0A2HZrqzmUq24eXMgg",
    authDomain: "mancity-79a9f.firebaseapp.com",
    databaseURL: "https://mancity-79a9f.firebaseio.com",
    projectId: "mancity-79a9f",
    storageBucket: "mancity-79a9f.appspot.com",
    messagingSenderId: "609255057951",
    appId: "1:609255057951:web:c51a09166a5fd124a6c32a",
    measurementId: "G-BKLNT9BMC5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
   const firebaseDb= firebase.database()
   const firebaseMatches=firebaseDb.ref("matches")
   const firebasePromotions=firebaseDb.ref("promotions")
   export{
       firebase,
       firebaseMatches,
       firebasePromotions
   }
 
  