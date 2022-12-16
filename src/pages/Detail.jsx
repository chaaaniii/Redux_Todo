import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { StBtn } from "../style/styled-components";

//styled///////////////////
const StContainer = styled.div`
  border: 2px solid #eee;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StDialog = styled.div`
  width: 600px;
  height: 400px;
  border: 1px solid #eee;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

const StDialogHeader = styled.div`
  display: flex;
  height: 80px;
  justify-content: space-between;
  padding: 0 24px;
  align-items: center;
`;

const StTitle = styled.h1`
  padding: 0 24px;
  font-size: 35px;
`;

const StBody = styled.main`
  padding: 0 24px;
  font-size: 20px;
`;

const StDate = styled.main`
  padding: 0 24px;
  position: absolute;
  bottom: 10px;
  right: 10px;
`;
///////////////////////////////////

function Detail() {
  const navigate = useNavigate();
  const param = useParams();
  const todos = useSelector((state) => state.todos.todos);

  // 밑에 주석을 달아줘야 == 를 사용할 시 경고가 안뜸.
  // eslint-disable-next-line eqeqeq
  const todo = todos.find((todo) => todo.id == param.id);

  return (
    <StContainer>
      <StDialog>
        <div>
          <StDialogHeader>
            <div>ID : {todo.id}</div>
            <StBtn onClick={() => navigate("/")}>이전으로</StBtn>
          </StDialogHeader>
          <StTitle>{todo.title}</StTitle>
          <StBody>{todo.body}</StBody>
          <StDate>{todo.date}</StDate>
        </div>
      </StDialog>
    </StContainer>
  );
}

export default Detail;
