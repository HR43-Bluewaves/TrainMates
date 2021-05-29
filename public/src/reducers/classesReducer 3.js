const initialState = { classes: [] };

const classesReducer = (state = initialState, action) => {
  if (action.type === 'classes') {
    return {
      classes: action.classes,
    };
  }
  return state;
};

export default classesReducer;
