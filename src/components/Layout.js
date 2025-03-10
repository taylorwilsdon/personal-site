import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Link, Typography, Box, Avatar } from '@mui/material';
import { styled } from '@mui/system';

import { GITHUB_COLORS } from '../config/repositories';

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
  borderRadius: '5px',
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
  marginRight: 10,
  border: `1px solid ${colors?.border}`,
  flexShrink: 0,
}));

export const ActivityIcon = styled(FontAwesomeIcon, {
  shouldForwardProp: prop => prop !== 'colors'
})(({ colors }) => ({
  width: 16,
  height: 16,
  margin: 4,
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

// GitHub style constants
export const CHIP_COLORS = {
  PushEvent: {
    bg: "#e1f5fe",
    text: "#0277bd",
    border: "#b3e5fc",
  },
  PullRequestEvent: {
    bg: "#e3f2fd",
    text: "#1565c0",
    border: "#bbdefb",
  },
  IssuesEvent: {
    bg: "#e8eaf6",
    text: "#3949ab",
    border: "#c5cae9",
  },
  ForkEvent: {
    bg: "#e0f7fa",
    text: "#00838f",
    border: "#b2ebf2",
  },
  IssueCommentEvent: {
    bg: "#e1f5fe",
    text: "#0288d1",
    border: "#b3e5fc",
  },
  CommentEvent: {
    bg: "#e1f5fe",
    text: "#0288d1",
    border: "#b3e5fc",
  },
  CreateEvent: {
    bg: "#e8f5e9",
    text: "#2e7d32",
    border: "#c8e6c9",
  },
  PullRequestReviewEvent: {
    bg: "#e3f2fd",
    text: "#1565c0",
    border: "#bbdefb",
  },
  ReleaseEvent: {
    bg: "#eceff1",
    text: "#455a64",
    border: "#cfd8dc",
  },
};

export const REPO_CHIP_STYLE = {
  bg: "#f1f8e9",
  text: "#558b2f",
  border: "#dcedc8",
  hoverBg: "#e8f5e9",
};

export const ORG_CHIP_STYLE = {
  bg: "#e8eaf6",
  text: "#3949ab",
  border: "#c5cae9",
  hoverBg: "#e3f2fd",
};

export const GITHUB_STYLES = {
  ...GITHUB_COLORS,
  background: {
    ...GITHUB_COLORS.background,
    hover: "#f6f8fa",
    active: "#f1f2f4",
  },
  text: {
    ...GITHUB_COLORS.text,
    link: "#0366d6",
    muted: "#6a737d",
  },
  button: {
    primary: {
      background: "linear-gradient(180deg, #f6f8fa, #ebf0f4 90%)",
      hoverBackground: "linear-gradient(180deg, #f3f4f6, #e1e4e8 90%)",
      activeBackground: "#e9ecef",
      border: "#e1e4e8",
      hoverBorder: "#c6cbd1",
      text: "#0366d6",
      shadow: "0 1px 0 rgba(27,31,35,0.04)",
      hoverShadow: "0 1px 0 rgba(27,31,35,0.1)",
      activeShadow: "inset 0 1px 0 rgba(27,31,35,0.1)",
      fontSize: "0.75rem",
      padding: "2px 12px",
      height: "24px",
      borderRadius: "6px",
      fontWeight: 600,
      transition: "all 0.2s cubic-bezier(0.3, 0, 0.5, 1)"
    }
  },
  paper: {
    surface: {
      backgroundColor: "#ffffff",
      border: "1px solid #e1e4e8",
      borderRadius: "6px",
      padding: "24px",
      marginTop: "16px",
      boxShadow: "none"
    }
  }
};