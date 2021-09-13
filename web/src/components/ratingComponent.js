import React, { useState } from "react";

import { Container, Radio, Rating } from "./rating";
const Rate = () => {
  const [rate, setRate] = useState(0);
  return (
    <Container>
      {[...Array(5)].map((item, index) => {
        const givenRating = index + 1;
        return (
          <label>
            <Radio
              type="radio"
              value={givenRating}
              onClick={() => {
                setRate(givenRating);
                alert(`Are you sure you want to give ${givenRating} stars ?`);
              }}
            />
            <Rating>
              <i
                className="fas fa-star"
                color={
                  givenRating < rate || givenRating === rate
                    ? "000"
                    : "rgb(192,192,192)"
                }
              ></i>
            </Rating>
          </label>
        );
      })}
    </Container>
  );
};

export default Rate;
