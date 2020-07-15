const express = require('express')

const app = express()

app.use(require('cors')())
app.use(express.json())

const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/eg',{
    useNewUrlParser: true,
    useFindAndModify:true,
    useCreateIndex:true,
})

const Article = mongoose.model('Article',new mongoose.Schema({
    title:{type:String},
    body:{type:String},
}))

app.get("/",async(req,res)=>{
    res.send('indexddddd')
})


app.get('/api/article', async(req,res) =>{
    //自动过滤模型中没有定义的字段，将表单中的字段按模型中定义进行赋值
    const articles = await Article.find()
    res.send(articles)
})
app.post('/api/article', async(req,res) =>{
    //自动过滤模型中没有定义的字段，将表单中的字段按模型中定义进行赋值
    const article = await Article.create(req.body)
    res.send(article)
})

app.delete('/api/article/:id', async(req,res) =>{
    //自动过滤模型中没有定义的字段，将表单中的字段按模型中定义进行赋值
    await Article.findByIdAndDelete(req.params.id)
    res.send({
        status:true
    })
})

app.get('/api/article/:id',async(req,res)=>{
    const article =  await Article.findById(req.params.id)
    res.send(article)
})

app.put('/api/article/:id',async(req,res)=>{
    const article =  await Article.findByIdAndUpdate(req.params.id,req.body)
    res.send(article)
})
app.listen(3001, ()=>{
    console.log('http://localhost:3001/')
})