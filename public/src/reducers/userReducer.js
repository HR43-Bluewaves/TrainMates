const initialState = { user: {} };

const userReducer = (state = initialState, action) => {
  if (action.type === 'user') {
    return {
      user: action.user,
    };
  }
  return state;
};

export default userReducer;
