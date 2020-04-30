import { initializeAC, addItemAC, deleteItemAC, changeItemAC, isCompleteAC } from "./ReducerForm";
import Axios from "axios";

export const fetchArticleDetailsAction = () => (dispatch) => {
  Axios.get("http://localhost:8000/todoList")
    .then(({ data }) => {
      dispatch(initializeAC(data));
    })
};

export const fetchArticleAddAction = (itemValue) => (dispatch) =>{
  Axios.post("http://localhost:8000/todoList", {itemValue})
    .then(({ data }) => {
      dispatch(addItemAC(data));
    })
};

export const fetchArticleDeleteAction = (id) => (dispatch) => {
  Axios.delete(`http://localhost:8000/todoList/${id}`)
    .then(() => {
      dispatch(deleteItemAC(id));
    })
};


export const fetchArticleChangeAction = (id, itemValue) => (dispatch) => {
  Axios.put(`http://localhost:8000/todoList/${id}`, {itemValue})
    .then(() => {
      dispatch(changeItemAC( id, itemValue));
    })
};

export const fetchIsCompleteAction = (id, data, isComplete) => (dispatch) => {
  Axios.post(`http://localhost:8000/todoList/${id}/complete`)
  .then(() => {
    dispatch(isCompleteAC(id, data, isComplete));
  })
}