import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyArtJdntEHrDERhrCwi5i0rjqt8fL6ZKoA",
  authDomain: "crwn-db-a17b4.firebaseapp.com",
  databaseURL: "https://crwn-db-a17b4.firebaseio.com",
  projectId: "crwn-db-a17b4",
  storageBucket: "crwn-db-a17b4.appspot.com",
  messagingSenderId: "661352129321",
  appId: "1:661352129321:web:1f9aaa083ddc14d9184d38",
  // measurementId: "G-K38V3NQX4Q",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase