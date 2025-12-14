import { Box } from '@mui/material';
import React from 'react';

import { Blog, PageHeader } from './Blog';
import Icons from './Icons';
import { MainContainer, MainSection } from './Layout';

const BlogPage = () => {
  return (
    <MainContainer>
      <MainSection id="main">
        <Box sx={{ py: 2, width: '100%' }}>
          <PageHeader />
          <Blog showHeader={false} />
        </Box>
        <Icons />
      </MainSection>
    </MainContainer>
  );
};

export default BlogPage;
