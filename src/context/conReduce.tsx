import moment from "moment";

export const conReduce = (state: any, action: any) => {
  switch (action.type) {
    case "addNotes":
      if (state.title && state.description) {
        return {
          ...state,
          title: "",
          description: "",
          align: "left",
          bold: false,
          italic: false,
          underline: false,
          noteList: [
            ...state.noteList,
            {
              title: state.title,
              description: state.description,
              date: moment().format("MMMM Do YYYY, h:mm:ss a"),
              id: Math.random(),
            },
          ],
        };
      }

      return state;

    case "clearAll":
      return {
        ...state,
        title: "",
        description: "",
        noteList: [],
      };

    case "deleteNotes":
      const deleteList = state.noteList.filter(
        (note: any) => note.id !== action.payload.id
      );

      return { ...state, noteList: deleteList };

    case "editNotes":
      const selectedEdit = state.noteList.map((note: any) =>
        note.id === action.payload.notes.id ? action.payload.notes : note
      );

      return { ...state, noteList: selectedEdit };

    case "startNotes":
      return { ...state, noteStart: true };

    case "inputEdit":
      return { ...state, [action.payload.field]: action.payload.value };
    
    case "changeTheme":
      return { ...state, theme: action.payload };
    
    default:
      return state;
  }
};
