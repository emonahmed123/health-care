"use client"

import { ReactNode } from "react";
import { theme } from "../Theme/Theme";
import { ThemeProvider } from "@mui/material";

const Providors = ({ children }: { children: ReactNode }) => {



    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
};

export default Providors;