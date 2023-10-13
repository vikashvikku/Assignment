// src/components/NasaLibrary.js
import React, { useState, useEffect } from "react";
import axios from "axios";

function NasaLibrary() {
  const [mediaData, setMediaData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("space"); // Default search query
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiUrl = `https://images-api.nasa.gov/search?q=${searchQuery}&media_type=image,video`;
    axios
      .get(apiUrl)
      .then((response) => {
        setMediaData(response.data.collection.items);
        setError(null); // Clear any previous errors
      })
      .catch((error) => {
        console.error("Error fetching NASA data:", error);
        setError("Error fetching NASA data. Please try again later.");
      });
  }, [searchQuery]);

  return (
    <div>
      <h1>NASA Image and Video Library</h1>
      <div>
        <input
          type="text"
          placeholder="Search NASA library..."
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      {error && <p>{error}</p>}
      <div>
        {mediaData.map((item, index) => (
          <div key={index}>
            {item.data[0].media_type === "image" ? (
              <div>
                ( (
                <img
                  src={item.links[0].href}
                  alt={`NASA Media ${index}`}
                />) )
              </div>
            ) : (
              <div>
                ( (
                <video controls width="400" height="300">
                  <source src={item.links[0].href} type="video/mp4" />
                </video>
                ) )
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default NasaLibrary;
