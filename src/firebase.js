import firebase from "./firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBcToFtknDhvRbuGhsHD0tr0uHALjwEiiU",
  authDomain: "mentoras-3e1b6.firebaseapp.com",
  projectId: "mentoras-3e1b6",
  storageBucket: "mentoras-3e1b6.appspot.com",
  messagingSenderId: "280045030855",
  appId: "1:280045030855:web:cf79991d6cf974d9399de2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
