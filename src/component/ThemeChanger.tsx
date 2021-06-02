import React, { FC, Fragment, useContext } from "react";
import './ThemeChanger.scss';

import { IoColorFilter } from "react-icons/io5";

import { NoteContext } from '../context/Context';

const ThemeChanger: FC = () => {
  const { changeTheme, state } = useContext(NoteContext);
  
  const themeColorList = [
    {
      class: "themePalette",
      name: "Light",
    },
    {
      class: "themePalette2",
      name: "Dark",
    },
    {
      class: "themePalette3",
      name: "SolarizedLight",
    },
    {
      class: "themePalette4",
      name: "SolarizedDark",
    },
  ];

  return (
    <>
      <div className="themeContainer">
        <div className="themeBtn">
          <h1 className={state.theme === 'Dark' || state.theme === 'SolarizedDark' ? 'change' : 'noChange'}>{state.theme}</h1>
          <IoColorFilter className="switch" size={30} />
        </div>
        <div className="themeWrapper">
          <div className="themeMenu">
            {themeColorList.map((d: any, i: any) => (
              <Fragment key={i}>
                <div className="themeList" onClick={() => changeTheme(d.name)}>
                  <div className={d.class} />
                  <h1>{d.name}</h1>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ThemeChanger;
