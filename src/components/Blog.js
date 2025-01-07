import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import * as React from "react";

const Blog = (props) => (
    <div>
    <Grid container align='center' spacing={1} direction='row' justify='flex-start' alignItems='flex-start'>
      <Grid item xs={4}>
        <Card sx={{ minWidth: 0, maxWidth: 400, minHeight: 425 }}>
          <CardActionArea>
          <a href="https://medium.com/@tbarrettwilsdon/multi-gig-for-the-masses-building-an-inexpensive-10gbe-network-for-the-home-cfe91740f186">
            <CardMedia
              component="img"
              height="250"
              image={require('../images/medium_card.png')}
              alt="Multi-Gig for the Masses"
            />
            <CardContent>
              <Typography variant="h5" component="div">
              Multi-Gig for the Masses
              </Typography>
              <Typography variant="h7" component="div">
              Building an inexpensive 10GbE network for the home
              </Typography>
              <Typography variant="body2" style={{whiteSpace:'pre-wrap'}} color="text.secondary">
                Thoughts on design and component selection for a multi-gigabit LAN (2.5/5/10GbE) based on my experiences building my home network architecture.
              </Typography>
            </CardContent>
            </a>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card sx={{ minWidth: 0, maxWidth: 400, minHeight: 425 }}>
        <a href="https://www.conferencecast.tv/speaker-32221-taylor-barrett-wilsdon#.speakerPage-latest">
          <CardActionArea>
            <CardMedia
              component="img"
              height="250"
              image={require('../images/summit_card.png')}
              alt="Atlassian Summit"
            />
            <CardContent>
              <Typography variant="h5" component="div">
                Atlassian Summit | Jira & Ansible
              </Typography>
              <Typography variant="h7" component="div">
              Scaling Jira Server Administration for the Enterprise
              </Typography>
              <Typography variant="body2" style={{whiteSpace:'pre-wrap'}} color="text.secondary">
            Speaking on behalf of Yelp at Atlassain Summit 2019<br /> in Las Vegas, covering the technical architecture<br/>that allowed
              </Typography>
            </CardContent>
          </CardActionArea>
          </a>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card sx={{ minWidth: 0, maxWidth: 400, minHeight: 425 }}>
          <CardActionArea>
              <a href="https://www.nytimes.com/interactive/2022/02/17/realestate/17hunt-wilsdon.html?unlocked_article_code=AAAAAAAAAAAAAAAACEIPuonUyYiZ_tU1Gw5CRWySB4B99Fre37-Wn_smi3b6ITOJQCpPiL1KA5WG5wLSZK54a9w1mTSHQdsLeJkeeMtP9M4NdUp8V1vv5ZqChJkfKi4pqJy-GTJvh5nDAugztGa0NDf8deojnPi17hiLdWHoDaXd1nxwIwxio4B3Ng3_gQx-zajOG-9w3NB5zK1hUsg8HWFcEXHM6_r4CBx-O8GEbQXf7GQ1XOJbWzLSmL2M-u5KMVUSWR-dEiQJsStr48hcOdgXIK_-MxchHcL6irwQAWZvR5y7nQlhdunCsD11g1VV9a4C5Q&referringSource=articleShare">
            <CardMedia
              component="img"
              height="250"
              image={require('../images/nyt_card.png')}
              alt="NYT - The Hunt"
            />
            <CardContent>
              <Typography variant="h5" component="div">
                The New York Times
              </Typography>
              <Typography variant="h7" component="div">
              Real Estate | The Hunt
              </Typography>
              <Typography variant="body2" style={{whiteSpace:'pre-wrap'}} color="text.secondary">
                Interview with Joyce Cohen of the New York Times for The Hunt,
                focused on our experience finding our New York City
                home.
              </Typography>
            </CardContent>
            </a>
          </CardActionArea>
        </Card>
      </Grid>

    </Grid>
    </div>
);

export default Blog;
