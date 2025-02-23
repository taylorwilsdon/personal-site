import { Container, Divider, Typography } from '@mui/material';
import { styled } from '@mui/system';

import { REPOS } from '../config/repositories';

import Icons from './Icons';
import { OpenSource, PageHeader } from './OpenSource';

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
        <Container maxWidth="lg" sx={{ py: 2 }}>
          <PageHeader />
          <OpenSource repos={projects} showHeader={false} />
          <Divider sx={{ my: 2 }} />
          <Typography variant="h5" sx={{ mb: 1 }}>Tools</Typography>
          <OpenSource repos={tools} showHeader={false} />
        </Container>
        <Icons />
      </MainSection>
    </MainContainer>
  );
};

export default OpenSourcePage;
