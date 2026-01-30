import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import type { ChangeEvent } from 'react';
import ButtonHeaderUi from '../header-button/header-button';

interface InputHeaderUiProps {
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void
    submitTodo: (e: ChangeEvent<HTMLFormElement>) => void
    value: string
}

export default function InputHeaderUi( {handleChange, submitTodo, value }: InputHeaderUiProps) {
    return (
        <Box
            onSubmit={submitTodo}
            component="form"
            noValidate
            autoComplete="off"
            display='flex'
            gap='16px'
        >
            <TextField style={{width: '595px'}}id="outlined-basic" variant="outlined" placeholder="Search note..." onChange={handleChange} value={value}/>
            {/* <SelectUi /> */}
            <ButtonHeaderUi/>
        </Box>
    );
}