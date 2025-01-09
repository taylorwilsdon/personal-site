import { Card, CardActionArea, CardContent, Typography, createTheme } from '@mui/material';
import Grid from '@mui/material/Grid2';


const theme = createTheme();

theme.typography.body2 = {
  fontSize: '0.675rem',
  '@media (min-width:600px)': {
    fontSize: '.675rem',
  },
};


const OpenSource = () => (
  <div>
    <h3>projects we believe in, support & contribute to</h3>
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12} md={6}>
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
      <Grid item xs={12} md={6}>
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
      <Grid item xs={12} md={6}>
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
      <Grid item xs={12} md={6}>
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

    </Grid>
  </div>
);

export default OpenSource;
