import Footer from '@/components/shared/Footer/Footer';
import Navbar from '@/components/shared/Navabar/Navbar';
import { Box } from '@mui/material';
import React, { ReactNode } from 'react';

const Commonlayout = ({ children }: { children: ReactNode }) => {
    return (
        <Box>
            <Navbar />
            {children}
            <Footer />
        </Box>
    );
};

export default Commonlayout;