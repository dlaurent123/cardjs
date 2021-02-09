# Getting Started with Card Component

# [Example Site](https://cardjs-test.netlify.app)

Created with Styled Components

import {Card} from "src/components/card/Card.js"

A card is a flexible and extensible content container. It includes a wide variety of content, thumbnails, video, images, subheadings, actions, and content.

# Card Api

##

### `Card`

`Card` is a component that renders a div that serves as the top level component for the Card module.

**Props:**

- All html attributes

##

### `Card.Body`

`Card.Body` is a component that renders a div that serves as a container for all of the cards contents.

**Props:**

- All html attributes.

##

### `Card.Heading`

`Card.Heading` is a simple component that renders a header element to display the heading.

**Props:**

- `text` = `String`
- All html attributes.

##

### `Card.SubHeading`

`Card.SubHeading` is a simple component that renders a header element to display the sub-heading.

**Props:**

- `text` = `String`
- All html attributes.

##

### `Card.Media`

`Card.Media` is a simple component that has the ability to render all image types including SVG and video.

**Props:**

- `isVideo` = `Boolean` default value `false`
- `src` = `String`
- All html attributes

##

### `Card.Text`

`Card.Text` is a simlple component that renders a p tag to display text.

**Props:**

- `text` = `String`
- All html attributes.

##

### `Card.Footer`

`Card.Footer` is a simple component that renders a footer tag that which serves as a container for the Card.FovoriteButton and the Card.Menue.

**Props:**

- All html attributes.

##

### `Card.FavoriteButton`

`Card.FavoriteButton` is a simple component that renders a button that can be toggled between active and inactive.

**Props:**

- `isActive` = `boolean` defaults to `false`
- All html attributes.

##

### `Card.Menue`

`Card.Menue` is a simple component that renders a menue button that can be toogled between opened and closed. When open the menue will display the menue actions which is passed through via the menueActions prop.

**Props:**

- `isOpen` = `boolean` defaults to `false`
- `menueActions` = array of obejects with `name` and `clickHandler` keys.
- All html attributes.
