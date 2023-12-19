# React Sorcerer Take Home Test - Draft.js Editor

Features

1. Draft.js Editor
   The editor is built using Draft.js, allowing users to input text with different formatting styles based on certain conditions.

- Typing # as the first character in a line and pressing space creates a heading format for the text.
- Typing \* as the first character in a line and pressing space makes the text bold.
- Typing \*\* as the first characters in a line and pressing space makes the text red.
- Typing \*\*\* as the first characters in a line and pressing space underlines the text.

2.  Save Functionality

- The Save button allows users to persist the content of the editor into local storage. On page refresh, the saved information is loaded back into the editor.

3. Known Issues

- The functionality to make # disappear on pressing space is not implemented yet.
- The conditions for handling \* symbols need improvement.

4. Improvements

- To address the known issues, further modifications are needed in the handleChange function, particularly in the handling of # and \* symbols.

The application is deployed on CodeSandbox. Please find the CodeSandbox link here.
