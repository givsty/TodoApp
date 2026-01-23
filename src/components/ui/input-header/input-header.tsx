import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function InputHeaderUi() {
  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '50ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" variant="outlined" placeholder="Search note..." />
    </Box>
  );
}