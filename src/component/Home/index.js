import React from "react";
import { Carousel } from "react-bootstrap";

import { useHistory } from "react-router-dom";

import leag from "../../images/e-league.png";
import tea from "../../images/e-team.jpg";

const Home = () => {
  const { push } = useHistory();
  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Carousel
          style={{
            height: "14cm",
            width: "10cm",
            display: "flex",
            justifyItems: "center",
          }}
        >
          <Carousel.Item interval={3000}>
            <h1>Leagues</h1>
            <a href>
              {" "}
              <img
                onClick={() => push(`/leagues`)}
                style={{
                  height: "5cm",

                  borderRadius: "1000px",
                  bottom: "-22mm",
                  position: "relative",
                  backgroundColor: "#00000029",
                  boxShadow: "rgba(0, 0, 0, 0.4) 3px 3px 3px 3px",
                }}
                className="d-block w-100"
                src={leag}
                alt="First slide"
              />
            </a>
          </Carousel.Item>

          <Carousel.Item interval={3000}>
            <h1>Teams</h1>
            <img
              onClick={() => push(`/teams`)}
              className="d-block w-100"
              src={tea}
              alt="Second slide"
              style={{
                height: "5cm",
                backgroundColor: "#00000029",
                boxShadow: "rgba(0, 0, 0, 0.4) 3px 3px 3px 3px",
                borderRadius: "1000px",
                bottom: "-2.2cm",
                position: "relative",
              }}
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default Home;
