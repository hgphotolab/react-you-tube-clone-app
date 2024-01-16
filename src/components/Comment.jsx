import React from 'react'
import styled from "styled-components";
import UserImg from "./../img/User.jpg";


const Container = styled.div`
display: flex;
gap: 10px;
margin: 20px 0px;
`;

const Avatar = styled.img`
width: 50px;
height: 50px;
border-radius: 50%;
`;

const Details =styled.div`
display: flex;
flex-direction: column;
gap: 10px;
color: ${({theme})=>theme.text};
`;
const Name =styled.span`
font-size: 13px;
font-weight: 500;
`;
const Date =styled.span`
font-size: 12px;
font-weight: 400;
color: ${({theme})=>theme.textSoft};
margin-left: 5px;
;
`;
const Text =styled.div`
font-size: 14px;`;






const Comment = () => {
  return (
    <Container>
      <Avatar src={UserImg}/>
      <Details>
        <Name>Vikash Kumar <Date>6 days ago</Date></Name>
        <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A totam odit quis quae, ipsam consequatur cupiditate laborum. Libero eius sequi repellat atque repellendus architecto iste molestias, voluptatibus dolor, unde voluptate!</Text>
      </Details>
    </Container>
  )
}

export default Comment