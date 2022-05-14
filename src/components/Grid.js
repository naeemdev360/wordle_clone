import React from "react";
import Row from "./Row";

function Grid({ currentGuess, guesses, turn, isIncomplete }) {
  return (
    <div>
      {guesses.map((g, i) =>
        i === turn ? (
          <Row
            currentGuess={currentGuess}
            key={i}
            isIncomplete={isIncomplete}
          />
        ) : (
          <Row guess={g} key={i} />
        )
      )}
    </div>
  );
}

export default Grid;
