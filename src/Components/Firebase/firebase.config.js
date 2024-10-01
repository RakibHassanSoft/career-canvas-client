// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyC3njOV0uwsYf3je4re5Jseva8B1MhHFcI",
//   authDomain: "career-canvas-3cb33.firebaseapp.com",
//   projectId: "career-canvas-3cb33",
//   storageBucket: "career-canvas-3cb33.appspot.com",
//   messagingSenderId: "24358882792",
//   appId: "1:24358882792:web:d4e4d85c4488926cf4285d"
// };
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDn8dKGLHjZOUudmvdDGfCFpt08ilX7AKQ",
  authDomain: "todo-app-a9cf8.firebaseapp.com",
  projectId: "todo-app-a9cf8",
  storageBucket: "todo-app-a9cf8.appspot.com",
  messagingSenderId: "600833810525",
  appId: "1:600833810525:web:1b04e244a9b124470a2db4"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;