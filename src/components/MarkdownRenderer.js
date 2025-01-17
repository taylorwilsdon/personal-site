import { styled } from '@mui/material/styles';
import React from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownContainer = styled('div')({
  '& h1': {
    fontSize: '2.5rem',
    fontWeight: '700',
    marginBottom: '1.5rem',
    fontFamily: 'Georgia, serif',
    color: '#2c3e50',
    textTransform: 'none'
  },
  '& h2': {
    fontSize: '1.8rem',
    fontWeight: '600',
    marginTop: '2rem',
    marginBottom: '1rem',
    fontFamily: 'Georgia, serif',
    color: '#2c3e50',
    textTransform: 'none'
  },
  '& h3': {
    fontSize: '1.5rem',
    fontWeight: '600',
    marginTop: '1.5rem',
    marginBottom: '0.75rem',
    fontFamily: 'Georgia, serif',
    color: '#2c3e50',
    textTransform: 'none'
  },
  '& p': {
    fontSize: '1.1rem',
    lineHeight: '1.8',
    marginBottom: '1.5rem',
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    color: '#333',
    textTransform: 'none'
  },
  '& a': {
    color: '#2980b9',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline'
    }
  },
  '& img': {
    maxWidth: '100%',
    height: 'auto',
    marginTop: '2rem',
    marginBottom: '2rem',
    borderRadius: '4px'
  },
  '& blockquote': {
    borderLeft: '4px solid #e0e0e0',
    paddingLeft: '1.5rem',
    marginLeft: '0',
    marginRight: '0',
    marginBottom: '1.5rem',
    fontStyle: 'italic',
    color: '#555'
  },
  '& code': {
    backgroundColor: '#f8f9fa',
    padding: '0.2em 0.4em',
    borderRadius: '3px',
    fontSize: '0.9em',
    fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
    color: '#e83e8c'
  },
  '& pre': {
    backgroundColor: '#f8f9fa',
    padding: '1rem',
    borderRadius: '4px',
    overflow: 'auto',
    marginBottom: '1.5rem',
    '& code': {
      backgroundColor: 'transparent',
      padding: '0',
      color: '#333'
    }
  },
  '& ul, & ol': {
    marginBottom: '1.5rem',
    paddingLeft: '2rem',
    '& li': {
      marginBottom: '0.5rem',
      fontSize: '1.1rem',
      lineHeight: '1.6',
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      color: '#333',
      textTransform: 'none'
    }
  }
});

const MarkdownRenderer = ({ content }) => {
  return (
    <MarkdownContainer sx={{ maxWidth: '740px', margin: '60px auto', padding: '0 20px' }}>
      <ReactMarkdown>
        {content}
      </ReactMarkdown>
    </MarkdownContainer>
  );
};

export default MarkdownRenderer; 