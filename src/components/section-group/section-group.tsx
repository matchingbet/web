import { Container } from "@mui/material";
import SectionTitle from "./section-title";

declare interface SectionProps {
  title?: string;
  children?: any;
}

export default function SectionGroup(props: SectionProps) {
  return (
    <Container>
      <SectionTitle title={props.title} />
      {props.children}
    </Container>
  );
}
