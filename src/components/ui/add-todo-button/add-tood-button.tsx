import styled from '@emotion/styled';
import Button from '@mui/material/Button';

const BootstrapButton = styled(Button)({
    color: 'white',
    backgroundColor: '#6C63FF',
});

export default function AddButtonUi() {
    return <BootstrapButton variant="contained" size='large' type='submit'>Add</BootstrapButton>
}