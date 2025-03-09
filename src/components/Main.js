import { Container } from '@mui/material';

import GitHubActivityLog from './Github';
import Header from './Header';
import Icons from './Icons';
import { MainContainer, MainSection } from './Layout';
// import Photography from './Photography';

const Main = () => (
  <MainContainer>
    <MainSection id="main">
      <Container maxWidth="lg" sx={{ py: 2 }}>
        <Header />
        <GitHubActivityLog username="taylorwilsdon" />
        {/* <Photography /> */}
      </Container>
      <Icons />
    </MainSection>
  </MainContainer>
);

export default Main;
