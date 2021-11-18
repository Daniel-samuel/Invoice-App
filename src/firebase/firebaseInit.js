import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyAK7At4cDtvUnXwCOrtDpkkA13Bhyg0Euo",
    authDomain: "invoice-app-df.firebaseapp.com",
    projectId: "invoice-app-df",
    storageBucket: "invoice-app-df.appspot.com",
    messagingSenderId: "938882209859",
    appId: "1:938882209859:web:70cc36d3046c52338a1cf6"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export default db
