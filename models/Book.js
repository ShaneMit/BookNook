const { model, Schema } = require('mongoose')

const BookSchema = new Schema({
  title: String,
  authors: String,
  description: String,
  image: String,
  link: String,
  bookId: String
})

module.exports = model('Book', BookSchema)