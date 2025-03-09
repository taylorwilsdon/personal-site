import { Container } from '@mui/material';
import React from 'react';

import { Blog, PageHeader } from './Blog';
import Icons from './Icons';
import { MainContainer, MainSection } from './Layout';

const BlogPage = () => {
  return (
    <MainContainer>
      <MainSection id="main" variant="blog">
        <Container maxWidth="lg" sx={{ py: 2 }}>
          <PageHeader />
          <Blog showHeader={false} />
        </Container>
        <Icons />
      </MainSection>
    </MainContainer>
  );
};

export default BlogPage;