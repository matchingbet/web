import {createTheme} from "@mui/material/styles";

const theme = createTheme({
    typography: {
        allVariants: {
            color: "#ffffff",
            fontSize: "1rem",
        },
    },
});

theme.typography.body1 = {
    fontSize: "1.2rem",
    "@media (min-width:300px)": {
        fontSize: ".8rem",
    },
    "@media (min-width:600px)": {
        fontSize: "1rem",
    },
    color: "white",
};

theme.typography.h1 = {
    fontSize: "1.5rem",
    "@media (min-width:600px)": {
        fontSize: "1.5rem",
    },
    [theme.breakpoints.up("md")]: {
        fontSize: "1.8rem",
    },
    color: "white",
};

export default theme;