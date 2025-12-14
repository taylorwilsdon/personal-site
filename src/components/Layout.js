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

