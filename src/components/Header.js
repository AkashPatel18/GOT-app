import React from "react";
import { Input } from "@mui/material";

const Header = ({ setSearch }) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "30px",
        }}
      >
        <Input
          type={"search"}
          onChange={(e) => setSearch(e.target.value)}
          label="hi"
          placeholder="🔍 search"
        />
      </div>
    </div>
  );
};

export default Header;
