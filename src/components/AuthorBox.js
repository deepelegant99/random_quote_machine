import React from "react";

export const AuthorBox = ({ color, author }) => {
  return (
    <p style={{ width: "100%", color:color }} id="author">
      {author}
    </p>
  );
};
