const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_USER": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default reducer;
