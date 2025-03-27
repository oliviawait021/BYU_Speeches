import React from "react";

type SearchPageProps = {
  query: string;
};

const SearchPage = ({ query }: SearchPageProps) => {
  return (
    <div className="text-white p-4">
      <h2>Search Results for: "{query}"</h2>
      <p className="text-muted">Results would appear here...</p>

      <div className="mt-4">
        <strong>Filters (coming soon)</strong>
        <ul>
          <li>Sort by relevance</li>
          <li>Filter by speaker</li>
          <li>Filter by date</li>
        </ul>
      </div>
    </div>
  );
};

export default SearchPage;
