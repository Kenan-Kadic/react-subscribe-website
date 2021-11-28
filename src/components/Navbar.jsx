import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";



const Container = styled.div`
  height: 50px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.h1`
  font-weight: bold;
  text-decoration: underline #b3d9ff;
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const MenuItem = styled.li`
  margin-right: 30px;
  font-size: 20px;
  font-weight: bold;
  color: gray;
`;

const Button = styled.button`
  border: 2px solid white;
  padding: 10px 15px;
  background-color: #0000ff;
  color: white;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
`;

const Navbar = () => {
    return (
      <Container>
        <Wrapper>
          <Left>
            <Logo>Developer</Logo>
            <Menu>
              <MenuItem><Link to="/intro">Home</Link></MenuItem>
              <MenuItem><Link to="/feature">Features</Link></MenuItem>
              <MenuItem><Link to="/service">Services</Link></MenuItem>
              <MenuItem><Link to="/price">Price</Link></MenuItem>
              <MenuItem><Link to="/contact">Contact</Link></MenuItem>
            </Menu>
          </Left>
          <Button>JOIN NOW</Button>
        </Wrapper>
      </Container>
    );
  };

export default Navbar
