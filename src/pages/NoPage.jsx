import React, { useEffect } from "react";

export function NoPage() {
  useEffect(() => {
    document.title = "404 Error Page!";
  }, []);

  return <h1>404 Error - Not Found!</h1>;
}
