import products from '../products';

import { ADD_TO_CART,REMOVE_ITEM,ADD_QUANTITY,SUB_QUANTITY } from '../actions/action-types/cart-actions';

const initState = {
    items: products,
    addedItems: [],
    total: 0
}

const cartReducer = (state = initState, action) => {
    
    if(action.type === ADD_TO_CART) {
        const addedItem = state.items.find(item => item.No === action.id);
        const alreadyAddedItem = state.addedItems.find(item => action.id === item.No);
        if(alreadyAddedItem) {
            addedItem.quantity +=1;
            return  {
                ...state,
                total: state.total + addedItem.price*1
            }
        } else {
            addedItem.quantity = 1;
            const newTotal = state.total + addedItem.price*1;

            return {
                ...state,
                addedItems: [...state.addedItems,addedItem],
                total: newTotal
            }
        }
    } 

    if(action.type === REMOVE_ITEM) {
        const itemToRemove = state.addedItems.find(item => action.id === item.No);
        const new_items = state.addedItems.filter(item => action.id !== item.No);
        const newTotal = state.total - (itemToRemove.price * itemToRemove.quantity );
        
        return {
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }

    if(action.type === ADD_QUANTITY) {
        const addedItem = state.items.find(item => item.No === action.id);
        addedItem.quantity += 1;
        const newTotal = state.total + Number(addedItem.price);
          
        return{
            ...state,
            total: newTotal
        }
    }

    if(action.type === SUB_QUANTITY) {  
        const addedItem = state.items.find(item => item.No === action.id); 
        
        if(addedItem.quantity === 1) {
            const new_items = state.addedItems.filter(item => item.No !== action.id);
            const newTotal = state.total - addedItem.price;
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            const newTotal = state.total - addedItem.price;
            return{
                ...state,
                total: newTotal
            }
        }
        
    }
        
    return state;
        
}

export default cartReducer;