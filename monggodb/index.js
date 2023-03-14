const dbConfig = require('./database')
const mongoose = require('mongoose')

module.exports={
  mongoose,
  url: dbConfig.url,
  logindb: require('./models.js')(mongoose)
}