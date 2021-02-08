import "./App.css";
import React, { useState } from "react";
import { Card } from "./components/card/Card";
import video from "./assets/image.svg";

function App() {
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
            {/* <Card.FavoriteButton
              onClick={() => setIsActive(!isActive)}
              isActive={isActive}
            /> */}
            <Card.Menue
              isOpen={isOpen}
              onClick={() => setIsOpen(!isOpen)}
              menueItems={["Save", "Edit", "Preview"]}
              menueItemClick={() => console.log("hello")}
            />
          </Card.Footer>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
