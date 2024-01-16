import React from 'react'
import styled from 'styled-components';

import LockOpenIcon from '@mui/icons-material/LockOpen';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Container = styled.div`
position: sticky;
top: 0;
background-color: ${({theme})=>theme.bgLighter};
height: 56px;`;


const Warapper = styled.div`
display: flex;
align-items: center;
height: 100%;
padding: 0px 20px;
justify-content: flex-end;
position: relative;

`;

const Search = styled.div`
width: 40%;
position: absolute;
left: 0px;
right: 0px;
margin: auto;
display: flex;
align-items: center;
justify-content: space-between;
padding: 5px;
border: 1px solid #ccc;
border-radius: 20px;
`;

const Input = styled.input`
border: none;
background-color: transparent;
width: 100%;
outline: none;
color : ${({theme})=>theme.text};
`;

const Button = styled.button`
padding: 5px 15px;
background-color: transparent;
border: 1px solid #3ea6ff;
color : #3ea6ff;
border-radius: 3px;
font-weight: 500;
cursor: pointer;
display: flex;
gap: 5px;
align-items: center;
`;

const Navbar = () => {
  return (
    <Container>
      <Warapper>
        <Search>
          <Input placeholder='Search'/>
          <SearchOutlinedIcon/>
        </Search>
        <Button><LockOpenIcon/>SIGN IN</Button>
      </Warapper>
    </Container>
  )
}

export default Navbar