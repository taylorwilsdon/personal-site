import { useState, useEffect } from 'react';
import { 
  Card, 
  CardActionArea, 
  CardContent, 
  Typography, 
  Grid,
  Box,
  Chip,
  Tooltip
} from '@mui/material';
import { styled } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import { Octokit } from 'octokit';

const octokit = new Octokit();

const ProjectCard = styled(Card)(({ theme }) => ({
  position: 'relative',
  transition: 'all 0.3s ease',
  background: '#0d1117',
  border: '1px solid #30363d',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 4px 20px rgba(0,0,0,0.25)',
    border: '1px solid #58a6ff',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    left: '-20px',
    top: '50%',
    width: '20px',
    height: '2px',
    background: '#30363d',
  }
}));

const BranchLine = styled(Box)({
  position: 'absolute',
  left: 0,
  top: 0,
  bottom: 0,
  width: '2px',
  background: '#30363d',
  '&::before': {
    content: '""',
    position: 'absolute',
    left: '-1px',
    top: '50%',
    width: '4px',
    height: '4px',
    borderRadius: '50%',
    background: '#58a6ff',
  }
});

const StatsChip = styled(Chip)({
  background: '#21262d',
  color: '#c9d1d9',
  margin: '0 4px',
  '.MuiSvgIcon-root': {
    color: '#8b949e',
  }
});

const OpenSource = () => {
  const [repoStats, setRepoStats] = useState({});

  useEffect(() => {
    const fetchRepoStats = async () => {
      const repos = [
        'taylorwilsdon/reddacted',
        'netbirdio/netbird',
        'homebridge/homebridge',
        'open-webui/open-webui',
        'ollama/ollama',
        'GAM-team/GAM',
        'Aider-AI/aider'
      ];

      const stats = {};
      for (const repo of repos) {
        try {
          const [owner, name] = repo.split('/');
          const { data } = await octokit.rest.repos.get({ owner, repo: name });
          stats[repo] = {
            stars: data.stargazers_count,
            forks: data.forks_count
          };
        } catch (error) {
          console.error(`Error fetching stats for ${repo}:`, error);
        }
      }
      setRepoStats(stats);
    };

    fetchRepoStats();
  }, []);

  return (
    <Box sx={{ 
      position: 'relative',
      color: '#c9d1d9',
      background: '#0d1117',
      padding: '2rem',
      borderRadius: '8px'
    }}>
      <BranchLine />
      <Typography variant="h4" sx={{ 
        color: '#58a6ff',
        marginBottom: '2rem',
        fontWeight: 600,
        fontSize: '1.5rem'
      }}>
        <GitHubIcon sx={{ marginRight: 1, verticalAlign: 'middle' }} />
        Open Source Contributions
      </Typography>
      <Typography variant="subtitle1" sx={{ 
        color: '#8b949e',
        marginBottom: '2rem'
      }}>
        Projects I believe in, support & contribute to
      </Typography>
      <Grid container spacing={3} sx={{ position: 'relative' }}>
        <Grid item xs={12} sm={6} md={4}>
          <ProjectCard>
            <CardActionArea 
              href="https://github.com/taylorwilsdon/reddacted"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
                  <AccountTreeIcon sx={{ color: '#58a6ff', marginRight: 1 }} />
                  <Typography variant="h6" sx={{ color: '#c9d1d9' }}>
                    reddacted
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ color: '#8b949e', marginBottom: 2 }}>
                  clean up after yourself
                </Typography>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  {repoStats['taylorwilsdon/reddacted'] && (
                    <>
                      <StatsChip
                        icon={<StarBorderIcon />}
                        label={repoStats['taylorwilsdon/reddacted'].stars}
                        size="small"
                      />
                      <StatsChip
                        icon={<AccountTreeIcon />}
                        label={repoStats['taylorwilsdon/reddacted'].forks}
                        size="small"
                      />
                    </>
                  )}
                </Box>
              </CardContent>
            </CardActionArea>
          </ProjectCard>
        </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <Card>
          <CardActionArea href="https://github.com/netbirdio/netbird " target="_blank" rel="noopener noreferrer">
            <CardContent>
              <Typography variant="h5" component="div">
                netbird
              </Typography>
              <Typography variant="body2" color="text.secondary">
                wireguard overlay networking
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <Card>
          <CardActionArea href="https://github.com/homebridge/homebridge" target="_blank" rel="noopener noreferrer">
            <CardContent>
              <Typography variant="h5" component="div">
                Homebridge
              </Typography>
              <Typography variant="body2" color="text.secondary">
              HomeKit support for the impatient
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <Card>
          <CardActionArea href="https://github.com/open-webui/open-webui" target="_blank" rel="noopener noreferrer">
            <CardContent>
              <Typography variant="h5" component="div">
                open-webui
              </Typography>
              <Typography variant="body2" color="text.secondary">
              the gold standard for llm chat ui
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <Card>
          <CardActionArea href="https://github.com/ollama/ollama" target="_blank" rel="noopener noreferrer">
            <CardContent>
              <Typography variant="h5" component="div">
                ollama
              </Typography>
              <Typography variant="body2" color="text.secondary">
              llama.cpp wrapper for dead simple llm inference 
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <Card>
          <CardActionArea href="https://github.com/GAM-team/GAM" target="_blank" rel="noopener noreferrer">
            <CardContent>
              <Typography variant="h5" component="div">
                gam
              </Typography>
              <Typography variant="body2" color="text.secondary">
              cli for google workspace superadmins & friends
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <Card>
          <CardActionArea href="https://github.com/Aider-AI/aider" target="_blank" rel="noopener noreferrer">
            <CardContent>
              <Typography variant="h5" component="div">
                aider
              </Typography>
              <Typography variant="body2" color="text.secondary">
              pragmatic, interactive ai dev assistant for us vim types
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  </div>
);

export default OpenSource;
