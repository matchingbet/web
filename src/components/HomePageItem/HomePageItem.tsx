import { Container } from "@mui/material";
import SectionTitle from "../SectionTitle";

declare interface SectionProps {
  title?: string;
  children?: any;
  showSeeMore?: boolean
  seeMoreHandler?: any
}

export default function SectionGroup(props: SectionProps) {
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
