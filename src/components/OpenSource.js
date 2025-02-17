import GitHubIcon from '@mui/icons-material/GitHub';
import ForkRightIcon from '@mui/icons-material/ForkRight';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
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
import { useState, useEffect } from 'react';

const octokit = new Octokit();

const ProjectCard = styled(Card)(({ theme }) => ({
  position: 'relative',
  transition: 'all 0.2s ease',
  background: '#ffffff',
  border: '1px solid #e1e4e8',
  borderRadius: '8px',
  height: '100%',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 3px 10px rgba(0,0,0,0.1)',
    '& .repo-name': {
      color: '#2188ff',
    }
  }
}));

const RepoStats = styled(Box)({
  display: 'flex',
  gap: '12px',
  marginTop: '8px'
});

const StatChip = styled(Chip)({
  background: '#f6f8fa',
  border: '1px solid #e1e4e8',
  borderRadius: '12px',
  color: '#586069',
  height: '24px',
  '& .MuiChip-icon': {
    color: '#586069',
    fontSize: '16px'
  }
});

const RepoDescription = styled(Typography)({
  color: '#586069',
  fontSize: '14px',
  marginTop: '8px',
  minHeight: '40px'
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
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h4" sx={{ 
          color: '#24292e',
          fontWeight: 600,
          fontSize: '2rem',
          mb: 2
        }}>
          <GitHubIcon sx={{ mr: 1, verticalAlign: 'bottom', fontSize: '2rem' }} />
          Open Source Contributions
        </Typography>
        <Typography variant="subtitle1" sx={{ 
          color: '#586069',
          fontSize: '1.1rem'
        }}>
          Projects I believe in, support & contribute to
        </Typography>
      </Box>
      <Grid container spacing={3}>
        {[
          { name: 'reddacted', owner: 'taylorwilsdon', desc: 'clean up after yourself' },
          { name: 'netbird', owner: 'netbirdio', desc: 'wireguard overlay networking' },
          { name: 'homebridge', owner: 'homebridge', desc: 'HomeKit support for the impatient' },
          { name: 'open-webui', owner: 'open-webui', desc: 'the gold standard for llm chat ui' },
          { name: 'ollama', owner: 'ollama', desc: 'llama.cpp wrapper for dead simple llm inference' },
          { name: 'GAM', owner: 'GAM-team', desc: 'cli for google workspace superadmins & friends' },
          { name: 'aider', owner: 'Aider-AI', desc: 'pragmatic, interactive ai dev assistant for us vim types' }
        ].map((repo) => (
          <Grid item xs={12} sm={6} md={4} key={`${repo.owner}/${repo.name}`}>
            <ProjectCard>
              <CardActionArea 
                href={`https://github.com/${repo.owner}/${repo.name}`}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <CardContent>
                  <Typography 
                    variant="h6" 
                    className="repo-name"
                    sx={{ 
                      color: '#24292e',
                      fontSize: '1.1rem',
                      fontWeight: 600 
                    }}
                  >
                    {repo.name}
                  </Typography>
                  <RepoDescription>
                    {repo.desc}
                  </RepoDescription>
                  <RepoStats>
                    {repoStats[`${repo.owner}/${repo.name}`] && (
                      <>
                        <StatChip
                          icon={<StarOutlineIcon />}
                          label={repoStats[`${repo.owner}/${repo.name}`].stars}
                          size="small"
                        />
                        <StatChip
                          icon={<ForkRightIcon />}
                          label={repoStats[`${repo.owner}/${repo.name}`].forks}
                          size="small"
                        />
                      </>
                    )}
                  </RepoStats>
                </CardContent>
              </CardActionArea>
            </ProjectCard>
          </Grid>
        ))}
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
    </Box>
);}

export default OpenSource
