import React, { useEffect } from "react";

export function Contact() {
  useEffect(() => {
    document.title = "Contact Page";
  }, []);
  return <h1>This is the Contacts Page!!</h1>;
}
