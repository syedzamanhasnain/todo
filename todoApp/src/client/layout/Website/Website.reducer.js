const websiteReducer = (state = {
    initalData: [],
}, action) => {
    switch (action.type) {
        case 'GET_INTIAL_DATA':
            state = {
                ...state,
                initalData: action.payload
            }
        break;
    }

    return state;
}

export default websiteReducer;