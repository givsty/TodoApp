import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import type { ChangeEvent } from 'react';
import ButtonHeaderUi from '../header-button/header-button';
import SelectUi from '../select-header/select-header';

interface InputHeaderUiProps {
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void
    submitTodo: (e: ChangeEvent<HTMLFormElement>) => void
    value: string
}

export default function InputHeaderUi( {handleChange, submitTodo, value }: InputHeaderUiProps) {
    return (
        <Box
            color='pink'
            onSubmit={submitTodo}
            component="form"
            noValidate
            autoComplete="off"
            display='flex'
            gap='16px'
            sx={{
                width: '595px',
                '& .MuiOutlinedInput-root': {
                    height: '38px',
                    '& fieldset': {
                        borderColor: '#D0D0D0',
                    },
            
                    '&:hover fieldset': {
                        borderColor: '#6C63FF',
                    },
            
                    '&.Mui-focused fieldset': {
                        borderColor: '#6C63FF',
                        borderWidth: 2,
                    },
                },
            
                '& .MuiInputBase-input': {
                    padding: '14px',
                    fontSize: '16px',
                },
            
                '& .MuiInputBase-input::placeholder': {
                    color: '#B0B0B0',
                    opacity: 1,
                },
              }}
        >
            <TextField style={{width: '595px'}}id="outlined-basic" variant="outlined" placeholder="Search note..." onChange={handleChange} value={value}/>
            <SelectUi />
            <ButtonHeaderUi/>
        </Box>
    );
}