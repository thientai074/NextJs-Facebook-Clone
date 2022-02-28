import firebase from 'firebase'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCT5osEEz6TtXhrdTF-lqhUou6NXle64Xo",
    authDomain: "clonefb123-cf1e9.firebaseapp.com",
    projectId: "clonefb123-cf1e9",
    storageBucket: "clonefb123-cf1e9.appspot.com",
    messagingSenderId: "1042208409595",
    appId: "1:1042208409595:web:2a485edc434e377e45ad5e",
    measurementId: "G-4N0TMB1QKB"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()
  
  export const storage = firebase.storage()

 

