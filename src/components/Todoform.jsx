import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, todoId } from "../redux/modules/Todo";
import { StBtn } from "../style/styled-components";
import styled from "styled-components";

//styled/////////////
const StInputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const StFormLabel = styled.label`
  font-size: 16px;
  font-weight: 700;
  color: white;
`;

const StAddForm = styled.form`
  background-color: #474242;
  border-radius: 12px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  gap: 20px;
`;

const StAddInput = styled.input`
  height: 40px;
  width: 240px;
  border: none;
  border-radius: 12px;
  padding: 0 12px;
`;

////////////////////////////////

const Form = () => {
  const dispatch = useDispatch();
  const num = useSelector((state) => state.todos.num);

  const [todo, setTodo] = useState({
    id: 0,
    title: "",
    body: "",
    date: "",
    isDone: false,
  });

  const today = new Date();

  const dateString = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    second: "numeric",
  });

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
    dispatch(addTodo({ ...todo, id: num, date: dateString }));
    dispatch(todoId(1));
    setTodo({
      id: 0,
      title: "",
      body: "",
      date: "",
      isDone: false,
    });
    console.log(num);
  };

  return (
    <StAddForm onSubmit={onSubmitHandler}>
      <StInputGroup>
        <StFormLabel>제목</StFormLabel>
        <StAddInput
          type="text"
          name="title"
          className="textInput"
          onChange={onChangeHandler}
          value={todo.title}
        />
        <StFormLabel>내용</StFormLabel>
        <StAddInput
          type="text"
          name="body"
          className="textInput"
          onChange={onChangeHandler}
          value={todo.body}
        />
      </StInputGroup>
      <StBtn>추가하기</StBtn>
    </StAddForm>
  );
};

export default Form;
