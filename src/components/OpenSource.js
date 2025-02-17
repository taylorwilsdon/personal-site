import { Card, CardActionArea, CardContent, Typography, createTheme, Grid } from '@mui/material';


const theme = createTheme();

theme.typography.body2 = {
  fontSize: '0.675rem',
  '@media (min-width:600px)': {
    fontSize: '.675rem',
  },
};


const OpenSource = () => (
  <div>
    <h3>a non-exhaustive list of projects I believe in, support & contribute to</h3>
    <Grid container spacing={4} justifyContent="center" sx={{ maxWidth: '1200px', padding: '20px' }}>
            <Grid item xs={12} sm={6} md={6}>
        <Card>
          <CardActionArea href="https://github.com/taylorwilsdon/reddacted " target="_blank" rel="noopener noreferrer">
            <CardContent>
              <Typography variant="h5" component="div">
                reddacted
              </Typography>
              <Typography variant="body2" color="text.secondary">
                clean up after yourself
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
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
