import React, { useContext, FC } from "react";
import "./SideBar.scss";
import { CgNotes } from "react-icons/cg";

import { NoteContext } from "../context/Context";

const SideBar: FC = () => {
  const {
    state,
    notes,
    setNotes,
    setEdit,
    noteActive,
    setNoteActive,
    clearAll,
  } = useContext(NoteContext);

  return (
    <>
      <div className="sidebar">
        <div className="sideHead">
          <div className="sideTitle">
            <CgNotes size={45} className="sideLogo" />
            <h1>Notes</h1>
          </div>
          {state.noteList.length >= 1 && <button onClick={() => {
            clearAll();
            setEdit(false);
          }}>Clear All</button>}
        </div>
        <div className="sideNotes">
          {state.noteList
            .slice(0)
            .reverse()
            .map((d: any, i: any) => (
              <div
                className="listWrapper"
                key={i}
                onClick={() => {
                  setNoteActive(true);
                  setEdit(true);
                  setNotes(d);
                }}
              >
                <div
                  className={
                    notes.id === d.id && noteActive
                      ? "noteList active"
                      : "noteList"
                  }
                >
                  <p>Added on {d.date}</p>
                  <h1>{d.title}</h1>
                  <h2>{d.description.substr(0, 30) + "..."}</h2>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default SideBar;
