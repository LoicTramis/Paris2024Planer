import React from "react";
import VenueItem from "./VenueItem";
import Venue from "../types/Venue";

const VenueList = ({ venues }) => {
  const listJSX = venues.map((venue: Venue) => (
    <li key={crypto.randomUUID()}>
      <VenueItem venue={venue} />
    </li>
  ));

  return (
    <ul className="bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-300">
      {listJSX}
    </ul>
  );
};

export default VenueList;
