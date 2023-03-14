const dbConfig = require('./database')
const mongoose = require('mongoose')

module.exports={
  mongoose,
  url: dbConfig.url,
  dagetdb: require('./models.js')(mongoose)
}
