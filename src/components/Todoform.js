import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/modules/Todo";

const Form = () => {
  const dispatch = useDispatch();

  const [todo, setTodo] = useState({
    id: 0,
    title: "",
    body: "",
    isDone: false,
  });
  const [count, setCount] = useState(2);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (todo.title.trim() === "" || todo.body.trim() === "") {
      alert("제목과 내용을 입력해주세요.");
      return;
    }
    console.log(count);
    dispatch(addTodo({ ...todo, id: count }));
    setCount((count) => count + 1);
    setTodo({
      id: 0,
      title: "",
      body: "",
      isDone: false,
    });
    console.log(todo.id);
  };

  return (
    <form className="form" onSubmit={onSubmitHandler}>
      <div className="textArea">
        <label className="label">제목</label>
        <input
          type="text"
          name="title"
          className="textInput"
          onChange={onChangeHandler}
          value={todo.title}
        />
        <label className="label">내용</label>
        <input
          type="text"
          name="body"
          className="textInput"
          onChange={onChangeHandler}
          value={todo.body}
        />
      </div>
      <button>추가하기</button>
    </form>
  );
};

export default Form;
