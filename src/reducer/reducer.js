const reducer = (state, action) => {
    let arr=state;
    switch (action.type) {
      case 'GET_CART_DATA':
        arr=JSON.parse(localStorage.getItem('cart-data'));
        return[
          ...arr
        ];

      case 'ADD_TO_CART':
        localStorage.setItem('cart-data', JSON.stringify([...state,action.payload]));
        return [
          ...state,action.payload
        ];


      case 'REMOVE_ITEM':
          arr = state.filter((_,index)=> index !== action.index); 
          localStorage.setItem('cart-data', JSON.stringify(arr));
          return [
            ...arr
          ];

      case 'UPDATE_TO_CART':
        arr[action.index].quantity=action.quantity;
        arr[action.index].price=action.price;
        localStorage.setItem('cart-data', JSON.stringify(arr));
       return [
        ...arr
      ];
      case 'CHECK_OUT':
        arr=[];
        localStorage.setItem('cart-data','[]');
        return [...arr]

      default:
        return state;
    }
}

export default reducer;
