// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/auth';
import User from './js/user';
const firebaseConfig = {
  apiKey: 'AIzaSyALIlwW5o0nAF8gVWT2Sl7lSAN7taUiaeQ',
  authDomain: 'test1-d6bea.firebaseapp.com',
  databaseURL: 'https://test1-d6bea-default-rtdb.firebaseio.com',
  projectId: 'test1-d6bea',
  storageBucket: 'test1-d6bea.appspot.com',
  messagingSenderId: '100803741823',
  appId: '1:100803741823:web:ed3a31a09b0129cbd8174a',
  measurementId: 'G-Y5L38LETM4',
};
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase

const form = document.querySelector('#form');
const button = document.querySelector('.online');

form.addEventListener('submit', e => {
  e.preventDefault();

  User.createAccount({
    email: e.currentTarget.elements['login'].value,
    password: e.currentTarget.elements['password'].value,
  })
    .then(user => {
      console.log(user);
    })
    .catch(e => {
      console.log(e.message);
    });
});

button.addEventListener('click', e => {
  console.log(User.isOnline());
});
