import { createStore } from 'redux';
//funcion recutora, recibe estado y action. 
//cada una de estas funciones puede estar en reducers
const reducer = (state, action) => {
    console.log(action) //action trare el tipo y el producto.
    if (action.type === 'ADD_TO_CART') {
        return {
            ...state, //copia todas las llaves del estado actual
            cart: state.cart.concat(action.product) // péro solo modificamos el objeto cart
                //el nuevo producto esta dentro del action.
        }
    }
    if (action.type === 'REMOVE_TO_CART') {
        return {
            ...state,
            cart: state.cart.filter(product => product.id !== action.product.id)
        }
    }
    console.log(state.cart) //trae el estado actual.
    return state;
};
export default createStore(reducer, { cart: [] });
//recibe funcion reductora y estado inicial