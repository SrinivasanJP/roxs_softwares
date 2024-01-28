
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyBtyRTBf4kaIIBpij4KUQ8LPqEojO5CHRQ",
  authDomain: "roxssoftware.firebaseapp.com",
  projectId: "roxssoftware",
  storageBucket: "roxssoftware.appspot.com",
  messagingSenderId: "956699319351",
  appId: "1:956699319351:web:02ceca699d0d8ff9d533b2",
  measurementId: "G-R27FNKYKXR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

