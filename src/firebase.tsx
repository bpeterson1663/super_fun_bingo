import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'

let apiKey, authDomain, databaseURL, projectId, storageBucket, messagingSenderId, appId

if (window.location.href.includes('staging') || window.location.href.includes('localhost')) {
  apiKey = process.env.REACT_APP_STAGE_API_KEY
  authDomain = process.env.REACT_APP_STAGE_AUTH_DOMAIN
  databaseURL = process.env.REACT_APP_STAGE_DATABASE_URL
  projectId = process.env.REACT_APP_STAGE_PROJECT_ID
  storageBucket = process.env.REACT_APP_STAGE_STORAGE_BUCKET
  messagingSenderId = process.env.REACT_APP_STAGE_MESSAGING_SENDER_ID
  appId = process.env.REACT_APP_STAGE_APP_ID
} else {
  apiKey = process.env.REACT_APP_API_KEY
  authDomain = process.env.REACT_APP_AUTH_DOMAIN
  databaseURL = process.env.REACT_APP_DATABASE_URL
  projectId = process.env.REACT_APP_PROJECT_ID
  storageBucket = process.env.REACT_APP_STORAGE_BUCKET
  messagingSenderId = process.env.REACT_APP_MESSAGING_SENDER_ID
  appId = process.env.REACT_APP_APP_ID
}

const config = {
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export const auth = firebase.auth()
export const db = firebase.firestore()
