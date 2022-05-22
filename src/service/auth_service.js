import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
  } from 'firebase/auth';
  
  class AuthService {
    constructor() {
      this.firebaseAuth = getAuth();
      this.googleProvider = new GoogleAuthProvider();
    }
  
    login() {
      const authProvider = this.googleProvider;
      return signInWithPopup(this.firebaseAuth, authProvider);
    }
  
    logout() {
      this.firebaseAuth.signOut();
    }
  
    onAuthChange(onUserChanged) {
      this.firebaseAuth.onAuthStateChanged((user) => {
        onUserChanged(user);
      });
    }
  }
  
  export default AuthService;
  