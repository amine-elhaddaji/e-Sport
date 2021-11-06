import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import moment from "moment";
import get from "lodash/get";
import isNil from "lodash/isNil";
import im from "../../images/league.jpg";

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
    <div
      style={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Card
        key={get(league, "id", "")}
        style={{
          width: "10cm",
          height: "13cm",
          position: "absolue",
          bottom: "10%",
          backgroundColor: "#00000029",
          boxShadow: "rgba(0, 0, 0, 0.4) 3px 3px 3px 3px",
        }}
      >
        <Card.Img
          variant="top"
          src={get(league, "image_url", "") ? get(league, "image_url", "") : im}
          style={{ height: "6cm" }}
        />
        <Card.Body>
          <Card.Title>{league.name}</Card.Title>
          <Card.Text>
            <strong> Game : </strong> {get(league, "videogame.name", "")}-
            {get(league, "videogame.current_version", "")}
          </Card.Text>
          {get(league, "series", []).map((element) => (
            <Card.Text>
              <strong>From : </strong>
              {moment(element.begin_at).format("DD/MM/YYYY HH:MM")}
              <br /> <strong>To : </strong>
              {moment(element.end_at).format("DD/MM/YYYY HH:MM")}
              <br />
              {!isNil(element.winner_id) && (
                <Button
                  class="btn btn-outline-dark"
                  onClick={() => push(`/teams/${element.winner_id}`)}
                >
                  WINNER
                </Button>
              )}
            </Card.Text>
          ))}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Detail;
