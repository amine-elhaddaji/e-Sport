import React, { useState } from "react";

export const Context = React.createContext("game");

const Provider = (props) => {
  const { children } = props;

  const [game, setGame] = useState(localStorage.getItem("game") || "allGames");

  const onSetGame = ({ game }) => {
    localStorage.setItem("game", game);
    setGame(game);
  };

  return (
    <Context.Provider
      value={{
        game,
        onSetGame,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
