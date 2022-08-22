import React from 'react'
import {Routes,Route} from "react-router-dom"
import { BooksList } from './BooksList'
import { CreateBook } from './CreateBook'
import NavBar from './shared/NavBar'
import { UpdateBook } from './UpdateBook'

function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path='/update-book/:userId' element={UpdateBook()} />
        <Route path='/create-book' element={CreateBook()} />
        <Route path='/' element={BooksList()} />
      </Routes>
    </div>

  )
}

export default App