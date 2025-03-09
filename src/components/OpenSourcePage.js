import { Container, Divider, Typography } from '@mui/material';

import { REPOS } from '../config/repositories';

import Icons from './Icons';
import { MainContainer, MainSection } from './Layout';
import { OpenSource, PageHeader } from './OpenSource';

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
