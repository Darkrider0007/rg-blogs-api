import express from 'express'
import { login, register, logout } from '../controller/auth.js';


const router = express.Router()

router.get('/register',(req,res)=>{
    res.json("Ok");
})


router.post("/register",register)
router.post("/login",login)
router.post("/logout",logout)

export default router;