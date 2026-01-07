import express from 'express';

import authenticate from '../middlewares/authenticate.js';
import { upload } from '../config/multer.config.js';
import * as DocumentsController from '../controllers/documents.controller.js';

const documentsRouter = express.Router();

documentsRouter.post(
    '/upload',
    authenticate,
    upload.single('document'),
    DocumentsController.upload
);

documentsRouter.get(
    '/download/:id',
    authenticate,
    DocumentsController.download
);

export default documentsRouter;
