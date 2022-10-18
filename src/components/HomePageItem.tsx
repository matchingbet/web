import { Container } from "@mui/material";
import SectionTitle from "../containers/SectionTitle";
import { ISectionProps } from "../types/SectionProps";

export default function SectionGroup(props: ISectionProps) {
  return (
    <Container>
      <SectionTitle 
        title={props.title} 
        showSeeMore={props.showSeeMore} 
        seeMoreHandler={props.seeMoreHandler} />
      {props.children}
    </Container>
  );
}
