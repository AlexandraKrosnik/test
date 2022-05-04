import firebase from 'firebase/app';
import 'firebase/auth';

export default class User {
  constructor({ email, password }) {
    this.email = email;
    this.password = password;
  }
  static isOnline() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        return 'Онлайн';
      }
      return 'Офлайн';
    });
  }
  static createAccount({ email, password }) {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(error => {
        let errorCode = error.code;
        let errorMessage = error.message;
        if (errorCode === 'auth/weak-password') {
          throw new Error('Пароль має містити 8 символів!');
        }
        throw new Error(2);
        // ..
      });
  }

  get email() {
    return this._email;
  }
  set email(val) {
    this._email = val;
  }
  get password() {
    return this._password;
  }
  set password(val) {
    this._password = val;
  }
}
