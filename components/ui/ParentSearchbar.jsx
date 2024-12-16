"use client";

import React, { useState } from "react";
import { SearchBar } from "./SearchBar";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  
} from "./Menubar"; // Adjust the import paths accordingly

const ParentComponent = () => {
  const [results, setResults] = useState([]); // State to hold search results

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* SearchBar Component */}
      <SearchBar setResults={setResults} />

      {/* Menubar Component */}
      <Menubar className="w-full">
        <MenubarMenu>
          <MenubarTrigger>Filtered Results</MenubarTrigger>
          <MenubarContent>
            {results.length > 0 ? (
              results.map((result) => (
                <MenubarItem key={result.id}>{result.name}</MenubarItem>
              ))
            ) : (
              <MenubarItem>No results found</MenubarItem>
            )}
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
};

export default ParentComponent;
