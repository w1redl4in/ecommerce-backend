import multer from 'multer';
import path from 'path';
import crypto from 'crypto';

export default {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, '..', 'uploads'),
    filename: (req, file, cb) => {
      crypto.randomBytes(7, (err, res) => {
        cb(null, `${res.toString('hex')}-${file.originalname}`);
      });
    },
  }),
};
