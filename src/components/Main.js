import { styled } from '@mui/system';
import React from 'react'

import GitHubActivityLog from './Github';
import Header from './Header';
import Icons from './Icons';
import Photography from './Photography';

const MainContainer = styled('div')(({ theme }) => ({
  maxWidth: '100%',
  overflowX: 'hidden',
  [theme.breakpoints.down('sm')]: {
    padding: '0 16px',
  },
}));

const MainSection = styled('section')(({ theme }) => ({
  maxWidth: '1200px',
  margin: '0 auto',
  [theme.breakpoints.down('sm')]: {
    maxWidth: '100%',
    padding: '0 8px',
  },
}));

const Main = (props) => (
  <MainContainer>
    <MainSection id="main">
      <Header />
      <GitHubActivityLog username="taylorwilsdon" />
      <br />
      <Photography />
      <br />
      <Icons />
    </MainSection>
  </MainContainer>
)

export default Main;
