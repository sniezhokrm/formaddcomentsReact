import React, {Component} from 'react';
import styled from 'styled-components';
import './app-header.css';

const Header = styled.div`
display: flex;
align-items: flex-end;
justify-content: space-between;
h1 {
  font-size: 26px;
  :hover {
    color: ${props => props.colored ? "red" : "black" }
  }
h2 {
  font-size: 1.2rem;
  color: grey;
}
}
`
const AppHeader = ({postsNum, likeNum}) => {
return (
    <Header colored>
      <h1>Roman Sniezhok</h1>
      <h2 >{postsNum} notes from them likes {likeNum}</h2>
    </Header>
  )
}
export default AppHeader;
