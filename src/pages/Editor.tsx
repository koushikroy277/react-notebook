import React, { useContext, FC } from "react";
import "./Editor.scss";
import loadable from "@loadable/component";
import { AiOutlineFileDone } from "react-icons/ai";

import { NoteContext } from "../context/Context";
import StartSvg from '../component/StartSvg';

const AddEditor = loadable(() => import("../component/AddEditor"));
const EditEditor = loadable(() => import("../component/EditEditor"));

const Editor: FC = (): JSX.Element => {
  const {
    state,
    edit,
    startNotes,
    setNoteActive,
    setEdit,
    toast,
    setToast,
  } = useContext(NoteContext);

  const iconSize = 30;
  const toastDisappear = () => setToast({ ...toast, add: false });
  
  const handleKeyDown = (e: any) => {
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const Props = {
    toast,
    setToast,
    toastDisappear,
    handleKeyDown,
  };

  if (state.noteStart) {
    return (
      <>
        <div className="noteContainer">
          {!edit ? <AddEditor {...Props} /> : <EditEditor {...Props} />}

          <div className={toast.add ? "toastNoti active" : "toastNoti"}>
            <div className="toastWrapper">
              <AiOutlineFileDone size={iconSize} />
              <h1>Your Note is saved</h1>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="startTemplate">
          <div className="templateWrapper">
            <div className="imgWrapper">
              <StartSvg />
            </div>
            <h1>No Notes Yet</h1>
            <button
              onClick={() => {
                startNotes();
                setEdit(false);
                setNoteActive(false);
              }}
            >
              Start Writing
            </button>
          </div>
        </div>
      </>
    );
  }
};

export default Editor;
