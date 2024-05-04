//all routes directly related to the articles will be created here

const express =require('express')
const Article = require('../models/article')

const router=express.Router()

//here whatever relative path we are giving it will be after /articles/something like that
router.get('/new',(req,res)=>{
    res.render('articles/new')
})
router.get("/:id",(req,res)=>{

})
//post request send when new article is saved
router.post('/', async(req,res)=>{
    const article=new Article({
        title:req.body.title,
        description:req.body.description,
        markdown:req.body.markdown
    })
    try{
        article =await article.save()
res.redirect(`/articles/${article.id}`)
    }catch(e){
res.render('articles/new', {article})
    }
})

module.exports=router