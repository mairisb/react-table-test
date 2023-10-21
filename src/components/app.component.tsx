import { Container } from "react-bootstrap";
import { CssModulesTest } from "./css-modules-test/css-modules-test";
import { NavigationBar } from "./navigation-bar.component";

export const App: React.FC = () => {
  return (
    <main>
      <NavigationBar className="mb-2" />
      <Container>
        <CssModulesTest />
        <p>Hello, world!</p>
      </Container>
    </main>
  );
};
