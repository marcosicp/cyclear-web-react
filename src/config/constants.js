import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
// import "firebase/analytics";

const app = firebase.initializeApp({
  
});
// firebase.analytics();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export const firebaseAuth = app.auth();
export default app;
export { projectFirestore, timestamp };
