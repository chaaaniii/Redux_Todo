import React from "react";
import styled from "styled-components";

const HdContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  height: 50px;

  margin: 10px 20px;
  font-size: 20px;
  font-weight: 1000;
  line-height: 24px;

  padding: 10px 30px;
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
