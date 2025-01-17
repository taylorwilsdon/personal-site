import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Typography,
  styled
} from '@mui/material';
import * as React from "react";
import { useState, useEffect } from "react";

import mediumCard from '../images/medium_card.png';
import nytCard from '../images/nyt_card.png';
import summitCard from '../images/summit_card.png';
import ventImage from '../images/vent.png';


import MarkdownRenderer from './MarkdownRenderer';


// Styled components
const StyledGrid = styled(Grid)(({ theme }) => ({
  maxWidth: '1000px',
  margin: '0 auto',
  padding: '0 10px',
  '& .MuiGrid-item': {
    paddingLeft: '16px',
    marginLeft: '0'
  }
}));

const StyledCard = styled(Card)({
  minWidth: 0,
  maxWidth: 320,
  minHeight: 320,
});

const StyledCardMedia = styled(CardMedia)({
  height: 175,
  width: 320,
});

const StyledMarkdownPaper = styled(Paper)(({ theme }) => ({
  marginTop: theme.spacing(4),
  padding: theme.spacing(3),
  backgroundColor: '#fff',
  boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
}));

const StyledLink = styled('a')({
  textDecoration: 'none',
  color: 'inherit',
  display: 'block',
});

const StyledCardTitle = styled(Typography)({
  fontSize: '1rem',
  fontWeight: 700,
  lineHeight: '1.4',
  marginBottom: '0.25rem',
  display: 'block',
  wordWrap: 'break-word',
  overflow: 'hidden'
});

const StyledSubtitle = styled(Typography)({
  fontSize: '0.875rem',
  marginBottom: '0.5rem',
  lineHeight: '1.4',
  display: 'block'
});

const StyledDescription = styled(Typography)({
  whiteSpace: 'pre-wrap',
  fontSize: '0.775rem',
  color: 'text.secondary',
  lineHeight: '1.4'
});

const Blog = (props) => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch(require('../assets/markdown/steamheat.md'))
      .then(response => response.text())
      .then(text => {
        setMarkdown(text);
      })
      .catch(error => console.error('Error loading markdown:', error));
  }, []);

  return (
    <div>
      <StyledGrid container spacing={2}>
        <Grid item xs={4}>
          <StyledCard>
            <CardActionArea>
              <StyledLink href="https://medium.com/@tbarrettwilsdon/multi-gig-for-the-masses-building-an-inexpensive-10gbe-network-for-the-home-cfe91740f186">
                <StyledCardMedia
                  component="img"
                  image={require('../images/medium_card.png')}
                  alt="Multi-Gig for the Masses"
                />
                <CardContent>
                  <StyledCardTitle>
                    Multi-Gig for the Masses
                  </StyledCardTitle>
                  <StyledSubtitle variant="subtitle2">
                    Building an inexpensive 10GbE network
                  </StyledSubtitle>
                  <StyledDescription>
                    Thoughts on design and component selection for a multi-gigabit LAN (2.5/5/10GbE) based on my experiences building my home network architecture
                  </StyledDescription>
                </CardContent>
              </StyledLink>
            </CardActionArea>
          </StyledCard>
        </Grid>

        <Grid item xs={4}>
          <StyledCard>
            <CardActionArea>
              <StyledLink href="https://www.conferencecast.tv/speaker-32221-taylor-barrett-wilsdon#.speakerPage-latest">
                <StyledCardMedia
                  component="img"
                  image={require('../images/summit_card.png')}
                  alt="Atlassian Summit"
                />
                <CardContent>
                <StyledCardTitle>
                Scaling Jira Server Administration<br/> for the Enterprise
                  </StyledCardTitle>
                  <Typography variant="subtitle2" component="div">
                  Atlassian Summit 2019 - Jira & Ansible
                  </Typography>
                  <StyledDescription>
                  Speaking on behalf of Yelp at Atlassain Summit 2019 in Las Vegas, covering the technical architecture that allowed Yelp to run Jira at scale
                  </StyledDescription>
                </CardContent>
              </StyledLink>
            </CardActionArea>
          </StyledCard>
        </Grid>

        <Grid item xs={4}>
          <StyledCard>
            <CardActionArea>
              <StyledLink href="https://medium.com/@tbarrettwilsdon/smart-zoned-nyc-steam-radiators-effectively-controlling-one-pipe-steam-heat-in-apartments-304a2ed2cd1b">
                <StyledCardMedia
                  component="img"
                  image={ventImage}
                  alt="Steam Heat"
                />
                <CardContent>
                  <StyledCardTitle>
                    Smart Zoned Steam Radiators
                  </StyledCardTitle>
                  <StyledSubtitle variant="subtitle2">
                    Modernizing control of one pipe steam heat
                  </StyledSubtitle>
                  <StyledDescription>
                    A look into the misadventures and solutions as I implemented smart, individual zone control for my NYC apartment's cast iron one pipe steam radiators
                  </StyledDescription>
                </CardContent>
              </StyledLink>
            </CardActionArea>
          </StyledCard>
        </Grid>

        <Grid item xs={4}>
          <StyledCard>
            <CardActionArea>
              <StyledLink href="https://www.nytimes.com/interactive/2022/02/17/realestate/17hunt-wilsdon.html">
                <StyledCardMedia
                  component="img"
                  image={require('../images/nyt_card.png')}
                  alt="NYT - The Hunt"
                />
                <CardContent>
                <StyledCardTitle>
                    The New York Times
                    </StyledCardTitle>
                    <Typography variant="subtitle2" component="div">
                    Real Estate | The Hunt
                  </Typography>
                  <StyledDescription>
                    Interview with Joyce Cohen of the New York Times for The Hunt,
                    focused on our experience finding our New York City
                    home
                  </StyledDescription>
                </CardContent>
              </StyledLink>
            </CardActionArea>
          </StyledCard>
        </Grid>

        {/* <Grid item xs={12}>
          <StyledMarkdownPaper elevation={1}>
            <MarkdownRenderer content={markdown} />
          </StyledMarkdownPaper>
        </Grid> */}
      </StyledGrid>
    </div>
  );
};

export default Blog;
