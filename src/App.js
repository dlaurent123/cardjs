import "./App.css";
import { Card } from "./components/Card";
function App() {
  return (
    <div className="App">
      <Card>
        <Card.Body>
          <Card.Heading
            className="truncate"
            text={"Important announcement- hello world"}
          />
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
