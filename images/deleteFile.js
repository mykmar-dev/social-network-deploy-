const {join} = require('path')
const fs = require('fs')

exports.deleteFile = (filePath) => {
    filePath = join(__dirname, filePath)
    fs.unlink(filePath, err => console.log(err))
}