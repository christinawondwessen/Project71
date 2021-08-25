import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 //Add configuration here
  apiKey: "AIzaSyBROEk9CrPH_AiQAOMsZsODuamPoxacdms",
  authDomain: "project-71-1db06.firebaseapp.com",
  projectId: "project-71-1db06",
  storageBucket: "project-71-1db06.appspot.com",
  messagingSenderId: "512361164168",
  appId: "1:512361164168:web:aa91cbaf6818a5cd4e1e3d",
  measurementId: "G-EX65RW0LDF"
};

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

