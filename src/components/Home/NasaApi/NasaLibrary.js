import React, { useState, useEffect } from "react";
import axios from "axios";
import "./NasaLibrary.css";

function NasaLibrary() {
  const [mediaData, setMediaData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("space");
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiUrl = `https://images-api.nasa.gov/search?q=${searchQuery}&media_type=image,video`;
    axios
      .get(apiUrl)
      .then((response) => {
        setMediaData(response.data.collection.items);
        setError(null);
      })
      .catch((error) => {
        console.error("Error fetching NASA data:", error);
        setError("Error fetching NASA data. Please try again later.");
      });
  }, [searchQuery]);

  const images = mediaData.filter(
    (item) => item.data[0].media_type === "image"
  );
  const videos = mediaData.filter(
    (item) => item.data[0].media_type === "video"
  );

  return (
    <div>
      <h1>NASA Image and Video Library</h1>
      <div className="nasa-input">
        <input
          type="text"
          placeholder="Search NASA library..."
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      {error && <p>{error}</p>}

      {/* Showing Images */}

      <div className="nasa-api">
        <div className="nasa-img">
          <h2 className="nasa-text">Images</h2>
          <div>
            {images.map((item, index) => (
              <div key={index}>
                <img
                  src={item.links[0].href}
                  alt={`NASA Media ${index}`}
                  className="nasa-photo"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Showing Videos */}

        <div className="nasa-vid">
          <h2 className="nasa-text">Videos</h2>
          <div>
            {videos.map((item, index) => (
              <div key={index}>
                <video controls width="500" height="300">
                  <source src={item.links[0].href} type="video/mp4" />
                </video>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NasaLibrary;
