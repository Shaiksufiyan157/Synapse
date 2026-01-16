import express from "express"
const router=express.Router()
import result from "../controllers/result.controller.js"
import middleware from "../middleware.js";

router.get('/addresult',middleware.isLoggedIn,result.seedResult)

router.route('/result')
.get(middleware.isLoggedIn,result.renderSearch)
.post(result.findResult)

export default router;