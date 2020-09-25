const initialStore = {
  rotating: true,
};

function reducer(state = initialStore, action) {
  switch (action.type) {
    case "START":
      return { ...state, rotating: true };

    case "STOP":
      return { ...state, rotating: false };

    default:
      return state;
  }
}

export default reducer;
