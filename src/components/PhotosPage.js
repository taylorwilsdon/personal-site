import { Box, Typography } from '@mui/material';
import { useEffect } from 'react';

import Icons from './Icons';
import { MainContainer, MainSection } from './Layout';

const PhotosPage = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://embedsocial.com/cdn/ht.js";
    script.id = "EmbedSocialHashtagScript";

    if (!document.getElementById("EmbedSocialHashtagScript")) {
      document.getElementsByTagName("head")[0].appendChild(script);
    }
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
          <div className="embedsocial-hashtag" data-ref="54f39887067a11839f605a1303f8235483dedd49">
            <a
              className="feed-powered-by-es feed-powered-by-es-feed-img es-widget-branding"
              href="https://embedsocial.com/social-media-aggregator/"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram widget"
            >
              <img src="https://embedsocial.com/cdn/icon/embedsocial-logo.webp" alt="EmbedSocial" />
              <div className="es-widget-branding-text">Instagram widget</div>
            </a>
          </div>
        </Box>
        <Icons />
      </MainSection>
    </MainContainer>
  );
};

export default PhotosPage;
