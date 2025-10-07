import React from "react";
import SearchBar from "@theme-original/SearchBar";

export default function CustomSearchBar(props) {
  return (
    <SearchBar
      {...props}
      placeholder="Search"
      icon={
        <img
          src="/img/icons/icon-search.svg"
          alt="Search"
          style={{ width: 20, height: 20, verticalAlign: "middle" }}
        />
      }
    />
  );
}
