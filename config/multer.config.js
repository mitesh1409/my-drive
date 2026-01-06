import Multer from "multer";
import FirebaseStorage from "multer-firebase-storage";
import { cert } from "firebase-admin/app";
import serviceAccount from "../my-drive-735c7-firebase-adminsdk-fbsvc-608ba53203.json" with { type: "json" };

const upload = Multer({
  storage: FirebaseStorage({
    bucketName: 'my-drive-735c7.firebasestorage.app',
    credentials: cert(serviceAccount),
  })
});

export { upload };
