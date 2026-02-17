import Image from "next/image";
import TeamCarousel from "@/components/TeamCarousel";
import PracticeSection from "@/components/PracticeSection";

export default function HomePage() {
  return (
    <main style={{ fontFamily: "Inter, sans-serif", color: "#F4F1EA" }}>

      {/* ================= HERO ================= */}
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "0 24px",
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.80)), url('/images/hero.jpg') center/cover no-repeat",
        }}
      >
        <div style={{ maxWidth: 900 }}>
          <p
            style={{
              letterSpacing: 3,
              textTransform: "uppercase",
              fontSize: 13,
              color: "#B9975B",
              marginBottom: 20,
            }}
          >
            Award-Winning Trial Attorney
          </p>

          <h1
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "clamp(52px, 6vw, 88px)",
              lineHeight: 1.05,
              marginBottom: 24,
              color: "#FFFFFF",
            }}
          >
            When Everything Is On The Line
          </h1>

          <p style={{ fontSize: 20, opacity: 0.8, marginBottom: 40 }}>
            Strategic criminal defense and elite litigation for the most complex cases.
          </p>

          <div style={{ display: "flex", gap: 20, justifyContent: "center", flexWrap: "wrap" }}>
            <button
              style={{
                background: "#5B0F16",
                color: "#F4F1EA",
                padding: "16px 32px",
                border: "none",
                fontSize: 16,
                cursor: "pointer",
              }}
            >
              Request Consultation
            </button>

            <button
              style={{
                background: "transparent",
                color: "#F4F1EA",
                padding: "16px 32px",
                border: "1px solid rgba(255,255,255,0.4)",
                fontSize: 16,
                cursor: "pointer",
              }}
            >
              View Practice Areas
            </button>
          </div>
        </div>
      </section>

      {/* ================= STATS STRIP ================= */}
<section
  style={{
    background: "#2B0F14",
    padding: "70px 24px",
    textAlign: "center",
    position: "relative",
    zIndex: 2,
  }}
>
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      gap: 80,
      flexWrap: "wrap",
    }}
  >
    {[
      { number: "120+", label: "Cases Won" },
      { number: "100+", label: "Not Guilty Verdicts" },
      { number: "15", label: "Landmark Appeals" },
      { number: "5", label: "Major Class Actions" },
    ].map((stat) => (
      <div key={stat.label} style={{ position: "relative" }}>
        
        {/* Outer white outline */}
        <div
          style={{
            width: 130,
            height: 130,
            borderRadius: "50%",
            border: "2px solid rgba(255,255,255,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 auto 16px",
            position: "relative",
          }}
        >
          {/* Inner golden circle */}
          <div
            style={{
              width: 110,
              height: 110,
              borderRadius: "50%",
              background: "radial-gradient(circle at 30% 30%, #E5C27A, #B9975B)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: 28,
              fontWeight: 700,
              fontFamily: "Playfair Display, serif",
              color: "#111",
              boxShadow: "0 10px 30px rgba(0,0,0,0.6), inset 0 0 15px rgba(255,255,255,0.1)",
              transform: "perspective(600px) rotateX(5deg)",
            }}
          >
            {stat.number}
          </div>
        </div>

        <p
          style={{
            fontSize: 16,
            fontWeight: 600,
            opacity: 0.95,
            color: "#F4F1EA",
            textShadow: "0 1px 2px rgba(0,0,0,0.5)",
          }}
        >
          {stat.label}
        </p>

        {/* subtle decorative glow */}
        <div
          style={{
            position: "absolute",
            top: -20,
            left: "50%",
            transform: "translateX(-50%)",
            width: 150,
            height: 150,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(185,151,91,0.15) 0%, transparent 70%)",
            zIndex: -1,
          }}
        />
      </div>
    ))}
  </div>
</section>



      {/* ================= WHY CHOOSE US ================= */}
<section
  style={{
    padding: "140px 60px",
    minHeight: "700px",
    background: "linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url('/images/why-choose-bg.jpg') center/cover no-repeat",
    position: "relative",
  }}
>
  <div style={{ maxWidth: 1200, margin: "0 auto" }}>
    <h2
      style={{
        color: "#FFFFFF",
        fontFamily: "Playfair Display, serif",
        fontSize: 42,
        marginBottom: 20,
      }}
    >
      Why Choose Keatings & Associates
    </h2>

    <p
      style={{
        maxWidth: 700,
        color: "rgba(255,255,255,0.75)",
        marginBottom: 80,
        fontSize: 18,
        lineHeight: 1.7,
      }}
    >
      Precision. Discretion. Relentless courtroom strategy.
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: 40,
      }}
    >
      {[
        {
          title: "Strategic Litigation",
          text: "Meticulous preparation combined with aggressive courtroom positioning.",
        },
        {
          title: "Elite Trial Experience",
          text: "Extensive representation in state and federal courts.",
        },
        {
          title: "Discreet Counsel",
          text: "Trusted by high-profile individuals requiring confidentiality.",
        },
        {
          title: "Direct Attorney Access",
          text: "Clear communication and hands-on legal leadership.",
        },
      ].map((item) => (
        <div
          key={item.title}
          style={{
            padding: 50,
            background: "#181818",
            border: "1px solid rgba(255,255,255,0.08)",
            borderTop: "3px solid #B9975B",
          }}
        >
          <h3 style={{ color: "#FFFFFF", fontSize: 22, marginBottom: 20 }}>
            {item.title}
          </h3>
          <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.7 }}>
            {item.text}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* ================= ANNALISE FEATURE SECTION ================= */}
