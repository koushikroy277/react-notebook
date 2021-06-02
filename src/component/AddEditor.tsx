import React, { FC, useContext } from "react";
import "./AddEditor.scss";

import { NoteContext } from "../context/Context";
import ThemeChanger from "./ThemeChanger";

interface IProps {
  toast: any;
  setToast: any;
  toastDisappear: any;
  handleKeyDown: any;
}

const AddEditor: FC<IProps> = (props) => {
  const { state, addNotes, inputEdit } = useContext(NoteContext);

  return (
    <>
      <div className={`noteAddWrap ${state.theme}`}>
        {/* Heading Part of the Note */}

        <div className="noteHeader">
          <button
            className="addButton"
            onClick={() => {
              if (state.title && state.description) {
                addNotes();
                props.setToast({
                  ...props.toast,
                  add: true,
                });
              } else {
                return state;
              }
              setTimeout(props.toastDisappear, 2000);
            }}
          >
            Add Notes
          </button>
          <ThemeChanger />
        </div>

        {/* Main Editing Part */}

        <div className="mainNote">
          <textarea
            name="title"
            id="title"
            placeholder="Untitled..."
            autoFocus
            value={state.title}
            onChange={(e) => {
              e.preventDefault();
              props.handleKeyDown(e);
              inputEdit(e.target.name, e.target.value);
            }}
          />
          <textarea
            name="description"
            id="des"
            placeholder="No Description..."
            value={state.description}
            onChange={(e) => {
              e.preventDefault();
              props.handleKeyDown(e);
              inputEdit(e.target.name, e.target.value);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default AddEditor;
