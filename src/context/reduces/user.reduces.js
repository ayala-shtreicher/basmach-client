export default (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'GET_USERS':
            state = payload
            break;
        case 'ADD_USER':
            state = [...state, payload];
            break;
        case 'EDIT_USER':
            state = state.map(item => (item.id === payload.id ? { ...item, ...payload.updateResort } : item));
            break;
        default:
            break;
    }
    return state;
}
