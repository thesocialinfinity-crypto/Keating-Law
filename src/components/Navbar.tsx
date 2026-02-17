"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const sections = ["About", "Practice", "Team", "Results", "Media"];
  const [active, setActive] = useState("About");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200; // offset for header height
      sections.forEach((section) => {
        const el = document.getElementById(section.toLowerCase());
        if (el) {
          if (scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
            setActive(section);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{
        background: "#0E0E0E",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 32px",
        position: "sticky",
        top: 0,
        zIndex: 100,
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
        <span style={{ fontFamily: "Playfair Display", fontSize: 20, fontWeight: 700 }}>Keating & Associates</span>
        <span style={{ fontSize: 12, opacity: 0.7 }}>Criminal Defense</span>
      </div>

      <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
        {sections.map((section) => (
          <a
            key={section}
            href={`#${section.toLowerCase()}`}
            style={{
              color: active === section ? "#5B0F16" : "#F4F1EA",
              textDecoration: "none",
              fontSize: 16,
              fontWeight: 500,
              transition: "color 0.3s",
            }}
          >
            {section}
          </a>
        ))}

        {/* Consultation Button */}
        <a
          href="#consultation"
          style={{
            background: "#5B0F16",
            color: "#F4F1EA",
            padding: "10px 20px",
            borderRadius: 4,
            textDecoration: "none",
            fontWeight: 600,
            transition: "background 0.3s",
          }}
        >
          Consultation
        </a>
      </div>
    </nav>
  );
}
