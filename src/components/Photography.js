import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useEffect, useState } from "react";

const Photography = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        const response = await fetch(
          `https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink&access_token=${process.env.REACT_APP_INSTAGRAM_TOKEN}`
        );
        const data = await response.json();
        setPosts(data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Instagram posts:', error);
        setLoading(false);
      }
    };

    fetchInstagramPosts();
  }, []);

  if (loading) {
    return <div>Loading Instagram posts...</div>;
  }

  return (
    <div>
      <Grid container align='center' spacing={1} direction='row' justify='flex-start' alignItems='flex-start'>
        {posts.map((post) => (
          <Grid item xs={4} key={post.id}>
            <Card sx={{ minWidth: 0, maxWidth: 400, minHeight: 425 }}>
              <CardActionArea>
                <a href={post.permalink} target="_blank" rel="noopener noreferrer">
                  <CardMedia
                    component="img"
                    height="250"
                    image={post.media_url}
                    alt={post.caption || 'Instagram post'}
                  />
                  <CardContent>
                    <Typography variant="h5" component="div">
                      Instagram Post
                    </Typography>
                    <Typography variant="body2" style={{whiteSpace:'pre-wrap'}} color="text.secondary">
                      {post.caption || ''}
                    </Typography>
                  </CardContent>
                </a>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Photography;
