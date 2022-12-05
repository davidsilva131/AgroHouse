import { styled } from '@mui/material/styles';
import { TextField } from "@mui/material";

export const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#006837',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#006837',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#006837',
    },
    '&:hover fieldset': {
      borderColor: '#006837',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#006837',
    },
  },
});