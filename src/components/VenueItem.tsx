import React from "react";

const VenueItem = ({ venue }) => {
  return (
    <>
      <h2>{venue.nom_site}</h2>
      <ul>
        {venue.sports.split(", ").map((sport: string) => (
          <li>{sport}</li>
        ))}
      </ul>
    </>
  );
};

export default VenueItem;
