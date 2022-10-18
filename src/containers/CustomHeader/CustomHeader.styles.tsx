import { styled } from "@mui/material";

export const StyledHeader = styled("header")({
    padding: ["0", "0 5vw"],
    margin: "0",
    background: "#370365",
    color: "#FFFFFF",
    height: "8vh",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
});

const MyThemeComponent = styled('div')(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
  }));

export const StyledLinkContainer = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    height: "100%",
    width: "30vw",
    [theme.breakpoints.up('md')]: {
        width: "15vw"
    },
    [theme.breakpoints.up('lg')]: {
        width: "10vw"
    }
}));

export const BrandWrapper = styled("div")({
    display: "flex",
    alignItems: "center"
})
