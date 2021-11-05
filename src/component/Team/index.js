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
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card
        key={get(team, "id", "")}
        style={{
          width: "10cm",
          height: "13cm",
          position: "absolue",
          bottom: "10%",
          backgroundColor: "#00000029",
          boxShadow: "rgba(0, 0, 0, 0.4) 3px 3px 3px 3px",
        }}
      >
        <Card.Img variant="top" src={get(team, "image_url", "")} />
        <Card.Body>
          <Card.Title>{team.name}</Card.Title>
          <Card.Text>
            <strong>Game : </strong>
            {get(team, "current_videogame.name", "")}
          </Card.Text>
          <Card.Text>
            {get(team, "players", []).map((player) => player.name + " ")}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Detail;
