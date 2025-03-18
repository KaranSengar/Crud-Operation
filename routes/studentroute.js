import express from "express";
import {createdata, createstudent, deletedata, singledata, updatedata} from "../config/controller/studentcontroller.js";


const router = express.Router()


router.get('/getuser',createstudent)
router.get('/singledata/:id',singledata)
router.post('/createdata',createdata)
router.put('/updatedata/:id',updatedata)
router.delete('/deletedata/:id',deletedata)
export default router