"use client";

import React from "react";
import { FaLinkedin, FaTwitter, FaNewspaper } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#1A1A1A",
        color: "#F4F1EA", // default text color Ivory
        padding: "60px 24px",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.5fr 1fr 1fr", // proportional spacing
          gap: 40,
          maxWidth: 1200,
          margin: "0 auto 40px",
          textAlign: "left",
        }}
      >
        {/* Column 1: Contact */}
        <div>
          <h3 style={{ fontSize: 20, color: "#5B0F16", marginBottom: 16, textTransform: "uppercase" }}>Contact</h3>
          <p style={{ margin: 4, color: "#F4F1EA" }}>
            Email: <a href="mailto:info@keatinglaw.com" style={{ color: "#F4F1EA", textDecoration: "underline" }}>info@keatinglaw.com</a>
          </p>
          <p style={{ margin: 4, color: "#F4F1EA" }}>Phone: <a href="tel:8805328464" style={{ color: "#F4F1EA", textDecoration: "underline" }}>880-KEATING</a></p>
          <p style={{ margin: 4, color: "#F4F1EA" }}>New York: 123 Wall Street, NY 10005</p>
          <p style={{ margin: 4, color: "#F4F1EA" }}>Washington D.C.: 456 Constitution Ave NW, DC 20001</p>
        </div>

        {/* Column 2: Pages */}
        <div>
          <h3 style={{ fontSize: 20, color: "#5B0F16", marginBottom: 16, textTransform: "uppercase" }}>Pages</h3>
          {["Home", "About", "Practice Areas", "Results", "Consultation"].map((page) => (
            <p key={page} style={{ margin: 6, color: "#F4F1EA" }}>
              <a
                href="#"
                style={{ color: "#F4F1EA", textDecoration: "none", transition: "color 0.3s" }}
                onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = "#B9975B")}
                onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = "#F4F1EA")}
              >
                {page}
              </a>
            </p>
          ))}
        </div>

        {/* Column 3: Social */}
        <div>
          <h3 style={{ fontSize: 20, color: "#5B0F16", marginBottom: 16, textTransform: "uppercase" }}>Follow Us</h3>
          <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
            <a href="#" style={{ color: "#F4F1EA", fontSize: 22 }}><FaLinkedin /></a>
            <a href="#" style={{ color: "#F4F1EA", fontSize: 22 }}><FaTwitter /></a>
            <a href="#" style={{ color: "#F4F1EA", fontSize: 22 }}><FaNewspaper /></a>
          </div>
        </div>
      </div>

      {/* Bottom Disclaimer */}
      <div style={{ textAlign: "center", opacity: 0.7, fontSize: 14, color: "#F4F1EA" }}>
        &copy; {new Date().getFullYear()} Keating & Associates. All rights reserved. Attorney-client privilege applies.
      </div>
    </footer>
  );
}
