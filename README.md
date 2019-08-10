# react-accessible-select-box

> A custom dropdown implementation in React that is fully accessible.

[![NPM](https://img.shields.io/npm/v/react-accessible-select-box.svg)](https://www.npmjs.com/package/react-accessible-select-box) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Important things to note

1. This is not a full replacement to the browser-default dropdown, it is rather a custom implementation of it which allows developers to stylize the dropdown menu.
2. Out of the box, there won't be any styles, it is just a button and a list of unordered list-items. It is up to the developer to stylize the menu and button based on their requirement.
3. If they want a starter styling, they may include a sample stylesheet (as mentioned below).
4. Developer may find appropriate classes getting added to the menu and button, using which they may stylize the dropdown.

## Install

```bash
npm install --save react-accessible-select-box
```

## Usage

```jsx
import React, { Component } from 'react'

import Select from 'react-accessible-select-box'

class Example extends Component {
  render () {
    return (
      <Select />
    )
  }
}
```

## Sample styles

If you want starter styles to the dropdown menu, you may use the below import to use the default styles.

```
import './node_modules/react-accessible-select-box/dist/select-box.css';
```

## Example

Create a [StackBlitz demo page](https://react-accessible-select-box.stackblitz.io/).
## License

MIT © [ChaituKNag](https://github.com/ChaituKNag)
