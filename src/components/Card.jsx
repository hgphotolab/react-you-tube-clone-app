import React from 'react';
import styled from 'styled-components';
import Profile from "./../img/Channel.jpg"
import { Link } from 'react-router-dom';


const Container = styled.div`
width: ${(props) => props.type !== "sm" && "360px"};
margin-bottom: ${(props)=>props.type === "sm" ? "10px" : "25px"};
cursor: pointer;
display: ${(props)=>props.type === "sm" && "flex"};
height: ${(props) => (props.type === "sm" ? "80px" : "none")};
gap: ${(props) => props.type === "sm" ? "5px": "none"}
`;
const Image = styled.img`
width: 100%;
height: ${(props) => (props.type === "sm" ? "80px" : "202px")};
background-color: #999;
border-radius: 10px;
flex : 1;
&:hover {
    border-radius: 0;
  }
`;
const Texts = styled.div``;

const Title = styled.h1`
margin-top: 3px;
font-size: ${(props) => (props.type === "sm" ? "14px" : "16px")};;
font-weight: 500;
color: ${({theme})=>theme.text};
overflow: hidden;
`;
const Details = styled.div`
display: flex;
margin-top: ${(props) => props.type !== "sm" && "16px"};
gap: 5px;
flex : 1;
`;
const ChannelName = styled.h2`
font-size: 14px;
color: ${({theme})=>theme.textSoft};
margin: 10px 0px;
`;
const Info = styled.div`
font-size: ${(props) => props.type === "sm" ? "10px": "16px"};
color: ${({theme})=>theme.textSoft};`;

const ChannelImage = styled.img`
margin-top: 15px;
width: 36px;
height: 36px;
border-radius : 50%;
background-color: #999;
display: ${(props) => props.type === "sm" && "none"};
`;

const Card = ({type}) => {
  return (
    <Link to="video/test" style={{textDecoration: "none"}}>
    <Container type={type}>
      <Image type={type} src='https://img-cdn.thepublive.com/fit-in/1280x960/filters:format(webp)/ptc-news/media/media_files/HNgmP0ywpJZUL6W0Ke1B.jpg'/>
      <Details type={type}>
        <ChannelImage type={type} src={Profile} />
        <Texts >
          <Title type={type}>Boycott Maldives LIVE Updates </Title>
          <ChannelName>HG Tube</ChannelName>
          <Info type={type}>980,809 views . 7 Days ago</Info>
        </Texts>
      </Details>
    </Container>
    </Link>
  )
}

export default Card