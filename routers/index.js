
const router = require('express').Router()
const blog = require('../models/blog')

router.get("/" , async(req,res) => {
    const allBlogs = await blog.find()
    res.render("index",{blogs : allBlogs})
})


module.exports = router