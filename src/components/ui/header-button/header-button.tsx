import styled from '@emotion/styled';
import Button from '@mui/material/Button';

const BootstrapButton = styled(Button)({
    color: 'white',
    backgroundColor: 'purple'
});

export default function ButtonHeaderUi() {
    return <BootstrapButton variant="contained" size='large' type='submit'>Add</BootstrapButton>
}