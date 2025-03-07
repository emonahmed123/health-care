/* eslint-disable @typescript-eslint/no-explicit-any */

import { Box, Button, Container, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const Spedaillist = async () => {

    const res = await fetch('http://localhost:5000/api/v1/specialties', { next: { revalidate: 3600 } });
    const { data: specialties } = await res.json();
    console.log(specialties);
    return (
        <Container>
            <Box sx={{
                margin: '40px 0px',
                textAlign: 'center',

            }}>
                <Box sx={{ textAlign: 'start' }}>
                    <Typography variant='h4' fontWeight={600}>Explore Treatments Across Specialties</Typography>
                    <Typography component='p' fontWeight={300}>Experienced Doctors Across All Specialties</Typography>

                </Box>
                <Stack direction="row" gap={4} mt={5} >{specialties.map((specialty: any) => (<Box key={specialty.id}>

                    <Image src={specialty.image} alt={specialty.name} width={100} height={100} />

                    <Typography component="p">{specialty.title}</Typography>
                </Box>))}

                </Stack>
                <Button variant='outlined' sx={{
                    marginTop: '20px',
                }}> view ALL</Button>
            </Box>

        </Container>
    );
};

export default Spedaillist;