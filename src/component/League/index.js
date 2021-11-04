import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import moment from "moment";
import get from "lodash/get";
import isNil from "lodash/isNil";

const Detail = () => {
  const { id } = useParams();
  const { push } = useHistory();
  const [league, setLeague] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL}/leagues/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
      },
    })
      .then((result) => result.json())
      .then(
        (data) => setLeague(data),
        (error) => {
          console.log("error :>> ", error);
        }
      );
  }, []);
  return (
    <Card key={get(league, "id", "")} style={{ width: "18rem" }}>
      <Card.Img variant="top" src={get(league, "image_url", "")} />
      <Card.Body>
        <Card.Title>{league.name}</Card.Title>
        <Card.Text>
          Game : {get(league, "videogame.name", "")}-
          {get(league, "videogame.current_version", "")}
        </Card.Text>
        {get(league, "series", []).map((element) => (
          <Card.Text>
            From {moment(element.begin_at).format("DD/MM/YYYY HH:MM")}-
            {moment(element.end_at).format("DD/MM/YYYY HH:MM")}
            {!isNil(element.winner_id) && (
              <Button onClick={() => push(`/teams/${element.winner_id}`)}>
                WINNER
              </Button>
            )}
          </Card.Text>
        ))}
      </Card.Body>
    </Card>
  );
};

export default Detail;
