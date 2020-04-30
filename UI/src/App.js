import React from 'react';

import AddToDoListFormContainer from './components/AddToDoListFormContainer';
import ShowToDoListContainer from './components/ShowToDoListContainer';

import style from './components/styles/App.module.css'

const App = () => {

  return (
    <div>
      <h1 className={style.title}>TODO List</h1>
      <AddToDoListFormContainer />
      <ShowToDoListContainer />
    </div>
  )
}


export default App;