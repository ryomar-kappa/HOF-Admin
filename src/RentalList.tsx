import React, { useEffect, useState } from "react";
import fetchRental from "./RentalRepository";
import Rental from "./Rental";

function RentalList() {
  const [state, setState] = useState<Rental[]>([]);
  console.log(state);
  useEffect(() => {
    const fetch = async () => {
      const response = await fetchRental();
      console.log("response", response);
      setState(response);
    };
    fetch();
  }, []);
  return (
    <div>
      RentalList
      {Array.from({ length: state.length }).map((_, index) => (
        <div key={index}>
          <div>{state[index].getHrid()}</div>
          <div>{state[index].getIsbn()}</div>
        </div>
      ))}
    </div>
  );
}

export default RentalList;
