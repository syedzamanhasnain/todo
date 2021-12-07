const initialState = {
  someData: {},
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_SOME_DATA':
      state = { ...state, someData: action.payload };
      break;
  }

  return state;
};

export default homeReducer;
