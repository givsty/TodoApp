import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
interface InputHeaderUiProps {
  handleChange: (e: React.ChangeEvent) => void
}
export default function InputHeaderUi( {handleChange}: InputHeaderUiProps) {
    return (
        <Box
            component="form"
            sx={{ '& > :not(style)': { m: 1, width: '50ch' } }}
            noValidate
            autoComplete="off"
        >
            <TextField id="outlined-basic" variant="outlined" placeholder="Search note..." onChange={(e) => handleChange(e)}/>
        </Box>
    );
}