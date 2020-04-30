const ADD_ITEM = "ADD_ITEM";
const DELETE_ITEM = "DELETE_ITEM";
const CHANGE_ITEM = 'CHANGE_ITEM';
const INITIALIZE = 'INITIALIZE';
const IS_COMPLETE = 'IS_COMPLETE';

let initState = {
    data: []
}

let ReducerForm = (state = initState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            let newItem = {
                id: action.data.id,
                itemValue: action.data.itemValue,
                isComplete: false
            }
            return {
                ...state, data: [...state.data, newItem],
            }

        case DELETE_ITEM:
            return {
                ...state, data: state.data.filter(item => item.id !== action.id)
            }

        case CHANGE_ITEM:
            const changedItem = {
                id: action.id,
                itemValue: action.itemValue,
            }
            return {
                ...state, data: state.data.map(item => item.id === action.id ? changedItem : item)
            }

        case INITIALIZE:
            return {
                ...state, data: [...action.data],
            }
        case IS_COMPLETE:
            const completedCase ={
                id: action.id,
                itemValue: action.itemValue,
                isComplete: action.isComplete
            }

            return { 
                ...state, data: state.data.map(item => item.id === action.id ? completedCase : item)
            }


        default:
            return state
    }
}

export const addItemAC = (data) => ({ type: ADD_ITEM, data })
export const deleteItemAC = (id) => ({ type: DELETE_ITEM, id })
export const changeItemAC = (id, itemValue) => ({ type: CHANGE_ITEM, id, itemValue })
export const initializeAC = (data) => ({type: INITIALIZE, data})
export const isCompleteAC = (id, itemValue, isComplete) => ({type: IS_COMPLETE, id, itemValue, isComplete});


export default ReducerForm;