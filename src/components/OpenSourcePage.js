import { styled } from '@mui/system';

import Icons from './Icons';
import OpenSource from './OpenSource';

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
    padding: '0 8px',
    boxSizing: 'border-box',
  },
}));

const OpenSourcePage = () => (
  <MainContainer>
    <MainSection id="main">
      <OpenSource />
      <br />
      <Icons />
    </MainSection>
  </MainContainer>
);

export default OpenSourcePage;
