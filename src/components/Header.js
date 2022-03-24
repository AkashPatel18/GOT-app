import React from "react";

const Header = ({ headerName }) => {
  return (
    <div>
      <SearchBar
        value={searchItem}
        onChange={(value) => {
          setSearchItem(value);
        }}
        onRequestSearch={() => console.log("onRequestSearch")}
        style={{
          margin: "0 auto",
          maxWidth: 800,
        }}
      />
    </div>
  );
};

export default Header;
