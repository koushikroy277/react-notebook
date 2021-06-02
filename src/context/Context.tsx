import React, { createContext, useReducer, useState } from "react";
import { conReduce } from "./conReduce";

const initialState: any = {};
export const NoteContext = createContext(initialState);

interface initReduceInterface {
  title: string;
  description: string;
  textStyle: string;
  theme: string;
  align: string;
  bold: boolean;
  italic: boolean;
  underline: boolean;
  noteStart: boolean;
  noteList: any[];
}

interface Toast{
  add: boolean,
  edit: boolean,
}

const initState: initReduceInterface = {
  title: "",
  description: "",
  theme: 'Light',
  textStyle: 'normal',
  bold: false,
  italic: false,
  underline: false,
  align: "left",
  noteStart: false,
  noteList: [],
};

const Context: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(conReduce, initState);
  const [edit, setEdit] = useState<boolean>(false);
  const [toast, setToast] = useState<Toast>({
    add: false,
    edit: false,
  });

  const [noteActive, setNoteActive] = useState<boolean>(false);
  const [notes, setNotes] = useState<any>([]);

  const changeTheme = (color: string) => dispatch({
    type: 'changeTheme',
    payload: color
  })

  // Performing Dispatch Functions
  const addNotes = () =>
    dispatch({
      type: "addNotes",
    });
  
  const clearAll = () => dispatch({
    type: 'clearAll'
  })
  const deleteNotes = () => dispatch({
    type: 'deleteNotes',
    payload: notes
  })

  const startNotes = () =>
    dispatch({
      type: "startNotes",
    });

  const inputEdit = (field: string, value: string) =>
    dispatch({
      type: "inputEdit",
      payload: {
        field,
        value,
      },
    });
  
  const editNotes = () =>
    dispatch({
      type: "editNotes",
      payload: {
        notes,
        setNotes,
      },
    });

  return (
    <NoteContext.Provider
      value={{
        // useReducer state
        state,

        // Dispatch Functions
        addNotes,
        deleteNotes,
        startNotes,
        inputEdit,
        editNotes,
        changeTheme,
        clearAll,

        // useState state
        notes,
        setNotes,
        toast,
        setToast,
        edit,
        setEdit,
        noteActive,
        setNoteActive,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};

export default Context;
