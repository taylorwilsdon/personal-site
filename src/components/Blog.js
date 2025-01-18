import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  styled
} from '@mui/material';
import * as React from "react";
import { useState, useEffect } from "react";

// Centralized articles data
const articles = [
  {
    href: "https://medium.com/@tbarrettwilsdon/multi-gig-for-the-masses-building-an-inexpensive-10gbe-network-for-the-home-cfe91740f186",
    image: require('../images/medium_card.png'),
    alt: "Multi-Gig for the Masses",
    title: "Multi-Gig for the Masses",
    subtitle: "Building an inexpensive 10GbE network",
    description: "Thoughts on design and component selection for a multi-gigabit LAN (2.5/5/10GbE) based on my experiences building my home network architecture"
  },
  {
    href: "https://www.conferencecast.tv/speaker-32221-taylor-barrett-wilsdon#.speakerPage-latest",
    image: require('../images/summit_card.png'),
    alt: "Atlassian Summit",
    subtitle: "Scaling Jira Server for the Enterprise via IaC",
    title: "Atlassian Summit - Jira & Ansible",
    description: "Speaking on behalf of Yelp at Atlassian Summit 2019 in Las Vegas, covering the technical architecture that allowed Yelp to smoothly administrate Jira at scale with Ansible"
  },
  {
    href: "https://medium.com/@tbarrettwilsdon/smart-zoned-nyc-steam-radiators-effectively-controlling-one-pipe-steam-heat-in-apartments-304a2ed2cd1b",
    image: require('../images/vent.png'),
    alt: "Smart Steam Heat",
    title: "Smart Zoned Steam Radiators",
    subtitle: "Modernizing control of one pipe steam heat",
    description: "A look into the misadventures and solutions as I implemented smart, individual zone control for my NYC apartment's cast iron one pipe steam radiators"
  },
  {
    href: "https://taylorwilsdon.medium.com/in-the-pursuit-of-a-more-refined-window-ac-installation-building-in-midea-u-shape-inverter-splits-9bd3b83b0351",
    image: require('../images/ac.jpg'),
    alt: "Air Conditioner",
    title: "In the pursuit of a more refined window AC installation",
    subtitle: "Building in Midea U-Shape Inverter Splits",
    description: "Building, insulating and finishing the closest thing to a true mini split for a clean, silent installation"
  },
  {
    href: "https://www.nytimes.com/interactive/2022/02/17/realestate/17hunt-wilsdon.html",
    image: require('../images/nyt_card.png'),
    alt: "NYT - The Hunt",
    subtitle: "The New York Times",
    title: "Real Estate > The Hunt",
    description: "Interview with Joyce Cohen of the New York Times for The Hunt, focused on our experience finding our New York City home"
  }
];

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
  maxWidth: 400,
  minHeight: 320,
});

const StyledCardMedia = styled(CardMedia)({
  height: 175,
  width: 320,
});

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
  whiteSpace: 'normal',
  overflowWrap: 'break-word'
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

// ArticleCard component
const ArticleCard = ({ article }) => (
  <StyledCard>
    <CardActionArea>
      <StyledLink href={article.href}>
        <StyledCardMedia
          component="img"
          image={article.image}
          alt={article.alt}
        />
        <CardContent>
          <StyledCardTitle>
            {article.title}
          </StyledCardTitle>
          <StyledSubtitle variant="subtitle2">
            {article.subtitle}
          </StyledSubtitle>
          <StyledDescription>
            {article.description}
          </StyledDescription>
        </CardContent>
      </StyledLink>
    </CardActionArea>
  </StyledCard>
);

const Blog = (props) => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    const loadMarkdown = async () => {
      try {
        const response = await fetch(require('../assets/markdown/steamheat.md'));
        const text = await response.text();
        setMarkdown(text);
      } catch (error) {
        console.error(`Error loading markdown: ${markdown} ${error}`);
      }
    };

    loadMarkdown();
  }, [markdown]);

  return (
    <div>
      <StyledGrid container spacing={2}>
        {articles.map((article, index) => (
          <Grid item xs={4} key={index}>
            <ArticleCard article={article} />
          </Grid>
        ))}
      </StyledGrid>
    </div>
  );
};

export default Blog;
