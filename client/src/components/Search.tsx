import React from 'react';

const Search: React.FC = () => {
  return (
    <input
    type="text"
    id="searchInput"
    placeholder="Search name, email or action..."
    className=" w-11/12 py-2 my-3 px-4 border border-gray-300 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"/>
  );
};

export default Search;