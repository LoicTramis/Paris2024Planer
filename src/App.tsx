import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import VenueList from "./components/VenueList";
import NavBar from "./components/NavBar";

const URL =
  "https://data.paris2024.org/api/explore/v2.1/catalog/datasets/paris-2024-sites-de-competition/records?limit=100";

function App() {
  const [venues, setVenues] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(URL);
      console.log(response);
      setVenues(response.data.results);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <NavBar />
      <main className="bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-300">
        {!venues ? (
          <h1>No competition venue</h1>
        ) : (
          <>
            <h1>Competition venues</h1>
            <VenueList venues={venues} />
          </>
        )}
      </main>
    </>
  );
}

export default App;
