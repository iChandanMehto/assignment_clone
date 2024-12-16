import React from 'react';
import SearchResult from './SearchResult';  // Assuming you have this component

const SearchList = ({ results }) => {
  return (
    <div className="w-full bg-white border-slate-300 border-2 shadow-lg flex flex-col rounded-3xl overflow-y-scroll">
      {results.length > 0 ? (
        results.map((result, id) => (
          <SearchResult result={result} key={id} />
        ))
      ) : (
        <div>No results found</div>
      )}
    </div>
  );
};

export default SearchList;
