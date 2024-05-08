import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAes7nH1vNvAI2Q49namElilt56S02YkHk",
  authDomain: "hospital-814dc.firebaseapp.com",
  projectId: "hospital-814dc",
  storageBucket: "hospital-814dc.appspot.com",
  messagingSenderId: "966242998819",
  appId: "1:966242998819:web:b0ab3548eb5efd802cef96",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { app, auth };
