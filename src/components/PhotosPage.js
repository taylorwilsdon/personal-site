import { Box, Typography } from '@mui/material';
import { useEffect } from 'react';

import Icons from './Icons';
import { MainContainer, MainSection } from './Layout';

const PhotosPage = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://w.behold.so/widget.js';
    document.head.appendChild(script);
    return () => script.remove();
  }, []);

  const COLORS = {
  bg: '#f7f7f4',
  bgSection: '#f3f2ef',
  bgCard: '#ecebe9',
  text: '#26251e',
  textMuted: '#6f6f6a',
  accent: '#f45a19',
  border: '#e8e7e4',
};

  return (
    <MainContainer>
      <MainSection id="main">
        <Box sx={{ py: 2, width: '100%' }}>
    <Typography variant="h4" sx={{ color: COLORS.text, fontWeight: 600, fontSize: "1.25rem", mb: 1, textTransform: "lowercase" }}>
      photography
    </Typography>
          <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary' }}>
          </Typography>
          <div className="behold-container">
            <behold-widget feed-id="OsPu9HK7wOXRciTt6WNz"></behold-widget>
          </div>
        </Box>
        <Icons />
      </MainSection>
    </MainContainer>
  );
};

export default PhotosPage;
