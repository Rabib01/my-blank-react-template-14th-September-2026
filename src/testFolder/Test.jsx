import { useState } from "react";

let initialArtists = [
  { id: 0, name: "Marta Colvin Andrade" },
  { id: 1, name: "Lamidi Olonade Fakeye" },
  { id: 2, name: "Louise Nevelson" },
];

// lets remove the fuking noise

export default function List() {
  const [artists, setArtists] = useState(initialArtists);

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <ul>
        {artists.map((mappedArtist) => (
          <li key={mappedArtist.id}>
            {mappedArtist.name}{" "}
            <button
              onClick={() => {
                setArtists(
                  artists.filter(
                    (filteredArtist) => filteredArtist.id !== mappedArtist.id,
                  ),
                );
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
