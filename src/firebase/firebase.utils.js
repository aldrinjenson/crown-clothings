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

  // Firebase might seem really difficult and hard in the beginning. But bear with it please,
  // it is incredibly powerful and the methods we use here are way way easier than to use any other manual authentication
  // Firebase does have a bit of learning cureve but once the concepts are mastered, it can be a really valuable tool/asset

export const createUserProfileDocument = async (userAuth, additionalData) => { // here userAuth is the new user object passed from google when a new user signs up with gmail
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }

  return userRef;

};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
