const initialState = {
  todos: [
    { id: 1, name: 'Wake Up', status: 'pending' },
    { id: 2, name: 'Eat Breakfast', status: 'done' },
    { id: 3, name: 'Go to work', status: 'pending' },
    { id: 4, name: 'Code', status: 'pending' },
    { id: 5, name: 'Review Notes', status: 'pending' },
  ],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case 'DELETE_TASK':
      return {
        ...state,
        todos: [...action.payload],
      };

    case 'MARK_TASK_DONE':
      return {
        ...state,
        todos: [...action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
