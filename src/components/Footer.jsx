import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year} Ritu Bafna</p>
    </footer>
  );
}

export default Footer;
