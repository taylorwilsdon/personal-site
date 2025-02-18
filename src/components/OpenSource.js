import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import ChatIcon from '@mui/icons-material/Chat';
import CodeIcon from '@mui/icons-material/Code';
import ForkRightIcon from '@mui/icons-material/ForkRight';
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/Home';
import SecurityIcon from '@mui/icons-material/Security';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import TerminalIcon from '@mui/icons-material/Terminal';
import { 
  Card, 
  CardActionArea, 
  CardContent, 
  Typography, 
  Grid,
  Box,
  Chip,
  Container
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Octokit } from '@octokit/rest';
import React, { useState, useEffect } from 'react';

// Utilities
const formatNumber = (num) => {
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1)}m`;
  } else if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}k`;
  }
  return num.toString();
};

// Constants
const REPOS = [
  { name: 'reddacted', owner: 'taylorwilsdon', desc: 'clean up after yourself', Icon: SecurityIcon },
  { name: 'netbird', owner: 'netbirdio', desc: 'wireguard overlay networking', Icon: CodeIcon },
  { name: 'homebridge', owner: 'homebridge', desc: 'HomeKit support for the impatient', Icon: HomeIcon },
  { name: 'open-webui', owner: 'open-webui', desc: 'the gold standard for llm chat ui', Icon: ChatIcon },
  { name: 'ollama', owner: 'ollama', desc: 'llama.cpp wrapper for dead simple llm inference', Icon: TerminalIcon },
  { name: 'GAM', owner: 'GAM-team', desc: 'cli for google workspace superadmins & friends', Icon: AdminPanelSettingsIcon },
  { name: 'aider', owner: 'Aider-AI', desc: 'pragmatic, interactive ai dev assistant for us vim types', Icon: SmartToyIcon }
];

const GITHUB_COLORS = {
  text: {
    primary: '#24292e',
    secondary: '#586069'
  },
  border: '#e1e4e8',
  background: {
    card: '#ffffff',
    chip: '#f6f8fa'
  },
  hover: '#0366d6'
};

// Styled Components
const StyledCard = styled(Card)({
  position: 'relative',
  transition: 'all 0.2s ease',
  background: GITHUB_COLORS.background.card,
  border: `1px solid ${GITHUB_COLORS.border}`,
  borderRadius: '6px',
  height: '100%',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    '& .repo-name': {
      color: GITHUB_COLORS.hover,
    }
  }
});

const RepoStats = styled(Box)({
  display: 'flex',
  gap: '8px',
  marginTop: '4px'
});

const StatChip = styled(Chip)({
  background: GITHUB_COLORS.background.chip,
  border: `1px solid ${GITHUB_COLORS.border}`,
  borderRadius: '12px',
  color: GITHUB_COLORS.text.secondary,
  height: '20px',
  '& .MuiChip-icon': {
    color: GITHUB_COLORS.text.secondary,
    fontSize: '14px'
  },
  '& .MuiChip-label': {
    padding: '0 8px',
    fontSize: '0.75rem'
  }
});

// Components
const RepoCard = ({ repo, stats }) => {
  const { Icon } = repo;
  return (
    <StyledCard>
      <CardActionArea 
        href={`https://github.com/${repo.owner}/${repo.name}`}
        target="_blank" 
        rel="noopener noreferrer"
      >
        <CardContent sx={{ p: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
            <Icon sx={{ 
              color: GITHUB_COLORS.text.secondary,
              mr: 1,
              fontSize: '1.2rem'
            }} />
            <Typography 
              className="repo-name"
              sx={{ 
                color: GITHUB_COLORS.text.primary,
                fontSize: '1.1rem',
                fontWeight: 600,
              }}
            >
              {repo.name}
            </Typography>
          </Box>
        <Typography 
          sx={{ 
            color: GITHUB_COLORS.text.secondary,
            fontSize: '1rem',
            mb: 2,
            minHeight: '40px',
            lineHeight: 1.5
          }}
        >
          {repo.desc}
        </Typography>
        <RepoStats>
          {stats && (
            <>
              <StatChip
                icon={<StarOutlineIcon sx={{ fontSize: '14px' }} />}
                label={formatNumber(stats.stars)}
                size="small"
              />
              <StatChip
                icon={<ForkRightIcon sx={{ fontSize: '14px' }} />}
                label={formatNumber(stats.forks)}
                size="small"
              />
            </>
          )}
        </RepoStats>
      </CardContent>
    </CardActionArea>
  </StyledCard>
);
}
const PageHeader = () => (
  <Box sx={{ mb: 6 }}>
    <Typography 
      variant="h4" 
      sx={{ 
        color: GITHUB_COLORS.text.primary,
        fontWeight: 600,
        fontSize: '2rem',
        mb: 2
      }}
    >
      <GitHubIcon sx={{ mr: 1, verticalAlign: 'bottom', fontSize: '2rem' }} />
      Open Source Contributions
    </Typography>
    <Typography 
      variant="subtitle1" 
      sx={{ 
        color: GITHUB_COLORS.text.secondary,
        fontSize: '1.1rem'
      }}
    >
      Projects I believe in, support & contribute to
    </Typography>
  </Box>
);

// Main Component
const OpenSource = () => {
  const [repoStats, setRepoStats] = useState({});
  const octokit = new Octokit();

  useEffect(() => {
    const fetchRepoStats = async () => {
      const stats = {};
      for (const repo of REPOS) {
        try {
          const { data } = await octokit.rest.repos.get({ 
            owner: repo.owner, 
            repo: repo.name 
          });
          stats[`${repo.owner}/${repo.name}`] = {
            stars: data.stargazers_count,
            forks: data.forks_count
          };
        } catch (error) {
          console.error(`Error fetching stats for ${repo.owner}/${repo.name}:`, error);
        }
      }
      setRepoStats(stats);
    };

    fetchRepoStats();
  }, [octokit.rest.repos]);

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <PageHeader />
      <Grid container spacing={2}>
        {REPOS.map((repo) => (
          <Grid item xs={12} sm={6} md={6} key={`${repo.owner}/${repo.name}`}>
            <RepoCard 
              repo={repo} 
              stats={repoStats[`${repo.owner}/${repo.name}`]}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default OpenSource;
