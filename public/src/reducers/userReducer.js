const initialState = { user: 'Dennis', isTeacher: false };

const userReducer = (state = initialState, action) => {
  if (action.type === 'isTeacher') {
    return {
      ...initialState,
      isTeacher: action.teacher,
    };
  }
  return state;
};

export default userReducer;
