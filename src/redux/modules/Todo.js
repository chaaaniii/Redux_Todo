//action value
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const CHANGE_STATUSE = "CHANGE_STATUSE";

//action creator

export const addTodo = (payload) => ({
  type: ADD_TODO,
  payload,
});

export const deleteTodo = (payload) => ({
  type: DELETE_TODO,
  payload,
});

export const changeStatus = (payload) => ({
  type: CHANGE_STATUSE,
  payload,
});

//initialState
const initialState = {
  todos: [
    {
      id: 1,
      title: "React",
      body: "Study",
      isDone: false,
    },
  ],
};

//reducer
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case CHANGE_STATUSE:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return { ...todo, isDone: !todo.isDone };
          } else {
            return { ...todo };
          }
        }),
      };
    default:
      return state;
  }
};

export default todos;
