import React, { useState } from "react";
import Star from "./Star";
import StarFilled from "./StarFilled";

function Rating() {
  const [rating, setRating] = useState(1);
  const [hover, setHover] = useState(0);

  const handleStarClick = (item) => {
    setRating(item);
  };

  const handleStarHover = (item) => {
    setHover(item);
  };

  const handleStarLeave = () => {
    setHover(0);
  };

  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((item, index) => {
        return (
          <span
            key={index}
            className="cursor-pointer"
            onClick={() => handleStarClick(item)}
            onMouseEnter={() => handleStarHover(item)}
            onMouseLeave={handleStarLeave}
          >
            {hover === 0 || hover < item ? (
              rating >= item ? (
                <StarFilled />
              ) : (
                <Star />
              )
            ) : (
              <StarFilled />
            )}
          </span>
        );
      })}
    </div>
  );
}

export default Rating;

