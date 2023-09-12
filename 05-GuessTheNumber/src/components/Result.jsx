import React from "react";

function Result(props) {
  const { winner, message} = props;


  return (
    <div className="flex justify-center py-5">
      {winner ? (
        <p className="text-center py-5 text-violet-500 font-bold">You win!</p>
      ) : (
        <p className="text-center py-5 font-bold text-red-500">{message}</p>
      )}
    </div>
  );
}

export default Result;
