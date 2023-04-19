import { question } from "../models/questionSchema.js"
import questions,{answers} from "../database/data.js"
import { result } from "../models/resultSchema.js"


export async function getQuestions(req, res) {
   try {
      const q = await question.find()
      res.json(q)
   } catch (err) {
      res.json({err})
   }


}

export async function insertQuestions(req, res) {
   try {
      question.insertMany({ question: questions, answer: answers })
   } catch (err) {
      res.json({ err })
   }

}

export async function dropQuestions(req, res) {
   try {
      question.deleteMany()
      res.json({'msg':  'Question deleted'})
   } catch (err) {
      res.json({ err })
   }
}





// result controlls
export async function getResult(req, res) {
   try {
      const r = await result.find()
      res.json(r)
   } catch (err) {
      res.json({err})
   }

}
export async function dropResult(req, res) {

   try {
      await result.deleteMany()
      res.json({msg:"Result Deleted Successsfuly"})
   } catch (err) {
      res.json({err})
   }

}
export async function storeResult(req, res) {
  try{
   const {username,result,attempts,points,achieved}= res.body;
   if(!username&&!result)throw new Error ('Date not provide...');

   result.create({username,result,attempts,points,achieved})
   res.json({msg:"Result saved sucessfully..."})
  }catch(err){
      res.json({err})

  }
}
