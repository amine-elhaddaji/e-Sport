import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";

import get from "lodash/get";

const Detail = () => {
  const { id } = useParams();
  const [team, setTeam] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL}/teams/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
      },
    })
      .then((result) => result.json())
      .then(
        (data) => setTeam(data),
        (error) => {
          console.log("error :>> ", error);
        }
      );
  }, []);
  return (
    <Card key={get(team, "id", "")} style={{ width: "18rem" }}>
      <Card.Img variant="top" src={get(team, "image_url", "")} />
      <Card.Body>
        <Card.Title>{team.name}</Card.Title>
        <Card.Text>Game : {get(team, "current_videogame.name", "")}</Card.Text>
        <Card.Text>
          {get(team, "players", []).map((player) => player.name + " ")}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Detail;
