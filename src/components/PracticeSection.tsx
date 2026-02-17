"use client";

import { useState } from "react";

export default function PracticeSection() {
  const areas = [
    {
      title: "Criminal Defense",
      description:
        "Strategic and aggressive defense representation in complex criminal matters. From investigation to trial, every detail is meticulously prepared and executed.",
    },
    {
      title: "Federal Litigation",
      description:
        "Representation in high-stakes federal cases involving regulatory enforcement, white-collar charges, and constitutional challenges.",
    },
    {
      title: "Crisis Management",
      description:
        "Immediate strategic counsel for executives and high-profile individuals facing investigations, media scrutiny, or urgent legal exposure.",
    },
    {
      title: "High-Profile Cases",
      description:
        "Discreet, controlled litigation strategy for cases requiring reputation protection and precision courtroom execution.",
    },
  ];

  const [active, setActive] = useState(0);

  return (
    <section
      id="practice"
      style={{
        background: "#1F1F1F", // medium gray
        padding: "140px 60px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <h2
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: 42,
            marginBottom: 80,
            color: "#F4F1EA",
          }}
        >
          Practice Areas
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "380px 1fr",
            gap: 80,
          }}
        >
          {/* LEFT SIDE — BOXED CARDS */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {areas.map((area, index) => (
              <div
                key={area.title}
                onClick={() => setActive(index)}
                style={{
                  padding: "24px 28px",
                  cursor: "pointer",
                  background:
                    active === index
                      ? "linear-gradient(145deg, #2A2A2A, #242424)"
                      : "#242424",
                  border:
                    active === index
                      ? "1px solid #B9975B"
                      : "1px solid rgba(255,255,255,0.05)",
                  transition: "all 0.3s ease",
                }}
              >
                <h3
                  style={{
                    margin: 0,
                    fontSize: 20,
                    color: "#F4F1EA",
                  }}
                >
                  {area.title}
                </h3>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE — DESCRIPTION PANEL */}
          <div
            style={{
              background: "#242424",
              padding: "60px",
              border: "1px solid rgba(255,255,255,0.05)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              minHeight: 260,
            }}
          >
            <h3
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: 30,
                marginBottom: 24,
                color: "#F4F1EA",
              }}
            >
              {areas[active].title}
            </h3>

            <p
              style={{
                fontSize: 17,
                lineHeight: 1.8,
                color: "rgba(255,255,255,0.75)",
              }}
            >
              {areas[active].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
