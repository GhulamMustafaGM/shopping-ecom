exports.getProducts = (req, res, next) => {
    res.status().json({
        success: true, 
        message: 'This route will show all products.'
    })
}