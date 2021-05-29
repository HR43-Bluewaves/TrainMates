const initialState = { class: {} };

const sessionReducer = (state = initialState, action) => {
  if (action.type === 'session') {
    return {
      session: action.session,
    };
  }
  return state;
};

export default sessionReducer;
