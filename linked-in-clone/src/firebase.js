import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyB5G3xRnOYHQv4smaRrGrKi7Nqqr6TZTqY',
  authDomain: 'linkedin-clone-d8fc1.firebaseapp.com',
  projectId: 'linkedin-clone-d8fc1',
  storageBucket: 'linkedin-clone-d8fc1.appspot.com',
  messagingSenderId: '627000902941',
  appId: '1:627000902941:web:ff82371ba932c355614df4',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
export default firebase;
