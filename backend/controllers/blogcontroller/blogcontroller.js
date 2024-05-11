const { response } = require('express')
const blogCollection = require('../../models/blogcollection/blogcollection.js')
const {findBlog } = require('../../services/blogservices/blog_service.js')

const getAllBlogs = async (req , res) => {
    try{
        const allBlogs = await blogCollection.find()

        if(!allBlogs || allBlogs.length === 0){
            return res.status(404).send({
                data: [],
                success: false,
                message: 'No User Found.'
            })
        }

        res.status(200).send({
            data: allBlogs,
            success: true,
            message: 'All user records fetched successfully.'
        })


    }catch(error){
        console.log(error)
        return res.status(500).send({
            data: [],
            success: false,
            message: 'Internal Server Error'
        });
    }
}


const createBlog = async (req , res) =>{
    try{

        console.log(req.body)
        const { title , description , image , user } = req.body

        const checkExistingBlogTitle = await findBlog(req)

        if(checkExistingBlogTitle){
            return res.status(400).send({
                data: [],
                message: "Blog Title Already Exist. ",
                status: 400,
                success: true,
            });
        }

        const blog = await blogCollection.create({
            title,
            description,
            image,
            user
        })

        return res.status(201).send({
            data: blog,
            message: "New Blog Created Successfully",
            status: 201,
            success: true,
        });


    }catch(error){
        console.log(error)
        return res.status(500).send({
            data: [],
            success: false,
            message: 'Internal Server Error'
        });
    }
}

module.exports = {
    getAllBlogs,
    createBlog
}