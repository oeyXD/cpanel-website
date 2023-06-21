import React, { useEffect } from "react";

export function Blogs() {
  useEffect(() => {
    document.title = "Blogs Page";
  }, []);
  return <h1>This is the Blogs Page!!</h1>;
}
