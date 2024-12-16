import React from 'react';

const SearchList = ({ results }) => {
  return (
    <div>
      {results && results.length > 0 ? (
        results.map((result) => (
          <div key={result.id}>{result.name}</div>
        ))
      ) : (
        <div>No results found</div>
      )}
    </div>
  );
};

export default SearchList;

