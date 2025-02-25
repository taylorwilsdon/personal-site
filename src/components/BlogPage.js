import { Container } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';

import { Blog, PageHeader } from './Blog';
import Icons from './Icons';

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
  backgroundColor: 'white',
  boxShadow: '0 1px 2px 0 rgba(0,0,0,0.05)',
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    maxWidth: '100%',
    padding: '0',
    boxSizing: 'border-box',
  },
}));

const BlogPage = () => {
  return (
    <MainContainer>
      <MainSection id="main">
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