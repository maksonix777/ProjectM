const defaultState= [ ]
    // items: [],
    // sumTotal: 0,
    // countItems: 0


const ADD_ITEM = 'ADD_ITEM' ;
const DELETE_ITEM = 'DELETE_ITEM';

export const basketReducer = (state = defaultState, action) => {
    switch(action.type){
        case ADD_ITEM:
            let findItemIndex = state.findIndex(el => el.id === action.payload.id);
            if (findItemIndex !== -1){
                return  [  ...state.map(el => {
                    if (el.id ===  action.payload.id){
                        el.count += action.payload.count;
                    } 
                    return el;
                })]
            } else {
                return [ ...state,  action.payload];
            }
        case DELETE_ITEM:
            let findItemIndex1 = state.findIndex(el => el.id === action.payload.id);
            if(findItemIndex1 !== -1){
                return [...state,  ...state.filter(el => el.id !== action.payload.id)]
            }
        default:
            return state;
    }
}




export const addItemAction = (payload) => ({type: ADD_ITEM, payload})
export const deleteItemAction = (payload) => ({type: DELETE_ITEM, payload})