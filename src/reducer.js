const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'STARTED_SEARCH':
      return { ...state, loading: true, search: action.search };
    case 'STARTED_SEARCH_FETCH':
        return { ...state, loading: true };
    case 'DONE_SEARCH_FETCH':
      console.log('done fetching?', action);
      return { ...state, result: action.fetched_result, loading: false }
    default:
      return state;
  }
};

export default reducer;
