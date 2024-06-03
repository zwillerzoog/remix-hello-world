import React from "react";
import { Links, Meta, Scripts, ScrollRestoration } from "@remix-run/react";
import "./app.css";
import "./styling.css";

export default function App() {
  const [helloWorld, setLanguage] = React.useState("Hello World");

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div className="w-full">
          <div className="v-center">
            <h1 className="h-center">{helloWorld}!</h1>
            <div className="h-center">
              <button type="button" onClick={() => setLanguage("Hello World")}>
                In English
              </button>
              <button type="button" onClick={() => setLanguage("Hola Mundo")}>
                In Spanish
              </button>
              <button
                type="button"
                onClick={() => setLanguage("Bonjour le Monde")}
              >
                In French
              </button>
              <button type="button" onClick={() => setLanguage("Hallo Wereld")}>
                In Dutch
              </button>
            </div>
          </div>
        </div>

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
