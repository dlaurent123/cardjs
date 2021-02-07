import "./App.css";
import { Card } from "./components/Card";
import video from "./assets/image.svg";
import favouriteSvg from "./assets/Star.svg";
import { useState } from "react";

function App() {
  const [test, setTest] = useState(null);
  return (
    <div className="App">
      <Card>
        <Card.Media controls src={video} />
        <Card.Body>
          <Card.Heading
            className="truncate"
            text={"Important Announcement - Pass the test"}
          />
          <Card.SubHeading text={"Last edited 4 hours ago"} />
          <Card.Text
            text={
              "A card is a flexible and extensible content container. It includes a wide variety of content, thumbnails, video, images, subheadings, actions, and content."
            }
          />
          <Card.Footer>
            <Card.FavouriteButton
              handleClick={({ isActive }) => console.log(isActive)}
              src={favouriteSvg}
            />
          </Card.Footer>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
