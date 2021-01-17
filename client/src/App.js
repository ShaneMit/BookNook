import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/'>

          </Route>
          <Route path='/saved'>
            
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
