import React, { FC, useContext, useState } from "react";
import "./EditEditor.scss";

import { AiOutlineSave, AiFillEdit, AiOutlineDelete } from "react-icons/ai";

import { NoteContext } from "../context/Context";
import ThemeChanger from "./ThemeChanger";

interface IProps {
  toast: any;
  setToast: any;
  toastDisappear: any;
  handleKeyDown: any;
}

const EditEditor: FC<IProps> = (props) => {
  const {
    state,
    setEdit,
    setNoteActive,
    editNotes,
    deleteNotes,
    notes,
    setNotes,
  } = useContext(NoteContext);

  const [tag, setTag] = useState({
    new: false,
    save: false,
    delete: false,
  });

  const iconSize = 22;

  return (
    <>
      <div className={`noteEditWrap ${state.theme}`}>
        <div className="noteHeader">
          <div className="btnContain">
            <div
              className="btnWrapper"
              onMouseEnter={() => setTag({ ...tag, new: true })}
              onMouseLeave={() => setTag({ ...tag, new: false })}
              onClick={() => {
                setEdit(false);
                setNoteActive(false);
              }}
            >
              <AiFillEdit size={iconSize} />
            </div>
            <div className={tag.new ? "downTag show" : "downTag"}>New</div>
          </div>
          <div className="btnContain">
            <div
              className="btnWrapper"
              onClick={editNotes}
              onMouseEnter={() => setTag({ ...tag, save: true })}
              onMouseLeave={() => setTag({ ...tag, save: false })}
            >
              <AiOutlineSave size={iconSize} />
            </div>
            <div className={tag.save ? "downTag show" : "downTag"}>Save</div>
          </div>
          <div className="btnContain">
            <div
              className="btnWrapper"
              onMouseEnter={() => setTag({ ...tag, delete: true })}
              onMouseLeave={() => setTag({ ...tag, delete: false })}
              onClick={() => {
                deleteNotes();
                setEdit(false);
              }}
            >
              <AiOutlineDelete size={iconSize} />
            </div>
            <div className={tag.delete ? "downTag show" : "downTag"}>
              Delete
            </div>
          </div>
            <ThemeChanger />
        </div>
        <div className="mainNote">
          <textarea
            name="title"
            id="title"
            placeholder="Untitled..."
            autoFocus
            value={notes.title}
            onChange={(e) => {
              e.preventDefault();
              props.handleKeyDown(e);
              setNotes({
                ...notes,
                [e.target.name]: e.target.value,
              });
            }}
          />
          <textarea
            name="description"
            id="des"
            rows={200}
            placeholder="No Description..."
            value={notes.description}
            onInput={props.handleKeyDown}
            onChange={(e) => {
              e.preventDefault();
              props.handleKeyDown(e);
              setNotes({
                ...notes,
                [e.target.name]: e.target.value,
              });
            }}
          />
        </div>
      </div>
    </>
  );
};

export default EditEditor;
