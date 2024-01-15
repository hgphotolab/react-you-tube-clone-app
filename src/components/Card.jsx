import React from 'react';
import styled from 'styled-components';
import Profile from "./../img/Channel.jpg"
import { Link } from 'react-router-dom';


const Container = styled.div`
width: 360px;
margin-bottom: 25px;
cursor: pointer;
`;
const Image = styled.img`
width: 100%;
height: 202px;
background-color: #999;
border-radius: 10px;
&:hover {
    border-radius: 0;
  }
`;
const Texts = styled.div``;

const Title = styled.h1`
font-size: 16px;
font-weight: 500;
color: ${({theme})=>theme.text};
`;
const Details = styled.div`
display: flex;
margin-top: 16px;
gap: 12px;
`;
const ChannelName = styled.h2`
font-size: 14px;
color: ${({theme})=>theme.textSoft};
margin: 10px 0px;
`;
const Info = styled.div`
font-size: 14px;
color: ${({theme})=>theme.textSoft};`;

const ChannelImage = styled.img`
width: 36px;
height: 36px;
border-radius : 50%;
background-color: #999;
`;

const Card = () => {
  return (
    <Link to="video/test" style={{textDecoration: "none"}}>
    <Container>
      <Image src='https://img-cdn.thepublive.com/fit-in/1280x960/filters:format(webp)/ptc-news/media/media_files/HNgmP0ywpJZUL6W0Ke1B.jpg'/>
      <Details>
        <ChannelImage src={Profile} />
        <Texts>
          <Title></Title>
          <ChannelName>HG Tube</ChannelName>
          <Info>980,809 views . 7 Days ago</Info>
        </Texts>
      </Details>
    </Container>
    </Link>
  )
}

export default Card