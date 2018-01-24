# Dynamic Styled Buttons
#### react button components built using styled-components

This is a small library built to add just a couple small buttons into react that are built on the foundation of Styled Components. The goal of this project is to make it easier for you to import and then `@extend` the styles to fit your needs, rather than having to build the styled-components yourself, as well as providing some nice defaults.

##Installation

To install dynamic-styled-button, use yarn or npm in your project directory
```
npm install dynamic-styled-buttons
yarn add dynamic-styled-buttons
```

You will also want to install `styled-components` to be able to customize and make buttons fit your needs.

##Current Buttons

Currently, we have these buttons available for use.

* Button
* RoundedButton
* SquareButton

The library is starting off comparitively small, but we can and will add buttons as time goes on. Currently each button, when hovered will appear to move "up" the page like it is raised and then will move "down" when clicked or active. This is the element that I like to use most often in my designs as a default, but this can be easily changed to fit your needs.

##Customization

Most likely, you won't want to be using the default colors, and instead will want to have your buttons be customized to fit the needs of your application. You likely want to change the background and then text color and font, maybe the font-size, or maybe even want to change the hover and active animations. All of this is easily possible with the addition of extending styled-components. You can read all about it on [Styled Components Reference](https://www.styled-components.com/docs) but here is an example of how you might implement and extended `Button`

```javascript

import styled from 'styled-components'
import Button from 'dynamic-styled-buttons';

const MyCoolButton = Button.extend`
  background: aqau;
  color: white;
`

export default MyCoolButton;
```

This will extend the `Button` class to have the colors that you want in to use in your application. Then you can just import your own version of the button into whatever part of the application you want to use it will include most of the parts of `Button` with the extended styles you specified.

##Clickable Animations

There are tons of ways to animate buttons in react based on the `onClick` functionality. The way that I found easiest was to use CSS classes on top of styled-components and using React to add and subtract the animation classes. 

I included a stylesheet in `dynamic-styled-buttons` that can be accessed at the path `dynamic-styled-buttons/lib/styles/animation-classes.css` with an import statement in your component. Current implemented general purpose animations available are...

* rotate-180
* rotate-neg-180
* rotate-360
* rotate-neg-360

each class has a `--c` and `--nc` specifying a clicked and a not-clicked transform position.

Below is a simple example of how you might implement a `Button` that rotates 180 degrees when clicked and rotates back to 0 deg when clicked again.

```javascript
import React, { Component } from 'react';
import {Button} from 'react-dynamic-buttons';

import 'react-dynamic-buttons/lib/styles/animation-classes.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    }
    this.invertClicked = this.invertClicked.bind(this);

  }
  invertClicked()  {
    console.log(this.state.clicked)
    this.setState({
      clicked: !this.state.clicked
    })
  }

  getClass() {
    if (this.state.clicked) {
      return "rotate-180--c";
    } else{
      return "rotate-180--nc";
    }
  }

  render() {
    return (
      <div className="App">
        <Button onClick={this.invertClicked} className={this.getClass()} > This Button Rotates </Button>
      </div>

    );
  }
}

export default App;
```

This is but one implementation of how you could implement a clickable CSS class addition. Its up to you to create and use the Button as you think will best fit into your application

##Future Work

The intention of the work was to start with Buttons built using only `styled-components` directly to make it easier to use these components with any other `styled` components you may already have in your application. As such, none of the elements are packaged inside of a React class and it retains all the properties of a styled-component (such as whitelisted props, using styled-component helps, etc...

Future development will see the addition of more specific buttons and animations (such as a menu button that uses particular icons and animations) that will be built using styled-components and React Components.

##Authors

* Brady Sutton - *original author* - @bsutt123

##Acknowledgements 

* The developers who worked on [`styled-components`](www.styled-components.com) because lets be real, they are the real heros here.