<section style={{ background: "#111", padding: "160px 60px" }}>
  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center", maxWidth: 1200, margin: "0 auto" }}>
    
    <Image
      src="/images/team_annalise.jpg"
      alt="Annalise Keating"
      width={600}
      height={750}
      style={{ objectFit: "cover", width: "100%", height: "auto" }}
    />

    <div>
      <h2 style={{ 
        fontFamily: "Playfair Display, serif", 
        fontSize: 48, 
        marginBottom: 20,
        color: "#F4F1EA" // changed to Ivory
      }}>
        Annalise Keating
      </h2>
      <p style={{ color: "#B9975B", marginBottom: 20, fontWeight: 600 }}>
        Founding Partner
      </p>

      <p style={{ opacity: 0.8, lineHeight: 1.8, color: "#F4F1EA" }}>
        Annalise Keating is a nationally recognized trial attorney known for dismantling complex prosecutions and defending clients in high-profile criminal litigation. Her courtroom precision, psychological strategy, and relentless advocacy have secured acquittals in cases deemed unwinnable.
      </p>

      <p style={{ opacity: 0.8, marginTop: 20, lineHeight: 1.8, color: "#F4F1EA" }}>
        With over a decade of experience in federal and state courts, she leads the firm’s most complex matters, from homicide defense to multi-million dollar class action litigation.
      </p>
    </div>
  </div>
</section>


      <PracticeSection />

      {/* ================= TEAM ================= */}
      <section id="team" style={{ background: "#111111" }}>
        <h2 style={{
          fontFamily: "Playfair Display, serif",
          fontSize: 42,
          textAlign: "center",
          color: "#FFFFFF",
          marginTop: 80,
        }}>
          Litigation Team
        </h2>
        <TeamCarousel />
      </section>

      {/* ================= RESULTS ================= */}
<section
  id="results"
  style={{
    padding: "160px 60px",
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.85), rgba(0,0,0,0.95)), url('/images/results-bg.jpg') center/cover no-repeat",
  }}
>
  <div
    style={{
      maxWidth: 1200,
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1.2fr 1fr", // cards slightly wider
      gap: 100,
      alignItems: "start",
    }}
  >
    {/* Cards on the LEFT */}
    <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
      {[
        { title: "Class Action – Westerbrook Corp", desc: "Secured landmark class-action victory." },
        { title: "Not Guilty Verdict – Sam Keating", desc: "Delivered full acquittal in homicide trial." },
        { title: "Appeal Overturned – Rebecca Sutter", desc: "Overturned conviction on constitutional grounds." },
      ].map((item) => (
        <div
          key={item.title}
          style={{
            padding: 40,
            background: "rgba(20,20,20,0.85)",
            border: "1px solid rgba(185,151,91,0.3)",
            boxShadow: "0 20px 40px rgba(185,151,91,0.15)",
          }}
        >
          <h3 style={{ color: "#FFFFFF", fontSize: 22 }}>{item.title}</h3>
          <p style={{ color: "rgba(255,255,255,0.75)", marginTop: 14 }}>
            {item.desc}
          </p>
        </div>
      ))}
    </div>

    {/* Heading & text on the RIGHT */}
    <div>
      <h2 style={{ color: "#FFFFFF", fontFamily: "Playfair Display, serif", fontSize: 46 }}>
        Representative Results
      </h2>
      <div style={{ width: 70, height: 3, background: "#B9975B", margin: "30px 0" }} />
      <p style={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.8 }}>
        Landmark victories demonstrating strategic courtroom dominance.
      </p>
    </div>
  </div>
</section>


      {/* ================= CONSULTATION ================= */}
<section
  id="consultation"
  style={{
    background: "#2B0F14", // match the stats strip
    padding: "140px 60px",
  }}
>
  <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80 }}>
    <div>
      <h2 style={{ 
        fontFamily: "Playfair Display, serif", 
        fontSize: 42, 
        color: "#F4F1EA" // Ivory color for the heading
      }}>
        Confidential Consultation
      </h2>
      <p style={{ opacity: 0.8, marginTop: 20, lineHeight: 1.8, color: "#F4F1EA" }}>
        Submit a confidential inquiry and our legal team will respond promptly.
      </p>
    </div>

    <form style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <input type="text" placeholder="Full Name" style={{ padding: 16, background: "#111", border: "1px solid rgba(255,255,255,0.3)", color: "#FFFFFF" }} />
      <input type="email" placeholder="Email Address" style={{ padding: 16, background: "#111", border: "1px solid rgba(255,255,255,0.3)", color: "#FFFFFF" }} />
      <textarea placeholder="Your Message" rows={5} style={{ padding: 16, background: "#111", border: "1px solid rgba(255,255,255,0.3)", color: "#FFFFFF" }} />
      <button style={{ background: "transparent", border: "1px solid #FFFFFF", color: "#FFFFFF", padding: 16, fontWeight: 600 }}>
        Submit Inquiry
      </button>
    </form>
  </div>
</section>



    </main>
  );
}
