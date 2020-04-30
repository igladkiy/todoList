import React from 'react';

import style from './styles/Item.module.css'

class Item extends React.Component{
    state = {
        id: this.props.id,
        itemValue: this.props.itemValue,
        editMode: false,
        isComplete: this.props.isComplete
    }

    activateEditMode = () => {
        this.setState({
            id: this.props.id,
            itemValue: this.props.itemValue,
            editMode: true

        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.changeItem(this.state.id, this.state.itemValue)
    }
    onDataChanged = (e) => {
        this.setState({
            itemValue: e.currentTarget.value,

        })
    }
    deleteItem = () => {
        this.props.deleteItem(this.props.id)

    }
    completedCase = () => {
        this.props.completedCase(this.props.id, this.props.itemValue, !this.props.isComplete);
        this.setState({
            isComplete: !this.isComplete
        })
    }

    render(){
    return (
        <div id={this.props.id} className={!this.state.isComplete ? style.changeItem : style.completedCase}>
            <span>{this.props.index+1}. </span>

            <span>
                    {!this.state.editMode &&
                        <span onDoubleClick={this.activateEditMode}>{this.props.itemValue} </span>
                    }

                    {this.state.editMode &&
                        <input onChange={this.onDataChanged} autoFocus={true}
                            onBlur={this.deactivateEditMode} value={this.state.itemValue} />
                    }
                </span>

                <span>

                    <button onClick={this.deleteItem} className={style.deleteItem}>Deny</button>
                    <button onClick={this.completedCase} className={style.completeButtonFalse}>&#128504; Complete</button>
                </span>
        </div>
    )
    }
}

export default Item;