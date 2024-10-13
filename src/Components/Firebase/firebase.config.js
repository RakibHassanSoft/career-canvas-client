// Import the functions you need from the Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import authentication service

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUJnonn0oUfRUBAAspS0DoVY_ZuBTiSm0",
  authDomain: "carearcanvas.firebaseapp.com",
  projectId: "carearcanvas",
  storageBucket: "carearcanvas.appspot.com",
  messagingSenderId: "185481169579",
  appId: "1:185481169579:web:73f72e40b50c52d51c05ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and export it
const auth = getAuth(app);

export { auth, app };
