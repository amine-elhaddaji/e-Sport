import React from "react";
import { Card, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Error = () => {
  const { push } = useHistory();
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card
        style={{
          width: "10cm",
          height: "8cm",
          position: "absolue",
          bottom: "10%",
          backgroundColor: "#00000029",
          boxShadow: "rgba(0, 0, 0, 0.4) 3px 3px 3px 3px",
          marginBottom: "5cm",
        }}
      >
        <Card.Body>
          <Card.Title>
            <strong style={{ height: "5cm", fontSize: "xxx-large" }}>
              Error 404 :{" "}
            </strong>
          </Card.Title>

          <Card.Text>
            <strong>
              <p style={{ color: "#bf2c2c", marginTop: "-30px" }}>
                Cette page n'est pas accesible !
              </p>
            </strong>
          </Card.Text>

          <Button
            class="btn btn-outline-dark"
            variant="outline-danger"
            onClick={() => push(`/`)}
          >
            Go to Home Page
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Error;
