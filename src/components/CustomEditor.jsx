import { useState, useRef, useEffect } from "react";
import {
  Editor,
  EditorState,
  Modifier,
  RichUtils,
  convertFromRaw,
  convertToRaw,
} from "draft-js";
import "draft-js/dist/Draft.css";
import "../styles/Editor.css";

const CustomEditor = () => {
  const styleMap = {
    RED_TEXT: {
      color: "red",
    },
  };
  const [editorState, setEditorState] = useState(() => {
    // Load editor state from local storage
    const savedContent = localStorage.getItem("editorContent");
    return savedContent
      ? EditorState.createWithContent(convertFromRaw(JSON.parse(savedContent)))
      : EditorState.createEmpty();
  });

  const editorRef = useRef(null);

  const handleSave = () => {
    // Save editor content to local storage
    const contentState = editorState.getCurrentContent();
    const contentJSON = JSON.stringify(convertToRaw(contentState));
    localStorage.setItem("editorContent", contentJSON);
  };

  const handleKeyCommand = (command) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      setEditorState(newState);
      return "handled";
    }

    return "not-handled";
  };

  const handleChange = (newEditorState) => {
    const selection = newEditorState.getSelection();
    const currentContent = newEditorState.getCurrentContent();
    const currentBlock = currentContent.getBlockForKey(selection.getStartKey());
    const blockText = currentBlock.getText();
    const startOffset = selection.getStartOffset();

    // Rest on ENTER
    if (selection.isCollapsed() && selection.getStartOffset() === 0) {
      // Reset style when Enter is pressed at the beginning of a block
      setEditorState(RichUtils.toggleBlockType(newEditorState, "unstyled"));
      if (newEditorState.getCurrentInlineStyle().has("BOLD")) {
        setEditorState(RichUtils.toggleInlineStyle(newEditorState, "BOLD"));
      }
      if (newEditorState.getCurrentInlineStyle().has("UNDERLINE")) {
        setEditorState(
          RichUtils.toggleInlineStyle(newEditorState, "UNDERLINE")
        );
      }
      if (newEditorState.getCurrentInlineStyle().has("RED_TEXT")) {
        setEditorState(RichUtils.toggleInlineStyle(newEditorState, "RED_TEXT"));
      }
      return;
    }

    // Reset on new line
    if (
      selection.getStartOffset() === 0 &&
      selection.getStartKey() !== currentContent.getFirstBlock().getKey()
    ) {
      // Reset style when changing to a new line
      setEditorState(RichUtils.toggleBlockType(newEditorState, "unstyled"));
      if (newEditorState.getCurrentInlineStyle().has("BOLD")) {
        setEditorState(RichUtils.toggleInlineStyle(newEditorState, "BOLD"));
      }
      if (newEditorState.getCurrentInlineStyle().has("UNDERLINE")) {
        setEditorState(
          RichUtils.toggleInlineStyle(newEditorState, "UNDERLINE")
        );
      }
      if (newEditorState.getCurrentInlineStyle().has("RED_TEXT")) {
        setEditorState(RichUtils.toggleInlineStyle(newEditorState, "RED_TEXT"));
      }
      return;
    }

    // # -> Heading
    if (
      startOffset > 0 &&
      blockText[startOffset - 1] === "#" &&
      selection.isCollapsed()
    ) {
      setEditorState(RichUtils.toggleBlockType(newEditorState, "header-one"));
      return;
    }

    // *** -> underline
    if (
      startOffset > 2 &&
      blockText[startOffset - 3] === "*" &&
      blockText[startOffset - 2] === "*" &&
      blockText[startOffset - 1] === "*" &&
      selection.isCollapsed()
    ) {
      setEditorState(RichUtils.toggleInlineStyle(newEditorState, "UNDERLINE"));
      return;
    }

    // ** -> red text
    if (
      startOffset > 1 &&
      blockText[startOffset - 2] === "*" &&
      blockText[startOffset - 1] === "*" &&
      selection.isCollapsed()
    ) {
      setEditorState(RichUtils.toggleInlineStyle(newEditorState, "RED_TEXT"));
      return;
    }

    // * -> bold
    if (
      startOffset > 0 &&
      blockText[startOffset - 1] === "*" &&
      selection.isCollapsed()
    ) {
      setEditorState(RichUtils.toggleInlineStyle(newEditorState, "BOLD"));
      return;
    }

    setEditorState(newEditorState);
  };

  const focusEditor = () => {
    editorRef.current.focus();
  };

  // load text from local storage
  useEffect(() => {
    const savedContent = localStorage.getItem("editorContent");

    if (savedContent) {
      const contentState = convertFromRaw(JSON.parse(savedContent));
      const newEditorState = EditorState.createWithContent(contentState);
      setEditorState(newEditorState);
    }
  }, []);

  return (
    <div onClick={focusEditor} className="container">
      <div className="header">
        <h2 className="heading">
          Demo editor by{" "}
          <a
            href="https://www.linkedin.com/in/pratik-bhagat07/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Pratik Bhagat
          </a>
        </h2>
        <button className="save-button" onClick={handleSave}>
          Save
        </button>
      </div>

      <div className="editor-container">
        <Editor
          editorState={editorState}
          onChange={handleChange}
          handleKeyCommand={handleKeyCommand}
          ref={editorRef}
          placeholder="Type here..."
          customStyleMap={styleMap}
        />
      </div>
    </div>
  );
};

export default CustomEditor;

// REMOVE THE SYMBOLS

/* 
 // Check if the change is due to a space
    if (
      startOffset > 0 &&
      blockText[startOffset - 1] === " " &&
      selection.isCollapsed()
    ) {
      const spaceIndex = blockText.lastIndexOf(" ", startOffset - 2) + 1;
      const appliedStyle = currentBlock.getInlineStyleAt(spaceIndex);
      const newSelection = selection.merge({
        anchorOffset: spaceIndex,
        focusOffset: startOffset,
      });

      // Apply the style to the block/line
      let updatedEditorState = EditorState.setInlineStyleOverride(
        newEditorState,
        appliedStyle,
        newSelection
      );

      // Remove the space character
      const contentState = updatedEditorState.getCurrentContent();
      const newContentState = Modifier.replaceText(
        contentState,
        newSelection,
        "",
        null,
        appliedStyle
      );

      updatedEditorState = EditorState.push(
        updatedEditorState,
        newContentState,
        "apply-entity"
      );

      setEditorState(updatedEditorState);
      return;
    }
*/
