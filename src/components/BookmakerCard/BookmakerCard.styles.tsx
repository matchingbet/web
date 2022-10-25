import {Card, CardContent, IconButton, IconButtonProps, styled, Typography} from "@mui/material";
import React from "react";

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const contrastBackgroundColor = "#503071";

export const StyledCard = styled(Card)({
    backgroundColor: "#333333",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    margin: "5px 0",
    borderRadius: '25px 25px',
});

export const StyledTypographyTitle = styled(Typography)({
    height: "24px",
    paddingTop: "13px",
    paddingRight: "200px",
    fontSize: "15px",
    color: "white"
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



