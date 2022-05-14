import React from "react";

function Row({ guess, currentGuess, isIncomplete }) {
  if (guess) {
    return (
      <div className="row past">
        {guess.map((l, i) => (
          <div className={l.color} key={i}>
            {l.key}
          </div>
        ))}
      </div>
    );
  }
  if (currentGuess) {
    let letters = currentGuess.split("");
    // if (letters.length > 5) letters = letters.slice(0, 5);
    return (
      <div className={`row ${isIncomplete ? "jerk" : ""} current`}>
        {letters.map((l, i) => (
          <div className="filled" key={i}>
            {l}
          </div>
        ))}
        {[...Array(5 - letters.length)].map((_, i) => (
          <div key={i}></div>
        ))}
      </div>
    );
  }
  return (
    <div className="row">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Row;
