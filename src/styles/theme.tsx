import {createTheme} from "@mui/material/styles";

export const theme = createTheme({
});

theme.typography.body1 = {
    fontSize: "1.2rem",
    height: "24px",
    textAlign: "center",
    "@media (min-width:300px)": {
        fontSize: ".8rem",
    },
    "@media (min-width:600px)": {
        fontSize: "1rem",
    },
    color: "#ffffff",
};

theme.typography.h1 = {
    fontSize: "1.5rem",
    "@media (min-width:600px)": {
        fontSize: "1.5rem",
    },
    [theme.breakpoints.up("md")]: {
        fontSize: "1.8rem",
    },
    color: "#ffffff",
};

theme.typography.h2 = {
    "@media (min-width:600px)": {
        fontSize: "1.5rem",
    },
    [theme.breakpoints.up("md")]: {
        fontSize: "1.8rem",
    },
    fontSize: "1rem",
    color: "#ffffff",
};

export const internalTheme = createTheme({
});

internalTheme.typography.h1 = {
    fontSize: "1.5rem",
    "@media (min-width:600px)": {
        fontSize: "1.5rem",
    },
    [internalTheme.breakpoints.up("md")]: {
        fontSize: "1.8rem",
    },
    color: "#ffffff",
};

internalTheme.typography.h2 = {
    "@media (min-width:600px)": {
        fontSize: "1.5rem",
    },
    [internalTheme.breakpoints.up("md")]: {
        fontSize: "1.8rem",
    },
    fontSize: "1rem",
    color: "#ffffff",
};