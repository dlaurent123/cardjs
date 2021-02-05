import "./App.css";
import { Card } from "./components/Card";
import { Reset } from "styled-reset";
function App() {
  return (
    <div className="App">
      <Reset />
      <Card className="card"></Card>
    </div>
  );
}

export default App;
