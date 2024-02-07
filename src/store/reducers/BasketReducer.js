const defaultState = {
    items: [],
    sumTotal: 0,
    countItems: 0
}
/* add*/
const ADD_ITEM = 'ADD_ITEM' 
const DELETE_ITEM = 'DELETE_ITEM'

export const basketReducer = (state = defaultState, action) => {
    switch(action.type){
        case ADD_ITEM:
            let findItemIndex = state.items.findIndex(el => el.id === action.payload.id);
            if (findItemIndex !== -1){
                return {...state, items: state.items.map(el => {
                    if (el.id ===  action.payload.id){
                        el.count += action.payload.count;
                    }
                    return el;
                })}
            } else {
                return {...state, items: [...state.items,  action.payload]};
            }
        case DELETE_ITEM:
            let findItemIndex1 = state.items.findIndex(el => el.id === action.payload.id);
            if(findItemIndex1 !== -1){
                return {...state, items: state.items.filter(el => el.id !== action.payload.id)}
            }
        default:
            return state;
    }
}




export const addItemAction = (payload) => ({type: ADD_ITEM, payload})
export const deleteItemAction = (payload) => ({type: DELETE_ITEM, payload})