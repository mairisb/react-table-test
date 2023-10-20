import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { NavigationBar } from "./navigation-bar.component";

export const App: React.FC = () => {
  return (
    <main>
      <NavigationBar className="mb-2" />
      <Container>
        <p>Hello, world!</p>
      </Container>
    </main>
  );
};
