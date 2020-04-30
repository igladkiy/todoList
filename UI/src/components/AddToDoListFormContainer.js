import { connect } from "react-redux";

import AddToDoListForm from './AddToDoListForm';
import { fetchArticleAddAction } from "../redux/api";

let mapStateToProps = (state) => {

  return {
    ReducerForm: state.data
  }
}
let mapDispatchtoProps = (dispatch) => {
  return {
    addTodo: (newItemValue) => {
      fetchArticleAddAction(newItemValue)(dispatch)
    }
  }
}


export default connect(mapStateToProps, mapDispatchtoProps)(AddToDoListForm)