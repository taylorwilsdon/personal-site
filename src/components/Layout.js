import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Link, Typography, Box, Avatar } from '@mui/material';
import { styled } from '@mui/system';

// Cursor-inspired color palette
const CURSOR_COLORS = {
  bg: '#f7f7f4',
  bgSection: '#f3f2ef',
  bgCard: '#ecebe9',
  text: '#26251e',
  textMuted: '#6f6f6a',
  accent: '#f45a19',
  border: '#e8e7e4',
};

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
    boxShadow: '0 10px 30px rgba(0,0,0,.08)',
    width: '100%',
  }),
  [theme.breakpoints.down('sm')]: {
    maxWidth: '100%',
    width: '100%',
    padding: '0',
    boxSizing: 'border-box',
  },
}));

// GitHub styled components with Cursor palette
export const GitHubCard = styled(Card)(({ theme, colors, variant }) => ({
  position: 'relative',
  transition: 'all 0.2s ease',
  background: 'white',
  border: `1px solid ${CURSOR_COLORS.border}`,
  borderRadius: '12px',
  marginBottom: '8px',
  boxShadow: 'none',
  '&:hover': {
    borderColor: CURSOR_COLORS.textMuted,
    backgroundColor: CURSOR_COLORS.bgSection,
  },
  ...(variant === 'icon' && {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  }),
}));

export const GitHubLink = styled(Link)(({ theme, variant, colors }) => ({
  textDecoration: 'none',
  fontSize: variant === 'small' ? '0.75rem' : '0.875rem',
  color: variant === 'muted' ? CURSOR_COLORS.textMuted : CURSOR_COLORS.text,
  fontWeight: 500,
  '&:hover': {
    color: CURSOR_COLORS.accent,
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
  color: variant === 'muted' ? CURSOR_COLORS.textMuted : CURSOR_COLORS.text,
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
  color: CURSOR_COLORS.textMuted,
  fontSize: '0.75rem',
  backgroundColor: CURSOR_COLORS.bgCard,
  padding: '0 6px',
  height: '20px',
  borderRadius: '10px',
  border: `1px solid ${CURSOR_COLORS.border}`,
  marginLeft: '8px',
  fontWeight: 600,
}));

// GitHub Activity styled components
export const ActivityContent = styled(FlexBox)(({ theme }) => ({
  padding: "12px 16px",
  width: "100%",
  [theme.breakpoints.down('sm')]: {
    padding: "6px 10px",
  },
}));

export const ActivityAvatar = styled(Avatar, {
  shouldForwardProp: prop => prop !== 'colors'
})(({ theme, colors }) => ({
  width: 32,
  height: 32,
  marginRight: 10,
  border: `1px solid ${CURSOR_COLORS.border}`,
  flexShrink: 0,
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

export const ActivityIcon = styled(FontAwesomeIcon, {
  shouldForwardProp: prop => prop !== 'colors'
})(({ colors }) => ({
  width: 16,
  height: 16,
  margin: 4,
  color: CURSOR_COLORS.textMuted,
  flexShrink: 0,
}));

export const TimeIcon = styled(FontAwesomeIcon, {
  shouldForwardProp: prop => prop !== 'colors'
})(({ colors }) => ({
  width: 12,
  height: 12,
  marginRight: 4,
  color: CURSOR_COLORS.textMuted,
}));

export const ActivityDetails = styled(FlexBox)({
  flexGrow: 1,
  minWidth: 0,
});

// Chip colors with Cursor-inspired palette
export const CHIP_COLORS = {
  PushEvent: { bg: CURSOR_COLORS.bgCard, text: CURSOR_COLORS.text, border: CURSOR_COLORS.border },
  PullRequestEvent: { bg: "#fef3ed", text: CURSOR_COLORS.accent, border: "#fde0d0" },
  IssuesEvent: { bg: CURSOR_COLORS.bgSection, text: CURSOR_COLORS.textMuted, border: CURSOR_COLORS.border },
  ForkEvent: { bg: CURSOR_COLORS.bgCard, text: CURSOR_COLORS.textMuted, border: CURSOR_COLORS.border },
  IssueCommentEvent: { bg: CURSOR_COLORS.bgSection, text: CURSOR_COLORS.textMuted, border: CURSOR_COLORS.border },
  CommentEvent: { bg: CURSOR_COLORS.bgSection, text: CURSOR_COLORS.textMuted, border: CURSOR_COLORS.border },
  CreateEvent: { bg: "#f0f9f0", text: "#2e7d32", border: "#c8e6c9" },
  PullRequestReviewEvent: { bg: "#fef3ed", text: CURSOR_COLORS.accent, border: "#fde0d0" },
  ReleaseEvent: { bg: CURSOR_COLORS.bgCard, text: CURSOR_COLORS.text, border: CURSOR_COLORS.border },
};

export const REPO_CHIP_STYLE = {
  bg: CURSOR_COLORS.bgSection,
  text: CURSOR_COLORS.textMuted,
  border: CURSOR_COLORS.border,
  hoverBg: CURSOR_COLORS.bgCard,
};

export const GITHUB_STYLES = {
  background: {
    card: 'white',
    chip: CURSOR_COLORS.bgCard,
    hover: CURSOR_COLORS.bgSection,
    active: CURSOR_COLORS.bgCard,
  },
  text: {
    primary: CURSOR_COLORS.text,
    secondary: CURSOR_COLORS.textMuted,
    link: CURSOR_COLORS.accent,
    muted: CURSOR_COLORS.textMuted,
  },
  border: CURSOR_COLORS.border,
  hover: CURSOR_COLORS.accent,
  button: {
    primary: {
      background: "white",
      hoverBackground: CURSOR_COLORS.bgSection,
      activeBackground: CURSOR_COLORS.bgCard,
      border: CURSOR_COLORS.border,
      hoverBorder: CURSOR_COLORS.textMuted,
      text: CURSOR_COLORS.text,
      shadow: "0 1px 2px rgba(0,0,0,0.04)",
      hoverShadow: "0 2px 4px rgba(0,0,0,0.08)",
      activeShadow: "inset 0 1px 0 rgba(0,0,0,0.05)",
      fontSize: "0.75rem",
      padding: "2px 12px",
      height: "24px",
      borderRadius: "9999px",
      fontWeight: 500,
      transition: "all 0.2s ease"
    }
  },
  paper: {
    surface: {
      backgroundColor: "white",
      border: `1px solid ${CURSOR_COLORS.border}`,
      borderRadius: "16px",
      padding: "24px",
      marginTop: "16px",
      boxShadow: "0 10px 30px rgba(0,0,0,.08)"
    }
  }
};
