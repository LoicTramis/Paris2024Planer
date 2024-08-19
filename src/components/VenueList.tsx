import React from "react";
import VenueItem from "./VenueItem";

const VenueList = ({ venues }) => {
  const listJSX = venues.map((venue) => (
    <li key={crypto.randomUUID()}>
      <VenueItem venue={venue} />
    </li>
  ));

  return <ul>{listJSX}</ul>;
};

export default VenueList;
