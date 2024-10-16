import React from "react";

function Footer() {
  return (
    <footer className="bg-gray mt-auto w-full h-full py-8 ">
      <div className="container flex items-center justify-between gap-8">
        <p>©{new Date().getFullYear()} Recipes sharing platform</p>
        <p>
    
          <p>Enjoy your recipes here</p>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
