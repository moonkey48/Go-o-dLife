import { initializeApp } from 'firebase/app';


const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;