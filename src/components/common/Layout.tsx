import React, { ReactNode } from "react";
import Navbar from "./Navbar";

function Layout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Digital Image Processing</title>
        {/* Add your stylesheets here */}
      </head>
      <body>
        <Navbar />
        <div className="container-fluid">{children}</div>
      </body>
    </div>
  );
}

export default Layout;
