import multer from 'multer';

export const fileUpload = () => {
    const fileStorage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, "./uploads")
        },
        filename: function (req, file, cb) {
            cb(null, Date.now() + '--' + file.originalname )
        }
    });
    
    let upload = multer({
        storage: fileStorage
    });

    return upload;
}