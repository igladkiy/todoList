import React from 'react';
import { Field, reduxForm } from 'redux-form';

import style from '../components/styles/AddToDoListForm.module.css';

const AddToDoListForm = (props) => {

    let AddNewTodo = (values) =>{
        props.addTodo(values.newItemValue)
        values.newItemValue = ''
    }
    return (
        <div>
        <ListForm onSubmit={AddNewTodo} />
      </div>
    )
}

const TodoListForm = (props) => {
      return (
        <div className="todoForm">
        <form onSubmit={props.handleSubmit}>
          <fieldset className={style.fieldset}>
            <div>
              <Field component='input' name='newItemValue' type='text' className={style.tabNewItem} placeholder='tab here' required />
              <button className={style.addItem}> Add Item </button>
            </div>
          </fieldset>
        </form>
        </div>
      )
    }

const ListForm = reduxForm({form:'addItem'})(TodoListForm)

export default AddToDoListForm;