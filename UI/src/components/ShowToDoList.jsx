import React from 'react';
import Item from './Item';

import style from './styles/ShowToDoList.module.css'

const ShowToDoList = (props) => {
    let items = props.data.map((items, index) => 
        <Item id={items.id} itemValue={items.itemValue} isComplete={items.isComplete} key={index} index={index} 
        deleteItem={props.deleteItem} changeItem={props.changeItem} completedCase={props.completedCase}/>
        )
    return (
        <div>
            <div className={style.itemInList}>
                <span >{items}</span>
            </div>

        </div>
    )


}

export default ShowToDoList;