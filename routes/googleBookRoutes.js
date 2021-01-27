const router = require('express').Router()
const axios = require('axios')
const { Book } = require('../models')

router.get('/googlebooks/:search', (req, res) => {
  axios.get(`https://www.googleapis.com/books/v1/volumes?q=${req.params.search}&key=${process.env.GOOGLE_API_KEY}`)
    .then(({ data }) => {
      Book.find()
        .then(books => {
          const booksFiltered = 
        })
      res.json(data.items)
    })
    .catch(err => console.error(err))
})

module.exports = router