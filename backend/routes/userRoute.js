import express from 'express'
import {loginUser , registerUser} from '../controllers/userController.js'

const userRouter = express.Router()
userRouter.post("/register", registerUser)
userRouter.post("/login", loginUser)

export default userRouter

/*import express from 'express'
import {addFood,listFood,removeFood} from '../controllers/foodController.js'
import multer from 'multer'


const foodRouter= express.Router();

//image Storege Engine

const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)

    },
})

const upload = multer({storage:storage})

foodRouter.post("/add",upload.single("image"),addFood)
foodRouter.get("/list",listFood)
foodRouter.post("/remove",removeFood)



export default foodRouter;  */