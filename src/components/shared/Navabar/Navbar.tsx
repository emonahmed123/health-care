import { Box, Container, Stack, Typography } from '@mui/material';
import React from 'react';

const Navbar = () => {
    return (
        <Container>
            <Stack py={2} direction=
                'row' justifyContent="space-between"
            >
                <Typography variant="h4" align="center"
                    component='h1' fontWeight={600}>
                    P<Box color="primary.main" component="span">H</Box>ealth Care
                </Typography>
            </Stack>
        </Container>
    );
};

export default Navbar;