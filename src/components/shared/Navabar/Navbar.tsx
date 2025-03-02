import { Box, Button, Container, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <Container>
            <Stack py={2} direction=
                'row' justifyContent="space-between" alignItems='center'
            >
                <Typography variant="h4" align="center"
                    component={Link} href="/" fontWeight={600}>
                    P<Box color="primary.main" component="span" >H</Box>ealth Care
                </Typography>
                <Stack gap={4} justifyContent="space-between" direction="row">
                    <Typography component={Link} href="/consultation" variant="button">Cnsultation</Typography>
                    <Typography component={Link} href="/consultation" variant="button">Heath Plans</Typography>
                    <Typography component={Link} href="/consultation" variant="button">Medicine</Typography>
                    <Typography component={Link} href="/consultation" variant="button">Diagnostics</Typography>
                    <Typography component={Link} href="/consultation" variant="button">NGos</Typography>
                </Stack>
                <Button component={Link} href='/heathcare' color="primary" >Login</Button>
            </Stack>
        </Container>
    );
};

export default Navbar;