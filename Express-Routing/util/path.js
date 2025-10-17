// this will help us to import the path efficiently and that help to avooid the deprication

const path = require("path");
module.exports = path.dirname(process.mainModule.filename);
