# super-selector
google-chrome extension for getting elements path on click, with cross-extension API

--------
### Scenario

- activate selection (using button in the extension popup menu)
  - transmit selection message
  - receive selection message in `background.js` script
- inject content.js script into current tab 
- selection of an element on page
  - click event
- transmit message with selected element 

### in short

- popup
  - activate
  - transmit message.select
- content
  - select an element
  - transmit message.selected via predefined API
- pupup
  - display path to selected element
