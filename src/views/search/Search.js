import React from "react";
import "./search.css";
import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";
import { useLocation, useNavigate } from "react-router-dom";
const Search = () => {
  const { search, pathname } = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(search);

  const handleSearch = (value) => {
    if (value) {
      searchParams.set("query", value);
    } else {
      searchParams.delete("query");
    }
    console.log(`Searching... ${searchParams}`);
    navigate(`${pathname}?${searchParams.toString()}`, { replace: true });
  };

  return (
    <div className="search">
      <input
        type="text"
        className="h_input"
        placeholder="eXpert M2s"
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get("query")}
      />
      <Icon
        path={mdiMagnify}
        title="Recherche"
        size={0.9}
        color="transparent"
        rotate={90}
      />
    </div>
  );
};

export default Search;
