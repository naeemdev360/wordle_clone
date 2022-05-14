import React, { useEffect, useState } from "react";
import { data } from "../data/db";
function Keypad({ usedKeys, handleKeyUp }) {
  const [letters, setLetters] = useState(null);

  useEffect(() => {
    setLetters(data.letters);
  }, []);
  const onKeypadClick = (letter) => {
    handleKeyUp({ key: letter });
  };
  return (
    <div className="keypad">
      <div>
        {letters &&
          letters.slice(0, 10).map((l) => {
            return (
              <div
                onClick={onKeypadClick.bind(null, l.key)}
                className={usedKeys[l.key]}
                key={l.key}
              >
                {l.key}
              </div>
            );
          })}
      </div>
      <div>
        {letters &&
          letters.slice(10, 19).map((l) => {
            return (
              <div
                onClick={onKeypadClick.bind(null, l.key)}
                className={usedKeys[l.key]}
                key={l.key}
              >
                {l.key}
              </div>
            );
          })}
      </div>
      <div>
        {letters &&
          letters.slice(19, letters.length).map((l) => {
            if (l.key === "Enter") {
              return (
                <div
                  onClick={onKeypadClick.bind(null, "Enter")}
                  className={l.key}
                  key={l.key}
                >
                  {l.key}
                </div>
              );
            }
            if (l.key === "Backspace") {
              return (
                <div
                  onClick={onKeypadClick.bind(null, "Backspace")}
                  className={l.key}
                  key={l.key}
                >
                  <img src="/clear.png" alt="clear" />
                </div>
              );
            }
            return (
              <div
                onClick={onKeypadClick.bind(null, l.key)}
                className={usedKeys[l.key]}
                key={l.key}
              >
                {l.key}
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Keypad;
