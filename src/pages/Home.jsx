import React, { useEffect } from "react";

export function Home() {
  useEffect(() => {
    document.title = "Home Page";
  }, []);
  return <h1>this is the homepage</h1>;
}
