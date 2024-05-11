const { blogCollection } = require('../../models/index.js')


const findBlog = async (req) => {
    return await blogCollection.findOne({title:req.body.title})
}

module.exports = {
    findBlog
}