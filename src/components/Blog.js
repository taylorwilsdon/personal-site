import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Grid, Typography, Card, CardContent, Chip } from '@mui/material';
import { format } from 'date-fns';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postsDirectory = path.join(process.cwd(), 'blog');
    const fileNames = fs.readdirSync(postsDirectory);

    const loadedPosts = fileNames.map((fileName) => {
      const filePath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);
      
      return {
        ...data,
        content,
        slug: fileName.replace(/\.md$/, ''),
        date: format(new Date(data.date), 'MMMM dd, yyyy')
      };
    });

    // Sort posts by date descending
    loadedPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    setPosts(loadedPosts);
  }, []);

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <Typography variant="h2" gutterBottom style={{ marginBottom: '40px' }}>
        Blog
      </Typography>
      
      {posts.map((post) => (
        <Card key={post.slug} style={{ marginBottom: '40px', boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)' }}>
          <CardContent>
            <Typography variant="h4" component="h2" gutterBottom>
              {post.title}
            </Typography>
            
            <Grid container spacing={1} style={{ marginBottom: '20px' }}>
              <Grid item>
                <Chip label={post.date} variant="outlined" />
              </Grid>
              {post.tags?.map((tag) => (
                <Grid item key={tag}>
                  <Chip label={tag} variant="outlined" color="primary" />
                </Grid>
              ))}
            </Grid>

            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                img: ({ node, ...props }) => (
                  <img 
                    {...props} 
                    style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} 
                    alt={props.alt || ''}
                  />
                ),
                a: ({ node, ...props }) => (
                  <a {...props} style={{ color: '#1976d2', textDecoration: 'none' }} />
                ),
                code: ({ node, ...props }) => (
                  <code 
                    {...props} 
                    style={{ 
                      backgroundColor: '#f5f5f5',
                      padding: '2px 4px',
                      borderRadius: '4px',
                      fontFamily: 'monospace'
                    }} 
                  />
                )
              }}
            >
              {post.content}
            </ReactMarkdown>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Blog;
