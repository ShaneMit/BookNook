import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography'
import CardHeader from '@material-ui/core/CardHeader'
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
        setBookState({ ...bookState, books: data })
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
      <div>
        {
          bookState.books.map(gif => (
            < className={classes.root}>
                <CardMedia
                  className={classes.media}
                  image={}
                  title={}
                />
              <CardActions>
                <Button size="small" color="primary">
                  Save
                </Button>
              </CardActions>
            </Card>
          ))
        }
      </div>
    </>
  )
}

export default Home