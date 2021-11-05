import React, { useEffect, useState, useContext } from "react";
import { Card, Button, CardGroup } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Pagination } from "antd";
import { Context } from "../Context";

const parseResponse = {
  json: (response) => response.json(),
  none: (response) => response,
};

const Teams = () => {
  const { game } = useContext(Context);
  const [state, setState] = useState({ total: 0, data: [] });
  const [page, setPage] = useState(1);
  const { push } = useHistory();

  const getTeams = (game) =>
    game === "allGames"
      ? fetch(`${process.env.REACT_APP_URL}/teams?page=${page}&per_page=5`, {
          method: "GET", // *GET, POST, PUT, DELETE, etc.
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
          },
        })
          .then(async (result) => {
            const type = "json" || "none";
            const res = await parseResponse[type](result);

            return {
              total: result.headers.get("X-Total"),
              data: res,
            };
          })
          .then(
            ({ data, total }) => {
              setState({ data, total });
            },
            (error) => {
              console.log("error :>> ", error);
            }
          )
      : fetch(
          `${process.env.REACT_APP_URL}/${game}/teams?page=${page}&per_page=5`,
          {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
            },
          }
        )
          .then(async (result) => {
            const type = "json" || "none";
            const res = await parseResponse[type](result);

            return {
              total: result.headers.get("X-Total"),
              data: res,
            };
          })
          .then(
            ({ total, data }) => {
              setState({ data, total });
            },
            (error) => {
              console.log("error :>> ", error);
            }
          );

  useEffect(() => {
    getTeams(game);
  }, [game, page]);

  return (
    <>
      <div>
        <h1> Teams</h1>
        <CardGroup>
          {state.data.map((team) => (
            <Card
              key={team.id}
              style={{ width: "18rem" }}
              onClick={() => push(`/teams/${team.id}`)}
            >
              <Card.Img variant="top" src={team.image_url} />
              <Card.Body>
                <Card.Title>{team.name}</Card.Title>

                <Button
                  variant="primary"
                  onClick={() => push(`/teams/${team.id}`)}
                >
                  Details
                </Button>
              </Card.Body>
            </Card>
          ))}
        </CardGroup>
        <Pagination
          total={state.total}
          current={page}
          defaultCurrent={1}
          onChange={setPage}
          showSizeChanger={false}
        />
      </div>
    </>
  );
};

export default Teams;
