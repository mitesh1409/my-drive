// Firebase Admin SDK configuration.

import { initializeApp, cert } from "firebase-admin/app";
import serviceAccount from "../my-drive-735c7-firebase-adminsdk-fbsvc-608ba53203.json" with { type: "json" };

const firebase = initializeApp({
  credential: cert(serviceAccount),
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET_NAME,
});

export { firebase };
