import { Container } from "react-bootstrap";
import { Child } from "./child/child-another.component";
import { NavigationBar } from "./navigation-bar.component";

export const App: React.FC = () => {
  return (
    <main>
      <NavigationBar className="mb-2" />
      <Container>
        <Child />
        <p>Hello, world!</p>
      </Container>
    </main>
  );
};
