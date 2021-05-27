const initialState = { reviews: [] };

const trainerReviewsReducer = (state = initialState, action) => {
  if (action.type === 'reviews') {
    return {
      reviews: action.reviews,
    };
  }
  return state;
};

export default trainerReviewsReducer;
