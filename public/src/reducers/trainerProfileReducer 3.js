const initialState = { trainer: {} };

const trainerProfileReducer = (state = initialState, action) => {
  if (action.type === 'profile') {
    return {
      profile: action.profile,
    };
  }
  return state;
};

export default trainerProfileReducer;
