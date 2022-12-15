import React from "react";
import styled from "styled-components";

const HdContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;

  margin: 10px 20px;
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;

  border: 2px solid black;
  padding: 10px;
`;

function Header() {
  return (
    <HdContainer>
      <div>My Todo List</div>
      <div>React</div>
    </HdContainer>
  );
}

export default Header;
