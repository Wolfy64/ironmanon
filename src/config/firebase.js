// Firebase App is always required and must be first
import firebase from 'firebase';

// Add additional services that you want to use
import 'firebase/database/dist/index.cjs';
import 'firebase/auth/dist/index.cjs';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyChmXT1VvSbFF-VF97Icx6Rn3bIxaW0dkY',
  authDomain: 'ironmanon-react.firebaseapp.com',
  databaseURL: 'https://ironmanon-react.firebaseio.com',
  projectId: 'ironmanon-react',
  storageBucket: 'ironmanon-react.appspot.com',
  messagingSenderId: '164057447379'
};

// Initialize the default app
const app = firebase.initializeApp(config);
const database = app.database().ref();

// Get a reference to the root of the Database
export const dbMessages = database.child('messages');
export const dbCounter = database.child('counter');

// Set authentication
export const auth = firebase.auth();

export const uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return false;
    }
  },
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID
      // requireDisplayName: false
    }
  ],
  // Terms of service url.
  tosUrl: ''
};
