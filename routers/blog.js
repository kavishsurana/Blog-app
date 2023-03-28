const router = require("express").Router()

const Blog = require("../models/blog")

router.get("/blog/:id" , async(req,res) => {
    const {id} = req.params

    const getBlog = await Blog.findOne({_id : id})

    res.render("particularBlog" , {blog : getBlog})
})


.get("/delete/:id" , (req,res) => {
    const {id} = req.params
    Blog.deleteOne({_id : id})
    .then(() => {
        console.log("Deleted blog sucessfully!")
        res.redirect("/")
    })
    .catch((err) => {
        console.log(err)
    })
})


.get("/edit/:id" ,async (req,res) => {
    const {id} = req.params

    const getData = await Blog.findOne({_id : id})

    res.render("editBlog" , {blog: getData})
})

.post("/edit/:id" , (req,res) => {
    const {id} = req.params
    const {title , content} = req.body

    Blog.updateOne({_id : id} ,{title , content})
    .then(() => {
        console.log("Sucessfully! Updated the blog")
        res.redirect("/")
    })
    .catch((err) => console.log(err))
})


module.exports = router