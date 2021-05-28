const initialState = { classes: [] };

const upcomingReducer = (state = initialState, action) => {
  if (action.type === 'upcoming') {
    return {
      classes: action.classes,
    };
  }
  return state;
};

export default upcomingReducer;
