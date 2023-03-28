const router = require('express').Router()
const Blog = require("../models/blog")

router.get("/compose" , (req,res) => {
    res.render("composeBlog")
})

.post("/compose" , (req,res) => {
    const {title , content} = req.body

    if(!title || !content){
        res.status(400).send("Please enter all the required Credentials!")
    }

    const newBlog = new Blog({title , content})

    newBlog.save()
    .then(() => {
        console.log("Blog saved sucessfully!")
        res.redirect("/")
    })
    .catch((e) => {
        console.log(e)
    })
})

module.exports = router;