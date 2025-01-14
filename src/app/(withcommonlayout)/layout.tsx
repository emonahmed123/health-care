import Navbar from '@/components/shared/Navabar/Navbar';
import React, { Fragment, ReactNode } from 'react';

const Commonlayout = ({ children }: { children: ReactNode }) => {
    return (
        <Fragment>
            <Navbar />
            {children}
        </Fragment>
    );
};

export default Commonlayout;