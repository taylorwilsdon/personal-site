import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Link, Typography, Box, Avatar } from '@mui/material';
import { styled } from '@mui/system';

// Base container components
export const MainContainer = styled('div')(({ theme }) => ({
  maxWidth: '100vw',
  overflowX: 'hidden',
  [theme.breakpoints.down('sm')]: {
    padding: '0 16px',
    width: '100vw',
    boxSizing: 'border-box',
  },
}));

export const MainSection = styled('section')(({ theme, variant }) => ({
  margin: '0 auto',
  ...(variant === 'blog' && {
    backgroundColor: 'white',
    boxShadow: '0 1px 2px 0 rgba(0,0,0,0.05)',
    width: '100%',
  }),
  [theme.breakpoints.down('sm')]: {
    maxWidth: '100%',
    width: '100%',
    padding: '0',
    boxSizing: 'border-box',
  },
}));

// Shared GitHub styled components
export const GitHubCard = styled(Card)(({ theme, colors }) => ({
  position: 'relative',
  transition: 'all 0.2s ease',
  background: colors?.background?.card || '#ffffff',
  border: `1px solid ${colors?.border || '#e1e4e8'}`,
  borderRadius: '6px',
  marginBottom: '8px',
  boxShadow: 'none',
  '&:hover': {
    borderColor: '#c6cbd1',
    backgroundColor: colors?.background?.hover || '#f6f8fa',
  },
}));

export const GitHubLink = styled(Link)(({ theme, variant, colors }) => ({
  textDecoration: 'none',
  fontSize: variant === 'small' ? '0.75rem' : '0.875rem',
  color: variant === 'muted' ? colors?.text?.muted : colors?.text?.primary,
  fontWeight: 500,
  '&:hover': {
    color: colors?.hover,
  },
  ...(variant === 'truncate' && {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    maxWidth: '280px',
    display: 'inline-block',
    verticalAlign: 'bottom',
  }),
}));

export const GitHubText = styled(Typography)(({ theme, variant, colors }) => ({
  fontSize: variant === 'small' ? '0.75rem' : '0.875rem',
  color: variant === 'muted' ? colors?.text?.muted : colors?.text?.primary,
  ...(variant === 'header' && {
    fontSize: '1rem',
    fontWeight: 600,
  }),
}));

export const FlexBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
});

export const GitHubCounter = styled(Box)(({ theme, colors }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: colors?.text?.secondary,
  fontSize: '0.75rem',
  backgroundColor: colors?.background?.chip,
  padding: '0 6px',
  height: '20px',
  borderRadius: '10px',
  border: `1px solid ${colors?.border}`,
  marginLeft: '8px',
  fontWeight: 600,
}));

// GitHub Activity styled components
export const ActivityContent = styled(FlexBox)({
  padding: "12px 16px",
  width: "100%",
});

export const ActivityAvatar = styled(Avatar, {
  shouldForwardProp: prop => prop !== 'colors'
})(({ colors }) => ({
  width: 32,
  height: 32,
  marginRight: 16,
  border: `1px solid ${colors?.border}`,
  flexShrink: 0,
}));

export const ActivityIcon = styled(FontAwesomeIcon, {
  shouldForwardProp: prop => prop !== 'colors'
})(({ colors }) => ({
  width: 16,
  height: 16,
  marginRight: 8,
  color: colors?.text?.secondary,
  flexShrink: 0,
}));

export const TimeIcon = styled(FontAwesomeIcon, {
  shouldForwardProp: prop => prop !== 'colors'
})(({ colors }) => ({
  width: 12,
  height: 12,
  marginRight: 4,
  color: colors?.text?.muted,
}));

export const ActivityDetails = styled(FlexBox)({
  flexGrow: 1,
  minWidth: 0,
});