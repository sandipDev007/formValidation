import React from "react";
import ReactDOM from "react-dom";

const SearchBar = () => {
  return <input placeholder="enter name" />;
};

ReactDOM.render(
  <React.StrictMode>
    <SearchBar />
  </React.StrictMode>,
  document.getElementById("root")
);
