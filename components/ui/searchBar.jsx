"use client";
import React, { useState } from "react";

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) => {
          return (
            user &&
            user.name &&
            user.name.toLowerCase().includes(value.toLowerCase())
          );
        });
        setResults(results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div>
      <div className="bg-white border-[#007bff] rounded-full">
        <input
          type="text"
          placeholder="Search Languages"
          value={input}
          onChange={(e) => handleChange(e.target.value)}
          aria-label="Search Languages"
        />
        <div></div>
      </div>
    </div>
  );
};

export default SearchBar;

