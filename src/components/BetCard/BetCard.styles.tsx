import {Card, CardContent, IconButton, IconButtonProps, styled, Typography} from "@mui/material";
import React from "react";

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const contrastBackgroundColor = "#503071";

export const StyledCard = styled(Card)({
    backgroundColor: "transparent",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    margin: "5px 0",
    border: `1px solid white`,
});

export const StyledTypography = styled(Typography)({
    height: "24px",
    paddingTop: "2px",
});


export const StyledCardContentHeader = styled(CardContent)({
    backgroundColor: contrastBackgroundColor,
    padding: "0 16px",
    cursor: "pointer",
    height: "2.5rem",
    display: "flex",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between"
});


const ExpandeMoreIcon = (props: ExpandMoreProps) => {
    const {expand, ...other} = props;
    return <IconButton {...other} />;
};

export const ExpandMore = styled(ExpandeMoreIcon)(({theme, expand}) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    color: "white",
    padding: 0,
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export const HeaderButton = styled("div")({
    backgroundColor: "transparent",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
})

export const BodyCardContent = styled(CardContent)({
    padding: "8px",
    ":last-child": {
        padding: "16px"
    }
});

export const EventTimeAndExpandMore = styled("div")({
    backgroundColor: "transparent",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    "p": {
        margin: 0,
        paddingRight: "10px"
    }
});

export const DescriptionLine = styled("div")({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "start",
})

export const Description = styled("div")({
    color: "white",
    display: "flex",
    alignItems: "center",
    width: "100%",
    "p": {
        margin: 0,
        height: "100%",
        paddingRight: "10px",
        textAlign: "start",
    },
})

export const Odd = styled("div")({
    color: "white",
    background: contrastBackgroundColor,
    borderRadius: "5px",
    padding: ".6rem",
})


