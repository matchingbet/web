import { Box } from "@mui/material";
import React, { ReactNode } from "react";

interface CenteredComponentProps {
    children: ReactNode
}

const CenteredComponent: React.FC<CenteredComponentProps> = ({ children }) => {
    return <Box
        sx={{
            display: 'flex',
            justifyContent: 'center',
            p: 1,
            m: 1,
            borderRadius: 1,
        }}
    >
        {children}
    </Box>
}

export default CenteredComponent;