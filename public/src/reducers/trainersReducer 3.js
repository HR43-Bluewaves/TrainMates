const initialState = { trainers: [] };

const trainerReducer = (state = initialState, action) => {
  if (action.type === 'trainers') {
    return {
      trainers: action.trainers,
    };
  }
  return state;
};

export default trainerReducer;
