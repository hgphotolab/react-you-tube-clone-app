import React from 'react';
import styled from 'styled-components';
import HGTube from "../img/logo.png";
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SportsMartialArtsIcon from '@mui/icons-material/SportsMartialArts';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import ArticleIcon from '@mui/icons-material/Article';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SettingsIcon from '@mui/icons-material/Settings';
import ReportIcon from '@mui/icons-material/Report';
import HelpIcon from '@mui/icons-material/Help';
import LightModeIcon from '@mui/icons-material/LightMode';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { Link } from 'react-router-dom';


const Container = styled.div`
flex: 1;
background-color: ${({theme})=>theme.bgLighter};
height: 100vh;
color: ${({theme})=>theme.text};
font-size : 14px;
position: sticky;
top : 0;
//border: 2px solid red; /* Add a border for visualization */
overflow-y: auto; /* Ensure the container is scrollable */
//z-index: 100; /* Set a high z-index value */
`;

const Wrapper = styled.div`
padding: 18px 26px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 25px;
`;

const Img = styled.img`
height: 25px`;

const Items = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  padding: 7.5px 0px;
  
`;

const Hr = styled.hr`
margin : 15px 0px;
border : 0.5px solid ${({theme})=>theme.soft}`;

const Login = styled.div``;

const Button = styled.button`
padding: 5px 15px;
background-color: transparent;
border: 1px solid #3ea6ff;
color : #3ea6ff;
border-radius: 3px;
font-weight: 500;
margin-top : 10px;
cursor: pointer;
display: flex;
gap: 5px;
align-items: center;
`;

const Title = styled.div`
font-size: 12px;
font-weight: 500;
color: #aaaaaa;
margin-bottom: 20px;
`;

const Menu = ({darkMode, setDarkMode}) => {
  return (
    <Container>
      <Wrapper>
      <Link to="/" style={{textDecoration: "none", color :'inherit'}}>
        <Logo>
        <Img src={HGTube}/>
        HG Tube
        </Logo>
        </Link>
        <Items>
        <HomeIcon/>
        Home
        </Items>
        <Items>
        <ExploreIcon/>
        Explore
        </Items>
        <Items>
        <SubscriptionsIcon/>
        Subscription
        </Items>
        <Hr/>
        <Items>
        <VideoLibraryIcon/>
        Library
        </Items>
        <Items>
        <HistoryIcon/>
        History
        </Items>

        <Hr/>
        <Login>
        Sign In to like videos, comment and subscribe.
        <Button><LockOpenIcon/>SIGN IN</Button>
        </Login>
        <Hr/>
        <Title>LATEST VIDEOS</Title>
        <Items>
        <LibraryMusicIcon/>
        Music
        </Items>
        <Items>
        <SportsMartialArtsIcon/>
        Sports
        </Items>
        <Items>
        <SportsEsportsIcon/>
        Gaming
        </Items>
        <Items>
        <ArticleIcon/>
        News
        </Items>
        <Items>
        <LiveTvIcon/>
        Live
        </Items>

        <Hr/>

        <Items>
        <ReportIcon/>
        Report
        </Items>

        <Items>
        <SettingsIcon/>
        Settings
        </Items>

        <Items>
        <HelpIcon/>
        Help
        </Items>
        <Items onClick={()=> setDarkMode(!darkMode)}>
        <LightModeIcon/>
        {darkMode? "Light" : "Dark"} Mode
        </Items>
      </Wrapper>
    </Container>
  )
}

export default Menu