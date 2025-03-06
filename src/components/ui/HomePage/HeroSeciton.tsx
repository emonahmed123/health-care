
import { Box, Button, Container, Typography } from '@mui/material';
import Image from 'next/image';
import assets from '@/assets';
import React from 'react';

const HeroSeciton = () => {
    return (
        <Container sx={
            {

                display: 'flex',
                direction: 'row',
                my: 16
            }

        }>

            <Box sx={{ flex: 1, position: "relative" }}>
                <Box
                    sx={{
                        position: "absolute",
                        width: "700px",
                        left: "-90px",
                        top: "-120px",
                    }}
                >
                    {/* <Image src={assets.svgs.grid} alt="doctor1" /> */}
                </Box>
                <Typography variant="h2" component="h1" fontWeight={600}>
                    Healthier Hearts
                </Typography>
                <Typography variant="h2" component="h1" fontWeight={600}>
                    Come From
                </Typography>
                <Typography
                    variant="h2"
                    component="h1"
                    fontWeight={600}
                    color="primary.main"
                >
                    Preventive Care
                </Typography>
                <Typography sx={{ my: 4 }}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit eum
                    iusto consequatur eius, doloribus nesciunt facere aliquid eveniet et.
                    Rerum maiores saepe cupiditate repellat recusandae atque sed. Saepe,
                    vitae id?
                </Typography>
                <Box sx={{ display: "flex", gap: 2 }}>
                    <Button>Make appointment</Button>
                    <Button variant="outlined">Contact us</Button>
                </Box>
            </Box>
            <Box sx={{
                flex: 1, position: "relative", mt: 0,
                justifyContent: "center",
                display: "flex",
                p: 1,
                m: 1,
            }}>
                <Box
                    sx={{
                        display: "flex",
                        gap: 2,
                    }}
                >
                    <Box mt={4}>
                        <Image
                            src={assets.images.doctor1}
                            width={240}
                            height={380}
                            alt="doctor1"
                        />
                    </Box>
                    <Box>
                        <Image
                            src={assets.images.doctor2}
                            width={240}
                            height={350}
                            alt="doctor2"
                        />
                    </Box>
                </Box>
                <Box
                    sx={{
                        position: "absolute",
                        top: "220px",
                        left: "150px",
                    }}
                >
                    <Image
                        src={assets.images.doctor3}
                        width={240}
                        height={240}
                        alt="doctor3"
                    />
                </Box>
                <Box
                    sx={{
                        position: "absolute",
                        bottom: "-50px",
                        right: 0,
                        zIndex: "-1",
                    }}
                >
                    <Image
                        src={assets.images.stethoscope}
                        width={180}
                        height={180}
                        alt="doctor3"
                    />
                </Box>
            </Box>

        </Container>
    );
};

export default HeroSeciton;