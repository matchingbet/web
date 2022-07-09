import Link from "next/link";

import {styled, Typography, useTheme} from "@mui/material";
import {Logo} from "./Logo/Logo";

export default function CustomHeader() {

    const StyledHeader = styled("header")({
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

    const theme = useTheme();

    const StyledLinkContainer = styled("div")({
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
    });

    const BrandWrapper = styled("div")({
        display: "flex",
        alignItems: "center"
    })

    return (
        <StyledHeader>
            <BrandWrapper>
                <Logo size={40} onClick={() => console.log("cliquei no logo")}/>
                <Typography sx={{paddingLeft: "10px", paddingTop: "2px"}} variant="h2">
                    <Link href="/">
                        <a className="hover:underline">Matching-bet</a>
                    </Link>
                </Typography>

            </BrandWrapper>

            <StyledLinkContainer>
                <Link href="/login">
                    <a className="hover:underline">Login</a>
                </Link>

                <Link href="/signup" style={{paddingLeft: "5px"}}>
                    <a className="hover:underline">Registro</a>
                </Link>
            </StyledLinkContainer>
        </StyledHeader>
    );
}
