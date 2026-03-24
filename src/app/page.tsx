"use client";

import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/white.css";

import { useEffect, useRef } from "react";

import Introduction from "./Slides/Introduction";
import Reveal from "reveal.js";

function App() {
  const deckDivRef = useRef<HTMLDivElement>(null);
  const deckRef = useRef<Reveal.Api | null>(null);

  useEffect(() => {
    if (deckRef.current) return;

    deckRef.current = new Reveal(deckDivRef.current!, {
      transition: "slide",
      width: "100%",
      height: "100%",
      margin: 0,
      minScale: 1,
      maxScale: 1,
    });

    deckRef.current.initialize().then(() => {});

    return () => {
      try {
        if (deckRef.current) {
          deckRef.current.destroy();
          deckRef.current = null;
        }
      } catch (e) {
        console.warn("Reveal.js destroy call failed.");
      }
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <div
        className="reveal"
        ref={deckDivRef}
        style={{ width: "100%", height: "100%" }}
      >
        <div className="slides" style={{}}>
          <Introduction />
        </div>
      </div>
    </div>
  );
}

export default App;
