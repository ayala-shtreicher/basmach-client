export default (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'GET_ORDERS':
            state = payload;
            break;
        case 'DELETE_ORDERS':
            state = state.filter(item => { item.id != payload })
            break;
        case 'ADD_ORDER':
            state = [...state, payload];
            break;
        case 'EDIT_ORDER':
            state = state.map(item => (item.id === payload.id ? { ...item, ...payload.updateOrder } : item));
            break;
        default:
            break;
    }
    return state;
}
