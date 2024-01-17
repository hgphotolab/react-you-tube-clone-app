import React from 'react';
import styled from "styled-components";
import ProfileCh from "./../img/Channel.jpg";
import Comments from '../components/Comments';
import Card from "./../components/Card";

import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
//import { Card } from '@mui/material';

const Container = styled.div`
display: flex;
gap: 25px;`;

const Content = styled.div`
flex: 5;
`;

const Recomendation = styled.div`
flex : 2;
`;

const Channel = styled.div`
display: flex;
justify-content: space-between;
`;

const ChannelInfo = styled.div`display: flex;
gap: 20px;
`;

const Image = styled.img`
width: 50px;
height: 50px;
border-radius: 50%
`; 

const ChannelDetail = styled.div`
display: flex;
flex-direction: column;
color: ${({theme})=>theme.text};
`;

const ChannelCounter = styled.span`
margin-top: 5px;
margin-bottom: 20px;
color : ${({theme})=>theme.textSoft};
font-size: 12px;
`;

const ChannelName = styled.span`
font-weight: 500;
`;

const Description = styled.p`
font-size: 14px;
`;

const Subscribe = styled.button`
background-color: #cc1a00;
font-weight: 500;
color: white;
border: none;
border-radius: 3px;
height: max-content;
padding: 10px 20px;
cursor: pointer;
`;


const VideoWrapper =styled.div`
//background-color: red;
border-radius: 40px;
:hover &{
  border-radius: 0px;
}
`;
const Hr= styled.hr`
margin: 15px 0px;
color : 0.5px solid ${({theme})=>theme.textSoft}`;

const Title =styled.h1`
font-size: 18px;
font-weight: 400;
margin-top: 12px;
margin-bottom: 10px;
color: ${({theme})=>theme.text};
`;

const Details =styled.div`
display: flex;
align-items: center;
justify-content: space-between;`;

const Info =styled.span`
color: ${({theme})=>theme.textSoft};
`;

const Buttons =styled.div`
display: flex;
gap: 20px;
color : ${({theme})=>theme.text}`;

const Button =styled.div`
display: flex;
gap: 5px;
align-items: center;
cursor: pointer;`;



const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
        <iframe 
        width="853" 
        height="480" 
        src="https://www.youtube.com/embed/ksmJq_SZUwY" 
        title="India Maldives Row : भारत-मालदीव विवाद की पीछे कौन? China या Pakistan? Lakshadweep | PM Modi | N18V" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen>
        </iframe>

        </VideoWrapper>
        <Title>Boycott Maldives LIVE Updates : मुइज्जू की पत्नी निकली आतंकी की बहन? | India | PM Modi | Muizzu News</Title>

        <Details>
        <Info>980,809 views . 7 Days ago</Info>
        <Buttons>
          <Button>
            <ThumbUpAltOutlinedIcon/>
              6k
          </Button>
          <Button>
            <ThumbDownOffAltOutlinedIcon/>
              Dislike
          </Button>
          <Button>
          <ReplyOutlinedIcon/>
              Share
          </Button>
          <Button>
          <AddTaskOutlinedIcon/>
              Save
          </Button>
        </Buttons>
        </Details>
        <Hr/>
        <Channel>
        <ChannelInfo>
        <Image src={ProfileCh}/>
        <ChannelDetail>
        <ChannelName>HG Tube</ChannelName>
        <ChannelCounter>454k Subscribers </ChannelCounter>
        <Description>HG Tube combines science and engineering to create amazing DIY projects that will blow your mind.</Description>
        </ChannelDetail>
        </ChannelInfo>
        <Subscribe>SUBSCRIBE</Subscribe>
        </Channel>
        <Hr/>
        <Comments/>
      </Content>
      <Recomendation>
        <Card type = "sm"/>
        <Card type = "sm"/>
        <Card type = "sm"/>
        <Card type = "sm"/>
        <Card type = "sm"/>
        <Card type = "sm"/>
        <Card type = "sm"/>
        <Card type = "sm"/>
        <Card type = "sm"/>
        <Card type = "sm"/>
        <Card type = "sm"/>
        <Card type = "sm"/>
        <Card type = "sm"/>
        <Card type = "sm"/>
        <Card type = "sm"/>
        <Card type = "sm"/>
        <Card type = "sm"/>
        <Card type = "sm"/>
        <Card type = "sm"/>
      </Recomendation>
    </Container>
  )
}

export default Video