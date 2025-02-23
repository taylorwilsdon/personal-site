import ArticleIcon from "@mui/icons-material/Article";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography
} from "@mui/material";
import PropTypes from 'prop-types';
import React from "react";

import { articles } from "../config/articles";

// Header Component
const PageHeader = () => (
  <Box className="blog-header">
    <Typography variant="h4" className="blog-header-title">
      <ArticleIcon className="blog-header-icon" />
      Featured Articles
    </Typography>
    <Typography variant="subtitle1" className="blog-header-subtitle">
      Technical writing, presentations & publications
    </Typography>
  </Box>
);

// ArticleCard component
const ArticleCard = React.memo(({ article }) => (
  <Card className="blog-card">
    <CardActionArea
      href={article.href}
      target="_blank"
      rel="noopener noreferrer"
      className="blog-card-action"
    >
      <CardMedia
        component="img"
        image={article.image}
        alt={article.alt}
        className="blog-card-image"
      />
      <CardContent className="blog-card-content">
        <Typography className="blog-card-title">
          {article.title}
        </Typography>
        <Typography className="blog-card-subtitle">
          {article.subtitle}
        </Typography>
        <Typography className="blog-card-description">
          {article.description}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
));

ArticleCard.propTypes = {
  article: PropTypes.shape({
    href: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

const Blog = ({ showHeader = true }) => {
  return (
    <>
      {showHeader && <PageHeader />}
      <Grid container spacing={1.5}>
        {articles.map((article, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <ArticleCard article={article} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

Blog.propTypes = {
  showHeader: PropTypes.bool,
};

Blog.defaultProps = {
  showHeader: true,
};

export { Blog, PageHeader };
export default Blog;
