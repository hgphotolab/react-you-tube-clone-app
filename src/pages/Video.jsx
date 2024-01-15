import React from 'react';
import styled from "styled-components";

import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';

const Container = styled.div`
display: flex;
gap: 25px;`;

const Content = styled.div`
flex: 5;
`;

const Recomendation = styled.div`
flex : 2;
`;

const VideoWrapper =styled.div`

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
        src="https://www.youtube.com/embed/FK93HOgub-k" 
        title="Boycott Maldives LIVE Updates : मुइज्जू की पत्नी निकली आतंकी की बहन? | India | PM Modi | Muizzu News" 
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
      </Content>
      <Recomendation>Recomendations</Recomendation>
    </Container>
  )
}

export default Video