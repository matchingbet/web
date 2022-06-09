import AddCircle from "@mui/icons-material/AddCircle";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { styled } from "@mui/material";
import { fontSize } from "@mui/system";

export default function CreateBet() {
  const StyledBottomNavigation = styled(BottomNavigation)({
    backgroundColor: "#3308FF",
  });

  const StyledIcon = styled(AddCircle)({
    backgroundColor: "#3308FF",
    color: "white",
    fontSize: "5rem",
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
