import AddCircle from "@mui/icons-material/AddCircle";
import { Button, styled } from "@mui/material";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { useRouter } from "next/router";

export default function CreateBetButton() {

  const router = useRouter();
  
  const StyledBottomNavigation = styled(BottomNavigation)({
    backgroundColor: "transparent",
    color: "white",
    height: "80px"
  });

  const StyledIcon = styled(AddCircle)({
    backgroundColor: "#3308FF",
    background: "transparent",
    color: "white"
  });

  return (
    <div>
      {/* <BottomNavigationAction 
        label="Criar Aposta"

        icon={<StyledIcon />} /> */}
        <Button 
          style={{margin: "20px 0 20px 0",}} 
          variant="contained" 
          size="small"
          onClick={_e => router.push("create-bet")}>
          Criar bet
        </Button>
    </div>
  );
}
