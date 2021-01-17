import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import axios from 'axios'

const Home = () => {
  const [ bookState, setBookState ] = useState({
    search: '',
    books: []
  })

  bookState.handleInputChange = event => {
    setBookState({ ...bookState, [event.target.name]: event.target.value })
  }

  bookState.handleSearchBook = event => {
    event.preventDefault()
    axios.get(`/api/googlebooks/${bookState.search}`)
      .then(({ data }) => {
        console.log(data)
      })
      .catch(err => console.error(err))
  }

  return (
    <>
      <form onSubmit={bookState.handleSearchBook}>
        <TextField 
        label="Search Book" 
        name="search" 
        value={bookState.search}
        onChange={bookState.handleInputChange}/>
        <Button 
        variant="outlined" 
        color="primary"
        onClick={bookState.handleSearchBook}>
          Search
      </Button>
      </form>
    </>
  )
}

export default Home