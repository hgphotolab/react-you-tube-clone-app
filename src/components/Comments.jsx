import React from 'react';
import styled from "styled-components";
import ProfileImg from "./../img/Channel.jpg";
import Comment from './Comment';


const Container = styled.div``;

const NewComment = styled.div`
display: flex;
align-items: center;
gap: 10px;
`;

const Avatar = styled.img`
width: 50px;
height: 50px;
border-radius: 50%`;

const Input = styled.input`
border: none;
border-bottom : 1px solid ${({theme})=>theme.textSoft};
outline: none;
width: 100%;
background-color: transparent;
padding: 5px;
color: ${({theme})=>theme.text};
`;


const Comments = () => {
  return (
    <Container>
      <NewComment>
        <Avatar src={ProfileImg}/>
        <Input placeholder='Add a comment...'/>
      </NewComment>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
    </Container>
)
}

export default Comments