import multer from "multer";
//Humne isme ye bataya hai multer ko store kaha karna hai
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/temp')
    },
    filename: function (req, file, cb) {
      
      cb(null, file.originalname)
    }
  })
  
  export const upload = multer({
     storage: storage 
    })