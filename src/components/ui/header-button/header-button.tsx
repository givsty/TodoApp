import styled from '@emotion/styled';
import Button from '@mui/material/Button';

const BootstrapButton = styled(Button)({

});

export default function ButtonHeaderUi() {
    return <BootstrapButton variant="contained" size='large' type='submit'>Add</BootstrapButton>
}