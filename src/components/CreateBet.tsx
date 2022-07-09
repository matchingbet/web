import AddCircle from "@mui/icons-material/AddCircle";
import { styled } from "@mui/material";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

export default function CreateBet() {
  
  const StyledBottomNavigation = styled(BottomNavigation)({
    backgroundColor: "#3308FF",
    marginTop: "50px",
  });

  const StyledIcon = styled(AddCircle)({
    backgroundColor: "#3308FF",
    color: "white",
    background: "transparent",
  });

  return (
    <StyledBottomNavigation showLabels>
      <BottomNavigationAction 
        label="Criar Aposta" 
        icon={<StyledIcon />} />
    </StyledBottomNavigation>
  );
}
