# React Sorcerer Take Home Test - Draft.js Editor

Live: [here](https://portel-assingment.vercel.app/)

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

The application is deployed on CodeSandbox. Please find the [CodeSandbox link here](https://codesandbox.io/p/github/bhagatpratik07/portel-assingment/master?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clqce6bcc0006356hjvf6nkqx%2522%252C%2522sizes%2522%253A%255B70%252C30%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clqce6bcc0002356hy0e7bfra%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clqce6bcc0004356hcrdrm4ma%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clqce6bcc0005356hpet54h9u%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B50%252C50%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clqce6bcc0002356hy0e7bfra%2522%253A%257B%2522id%2522%253A%2522clqce6bcc0002356hy0e7bfra%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clqce6bcb0001356ht9c6k36v%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252FREADME.md%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%255D%252C%2522activeTabId%2522%253A%2522clqce6bcb0001356ht9c6k36v%2522%257D%252C%2522clqce6bcc0005356hpet54h9u%2522%253A%257B%2522id%2522%253A%2522clqce6bcc0005356hpet54h9u%2522%252C%2522activeTabId%2522%253A%2522clqcen9wt00qj356hqrsr6fhx%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522TASK_PORT%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522port%2522%253A5173%252C%2522id%2522%253A%2522clqcen9wt00qj356hqrsr6fhx%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522path%2522%253A%2522%252F%2522%257D%255D%257D%252C%2522clqce6bcc0004356hcrdrm4ma%2522%253A%257B%2522id%2522%253A%2522clqce6bcc0004356hcrdrm4ma%2522%252C%2522activeTabId%2522%253A%2522clqce6eba0057356hrp0ifef2%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clqce6bcc0003356h0ftxswtp%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522TERMINAL%2522%252C%2522shellId%2522%253A%2522clqce6edj000ueeg65l0w0dhx%2522%257D%252C%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522id%2522%253A%2522clqce6eba0057356hrp0ifef2%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%252C%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522CSB_RUN_OUTSIDE_CONTAINER%253D1%2520devcontainer%2520templates%2520apply%2520--template-id%2520%255C%2522ghcr.io%252Fdevcontainers%252Ftemplates%252Fjavascript-node%255C%2522%2520--template-args%2520%27%257B%257D%27%2520--features%2520%27%255B%255D%27%2522%252C%2522id%2522%253A%2522clqcek4tn00a7356hw0kwltzt%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%255D%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D).
