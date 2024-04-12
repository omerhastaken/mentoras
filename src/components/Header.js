import React from "react";
import styled from "styled-components";

const Header = (props) => {
  return (
    <Container>
      <Logo src="/images/2.svg" alt="logo"></Logo>
        <Login>Login</Login>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #330099;
`;

const Logo = styled.img`
  border-bottom: 5px;
  max-height: 75px;
`;

const Login = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  margin-top: 8px;
  padding: 8px 16px;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;
  cursor: pointer;
  max-height: 35px;
  margin-right: 25px;

  &:hover {
    background-color: gray;
    color: white;
    border-color: transparent;
  }
`;

export default Header;

