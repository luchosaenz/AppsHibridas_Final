import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req,file, cb){
      return cb(null, 'img')
    },
    filename: function (req,file,cb){
      return cb(null, file.originalname)
    }
})

const upload = multer({ storage: storage})
const uploadFile = upload.single('file')

export {
    uploadFile
}
