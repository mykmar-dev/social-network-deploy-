const {join} = require('path')
const fs = require('fs')

exports.deleteFile = (filePath) => {
    filePath = join(__dirname, '../images', filePath)
    fs.unlink(filePath, err => console.log(err))
}