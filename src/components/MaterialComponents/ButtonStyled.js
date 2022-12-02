import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

export const GreenButton = styled(Button)(({
  color: 'white',
  backgroundColor: '#006837',
  '&:hover': {
    backgroundColor: '#006837',
  },
}));