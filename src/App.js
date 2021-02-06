import "./App.css";
import { Card } from "./components/Card";
function App() {
  return (
    <div className="App">
      <Card>
        <Card.Body>
          <Card.Heading
            className="truncate"
            text={"Important Announcement - hello world"}
          />
          <Card.SubHeading text={"Last edited 4 hours ago"} />
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
