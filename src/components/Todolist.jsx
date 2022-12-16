import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, changeStatus } from "../redux/modules/Todo";
import { Link } from "react-router-dom";
import { StBtn } from "../style/styled-components";
import styled from "styled-components";

//styled//////////////////////////////////////////////////
const StListContainer = styled.div`
  padding: 0 24px;
`;

const StListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const StTodoContainer = styled.div`
  width: 270px;
  border: 4px solid black;
  min-height: 150px;
  border-radius: 12px;
  padding: 12px 24px 24px 24px;
`;

const StLink = styled(Link)`
  text-decoration: none;
`;

const StTodoContentsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StDialogFooter = styled.footer`
  display: flex;
  justify-content: end;
  padding: 12px;
  gap: 12px;

  margin-top: 15px;
  margin-bottom: -15px;
`;
///////////////////////////////////////////////////////////////

const ToDolist = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  const onDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const onChangeStatus = (id) => {
    dispatch(changeStatus(id));
  };

  return (
    <StListContainer>
      <h2>Working.. 🔥</h2>
      <StListWrapper>
        {todos.map((todo) => {
          if (!todo.isDone) {
            return (
              <StTodoContainer key={todo.id}>
                <StTodoContentsHeader>
                  <StLink to={`/${todo.id}`} key={todo.id}>
                    <div>상세보기</div>
                  </StLink>
                  <div>{todo.date}</div>
                </StTodoContentsHeader>
                <div>
                  <h2 className="todo-title">{todo.title}</h2>
                  <div>{todo.body}</div>
                </div>
                <StDialogFooter>
                  <StBtn
                    borderColor="red"
                    onClick={() => onDeleteTodo(todo.id)}
                  >
                    삭제하기
                  </StBtn>
                  <StBtn
                    borderColor="green"
                    onClick={() => onChangeStatus(todo.id)}
                  >
                    {todo.isDone ? "취소!" : "완료!"}
                  </StBtn>
                </StDialogFooter>
              </StTodoContainer>
            );
          } else {
            return null;
          }
        })}
      </StListWrapper>
      <h2 className="list-title">Done..! 🎉</h2>
      <StListWrapper>
        {todos.map((todo) => {
          if (todo.isDone) {
            return (
              <StTodoContainer key={todo.id}>
                <StTodoContentsHeader>
                  <StLink to={`/${todo.id}`} key={todo.id}>
                    <div>상세보기</div>
                  </StLink>
                  <div>{todo.date}</div>
                </StTodoContentsHeader>
                <div>
                  <h2 className="todo-title">{todo.title}</h2>
                  <div>{todo.body}</div>
                </div>
                <StDialogFooter>
                  <StBtn
                    borderColor="red"
                    onClick={() => onDeleteTodo(todo.id)}
                  >
                    삭제하기
                  </StBtn>
                  <StBtn
                    borderColor="green"
                    onClick={() => onChangeStatus(todo.id)}
                  >
                    {todo.isDone ? "취소!" : "완료!"}
                  </StBtn>
                </StDialogFooter>
              </StTodoContainer>
            );
          } else {
            return null;
          }
        })}
      </StListWrapper>
    </StListContainer>
  );
};

export default ToDolist;
