import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAa780lJqfb_hITDZqUrhQBGyg4iJfd7jY",
    authDomain: "lista-vue-f89b8.firebaseapp.com",
    projectId: "lista-vue-f89b8",
    storageBucket: "lista-vue-f89b8.appspot.com",
    messagingSenderId: "785645574312",
    appId: "1:785645574312:web:c3967fcc06b782fc7b8a9d"
  };

  firebase.initializeApp (firebaseConfig)

  const db = firebase.firestore()
  const auth = firebase.auth()

  const profileCollection = db.collection('profile')
  const tasksCollection = db.collection('tasks')

  export {
      db, auth, profileCollection, tasksCollection
  }