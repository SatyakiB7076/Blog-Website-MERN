//all routes directly related to the articles will be created here

const express =require('express')
const router=express.Router()

//here whatever relative path we are giving it will be after /articles/something like that
router.get('/new',(req,res)=>{
    res.render('articles/new')
})
router.post('/',(req,res)=>{
    
})

module.exports=router