import { Grid, Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';

const OpenSource = () => (
  <div>
    <h3>Open Source Contributions</h3>
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12} md={6}>
        <Card>
          <CardActionArea href="https://github.com/taylorwilsdon" target="_blank" rel="noopener noreferrer">
            <CardContent>
              <Typography variant="h5" component="div">
                GitHub Profile
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Explore my open source projects and contributions on GitHub
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card>
          <CardActionArea href="https://github.com/Yelp/detect-secrets" target="_blank" rel="noopener noreferrer">
            <CardContent>
              <Typography variant="h5" component="div">
                detect-secrets
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Contributed to Yelp's secret detection tool
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  </div>
);

export default OpenSource;
