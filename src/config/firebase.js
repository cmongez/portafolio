import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
import { doc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDMQRvaTP2iez95jCb5jozUbrpsNKzc7jU',
  authDomain: 'portafolio-7917b.firebaseapp.com',
  projectId: 'portafolio-7917b',
  storageBucket: 'portafolio-7917b.appspot.com',
  messagingSenderId: '861531911762',
  appId: '1:861531911762:web:33a9df4015dd17e43d118b',
  measurementId: 'G-LWKR4D2TX7',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
