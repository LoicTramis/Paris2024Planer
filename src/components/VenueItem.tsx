import React from "react";
import Venue from "../types/Venue";
import { formatStringDate } from "../util/date";

// Declaring the destructured props "venue" as type "Venue"
const VenueItem = ({ venue }: { venue: Venue }) => {
  return (
    <>
      <h2 className="text-3xl">{venue.nom_site}</h2>
      <p>{formatStringDate(venue.start_date)}</p>
      <p>{venue.adress}</p>
      <ul>
        {venue.sports.split(", ").map((sport: string, index: number) => (
          <li key={index}>{sport}</li>
        ))}
      </ul>
    </>
  );
};

export default VenueItem;
