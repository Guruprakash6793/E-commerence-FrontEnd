import {
    FETCH_PRODUCTS,
    ORDER_PRODUCTS_BY_PRICE,
    FILTER_PRODUCTS_BY_SIZE
} from '../types'

export const productReducer = (state ={}, action) =>{

    switch(action.type){
        case FILTER_PRODUCTS_BY_SIZE:
            return{
                ...state,
                size: action.payload.size,
                filteredItems: action.payload.items

            };
        
        case ORDER_PRODUCTS_BY_PRICE:
            return{
                ...state,
                sort: action.payload.sort,
                filteredItems: action.payload.items
            }

        case FETCH_PRODUCTS:
            return {items: action.payload,filteredItems:action.payload}
        default:
            return state;
    }

};