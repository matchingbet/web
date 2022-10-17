import Link from 'next/link';

import { Typography } from "@mui/material";
import { Logo } from "../../components/Logo";
import { BrandWrapper, StyledHeader, StyledLinkContainer } from './CustomHeader.styles';

export default function CustomHeader() {
    return (
        <StyledHeader>
            <BrandWrapper>
                <Logo size={40} onClick={() => console.log("cliquei no logo")}/>
                <Typography sx={{paddingLeft: "10px", paddingTop: "2px", fontSize: '1rem'}} variant="h2">
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
