import React from 'react';
import { connect } from 'react-redux';

import ShowToDoList from './ShowToDoList';
import { fetchArticleDetailsAction, fetchArticleDeleteAction, fetchArticleChangeAction, fetchIsCompleteAction } from '../redux/api';

class ShowToDoListContainer extends React.Component {
  componentDidMount() {
    this.props.fetchArticleDetails()
  }

  render() {
    return (
      <ShowToDoList data={this.props.data} deleteItem={this.props.deleteItem} changeItem={this.props.changeItem} completedCase={this.props.completedCase}/>
    )
  }
}


let mapStateToProps = (state) => {

  return {
    data: state.ReducerForm.data
  }
}

let mapDispatchtoProps = (dispatch) => {
  return {
    deleteItem: (id) => {
      fetchArticleDeleteAction(id)(dispatch);
    },
    changeItem: (id, itemValue) => {
      fetchArticleChangeAction(id, itemValue)(dispatch)
    },
    fetchArticleDetails: () => {
      fetchArticleDetailsAction()(dispatch);
    },
    completedCase: (id, data, isComplete) => {
      fetchIsCompleteAction(id, data, isComplete)(dispatch);
    }
  }
}

export default connect(mapStateToProps, mapDispatchtoProps)(ShowToDoListContainer)