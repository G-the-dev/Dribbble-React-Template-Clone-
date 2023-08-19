import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import MacBookPro161 from './views/mac-book-pro161'
import Dribbblepage from './views/dribbblepage'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={MacBookPro161} exact path="/" />
        <Route component={Dribbblepage} exact path="/dribbblepage" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
