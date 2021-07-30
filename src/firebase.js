import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB6ccJyi0TapesU0HZOkDTsk8rMuAW3wN8",
  authDomain: "ordspillmobil.firebaseapp.com",
  projectId: "ordspillmobil",
  storageBucket: "ordspillmobil.appspot.com",
  messagingSenderId: "367353307681",
  appId: "1:367353307681:web:a2113318dd53e913c5f960",
  measurementId: "G-2EC9CVS6PY",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
