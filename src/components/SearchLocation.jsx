import React, { useState, useEffect } from "react";

function SearchLocation() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    // const fetchSuggestions = async () => {
    //   if (query.length < 3) return;

    //   const response = await fetch(
    //     `https://nominatim.openstreetmap.org/search?format=json&q=${query}`
    //   );
    //   const data = await response.json();
    //   setSuggestions(data);
    // };
    const fetchSuggestions = async () => {
        if (query.length < 3) return;

        const response = await fetch(
            `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&countrycodes=fr&addressdetails=1`
        );
        const data = await response.json();
        setSuggestions(data);
    };

    const delayDebounce = setTimeout(fetchSuggestions, 500);
    return () => clearTimeout(delayDebounce);
  }, [query]);

  const handleSelect = (place) => {
    setQuery(place.display_name);
    setSuggestions([]);
  };

  return (
<div className="form-group position-relative">
  <input
    type="text"
    className="form-control"
    placeholder="Votre emplacement"
    value={query}
    onChange={(e) => setQuery(e.target.value)}
  />
  
  {suggestions.length > 0 && (
    <ul className="list-group position-absolute w-100 mt-1 shadow z-3">
      {suggestions.map((place) => (
        <li
          key={place.place_id}
          className="list-group-item list-group-item-action d-flex align-items-center"
          onClick={() => handleSelect(place)}
          style={{ cursor: 'pointer' }}
        >
          <i className="fas fa-map-marker-alt me-2 text-primary"></i>
          <span>{place.display_name}</span>
        </li>
      ))}
    </ul>
  )}
</div>
  );
}

export default SearchLocation;