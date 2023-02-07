import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: 'AIzaSyDG47R9RHB8CpHsgYGsHmhgFHIrrM77pf8',
  authDomain: 'chat-gpt-messenger.firebaseapp.com',
  projectId: 'chat-gpt-messenger',
  storageBucket: 'chat-gpt-messenger.appspot.com',
  messagingSenderId: '57206432073',
  appId: '1:57206432073:web:c7698bc51415f5b619ba98',
  measurementId: 'G-493ZTVWHZC',
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
