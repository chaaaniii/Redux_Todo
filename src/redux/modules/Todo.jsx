//action value
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const CHANGE_STATUSE = "CHANGE_STATUSE";
const TODO_ID = "TODO_ID";

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

export const todoId = (payload) => ({
  type: TODO_ID,
  payload,
});

//initialState
const initialState = {
  todos: [
    {
      id: 1,
      title: "Todo Sample",
      body: "Working",
      date: "xxxx년 xx월 xx일",
      isDone: false,
    },
    {
      id: 2,
      title: "Todo Sample",
      body: "Done",
      date: "xxxx년 xx월 xx일",
      isDone: true,
    },
  ],
  num: 3,
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
    case TODO_ID:
      return {
        ...state,
        num: state.num + action.payload,
      };
    default:
      return state;
  }
};

export default todos;
