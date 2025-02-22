import { styled } from '@mui/system';

import { REPOS } from '../config/repositories';
import { Divider, Typography } from '@mui/material';

import Icons from './Icons';
import OpenSource from './OpenSource';
import { REPOS } from '../config/repositories';

const MainContainer = styled('div')(({ theme }) => ({
  maxWidth: '100vw',
  overflowX: 'hidden',
  [theme.breakpoints.down('sm')]: {
    padding: '0 16px',
    width: '100vw',
    boxSizing: 'border-box',
  },
}));

const MainSection = styled('section')(({ theme }) => ({
  margin: '0 auto',
  [theme.breakpoints.down('sm')]: {
    maxWidth: '100%',
    width: '100%',
    padding: '0',
    boxSizing: 'border-box',
  },
}));

const OpenSourcePage = () => {
  const projects = REPOS.filter(repo => repo.type === 'project' || !repo.type);
  const tools = REPOS.filter(repo => repo.type === 'tool');

  return (
    <MainContainer>
      <MainSection id="main">
        <Typography variant="h5" sx={{ mb: 3 }}>Projects</Typography>
        <OpenSource repos={projects} />
        <Divider sx={{ my: 4 }} />
        <Typography variant="h5" sx={{ mb: 3 }}>Tools</Typography>
        <OpenSource repos={tools} />
        <Icons />
      </MainSection>
    </MainContainer>
  );
};

export default OpenSourcePage;
