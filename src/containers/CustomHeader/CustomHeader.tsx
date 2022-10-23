import Link from "next/link";

import { Skeleton } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Logo } from "../../components/Logo";
import { StyledAvatar } from "../../components/StyledAvatar/StyledAvatar";
import { AuthService } from "../../services/AuthService";
import { Column, JustifyEndRow } from "../../styles/shared-styles";
import { AvatarText, BrandWrapper, StyledHeader, StyledLinkContainer, UserNameColumn, UserNameColumnText } from "./CustomHeader.styles";

const authService = new AuthService();

export default function CustomHeader() {
  const router = useRouter();
  const [logged, setLogged] = useState<Boolean>(false);
  const [open, setOpen] = useState(false);
  const [balance, setBalance] = useState(0.0);

  const { isLoading, error, data: user } = useQuery(['getUser'], authService.getUser);

  useEffect(() => {
    setLogged(authService.isLogged);
  }, [authService.isLogged, user]);


  const LoginRegisterButtons = () => {
    return (<>
      <Link href="/login" className="hover:underline">
        Login
      </Link>

      <Link href="/signup" style={{ paddingLeft: "5px" }} className="hover:underline">
        Registro
      </Link>
    </>);
  }

  const LoggedAvatar = () => {
    return (
      <JustifyEndRow width={"50vw"}>
        <UserNameColumn>
          <UserNameColumnText textAlign={"right"}>Olá,</UserNameColumnText>
          <UserNameColumnText>{user?.userName}</UserNameColumnText>
        </UserNameColumn>
        <Column>
          <StyledAvatar photoUrl={user?.photo} size={45} />
          <AvatarText textAlign={"center"} marginRight="0">R$: {balance}</AvatarText>
        </Column>
      </JustifyEndRow>
    );
  }

  return (
    <StyledHeader>
      <BrandWrapper>
        <Logo></Logo>
      </BrandWrapper>
      <StyledLinkContainer>
        {!logged ? <LoginRegisterButtons /> : isLoading ? <Skeleton variant="text" width={"30vw"} height={80} /> : <LoggedAvatar />}
      </StyledLinkContainer >
    </StyledHeader >
  );
}
