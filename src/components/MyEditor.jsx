import React, { useState } from "react";
import { Editor, EditorState, RichUtils, getDefaultKeyBinding } from "draft-js";

const MyEditor = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const handleChange = (newEditorState) => {
    // Extract the current block text
    const contentState = newEditorState.getCurrentContent();
    const selectionState = newEditorState.getSelection();
    const currentBlock = contentState.getBlockForKey(
      selectionState.getStartKey()
    );
    const blockText = currentBlock.getText();

    // Check for patterns and apply styles
    if (blockText.endsWith("# ")) {
      newEditorState = RichUtils.toggleBlockType(newEditorState, "header-one");
    } else if (blockText.endsWith("* ")) {
      newEditorState = RichUtils.toggleInlineStyle(newEditorState, "BOLD");
    } else if (blockText.endsWith("** ")) {
      newEditorState = RichUtils.toggleInlineStyle(newEditorState, "COLOR-RED");
    } else if (blockText.endsWith("*** ")) {
      newEditorState = RichUtils.toggleInlineStyle(newEditorState, "UNDERLINE");
    }

    // Update the editor state
    setEditorState(newEditorState);
  };

  // Override key bindings to prevent default behavior for certain keys
  const keyBindingFn = (e) => {
    if (e.key === " ") {
      return "space";
    }
    return getDefaultKeyBinding(e);
  };

  return (
    <div>
      <Editor
        editorState={editorState}
        onChange={handleChange}
        keyBindingFn={keyBindingFn}
      />
    </div>
  );
};

export default MyEditor;
