import { Router } from "express";
import * as controllers from "../controlls/controller.js";// instead using import { dropQuestions, getQuestions, insertQuestions } from "../controlls/controller";

const router= Router()


// first method for routing
router.get('/question', controllers.getQuestions)
router.post('/question', controllers.insertQuestions)
router.delete('/question', controllers.dropQuestions)

//second method for routing


router.route('/result')
    .get(controllers.getResult)
    .post(controllers.storeResult)
    .delete(controllers.dropResult)


export default router