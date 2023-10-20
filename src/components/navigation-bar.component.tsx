import { HTMLAttributes, PropsWithChildren } from "react";
import { Container, Navbar } from "react-bootstrap";

interface NavigationBarProps extends HTMLAttributes<HTMLDivElement> {}

export const NavigationBar: React.FC<NavigationBarProps> = (props) => (
  <Navbar className={`bg-primary ${props.className}`}>
    <Container>
      <Navbar.Brand className="text-white" href="#home">
        Testing Grounds
      </Navbar.Brand>
    </Container>
  </Navbar>
);
