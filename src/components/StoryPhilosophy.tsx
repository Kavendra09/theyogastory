"use client";

import { Wind, Activity, Feather, Sun, Quote } from "lucide-react";

export default function StoryPhilosophy() {
  const pillars = [
    {
      icon: <Wind size={26} color="#375344" />,
      tag: "Pillar I",
      title: "Pranayama • The Breath",
      desc: "Breath is the bridge connecting the physical body to consciousness. Through deliberate breath control, we downregulate your sympathetic nervous system, creating space between stimulus and response.",
    },
    {
      icon: <Activity size={26} color="#C27852" />,
      tag: "Pillar II",
      title: "Asana • Somatic Flow",
      desc: "Moving beyond aesthetic postures into felt somatic alignment. We blend traditional Vedic lineages with biomechanical intelligence to decompress joints, build lean resilience, and release tension.",
    },
    {
      icon: <Feather size={26} color="#527A64" />,
      tag: "Pillar III",
      title: "Dhyana • Quiet Stillness",
      desc: "In an overstimulated digital world, true luxury is quietude. Each session gently culminates in restorative soundscapes and reflective silence, allowing your mind to digest life's experiences.",
    },
  ];

  return (
    <section id="philosophy" className="section-padding" style={{ position: "relative" }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="badge-tag">
            <Sun size={14} color="#375344" />
            <span>Our Philosophy</span>
          </div>
          <h2 className="section-title">The Sacred Journey of Stillness</h2>
          <p className="section-subtitle">
            The Yoga Story was founded not as another fitness workout, but as a homecoming
            to yourself. Here is how we cultivate stillness in every practice.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(310px, 1fr))",
            gap: "28px",
            marginBottom: "64px",
          }}
        >
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: "36px 30px",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                borderRadius: "24px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "24px",
                }}
              >
                <div
                  style={{
                    width: "54px",
                    height: "54px",
                    borderRadius: "16px",
                    background: "var(--primary-subtle)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </div>
                <span
                  style={{
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                  }}
                >
                  {item.tag}
                </span>
              </div>

              <h3
                className="serif"
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 600,
                  marginBottom: "12px",
                  color: "#1E2824",
                }}
              >
                {item.title}
              </h3>

              <p style={{ fontSize: "0.98rem", lineHeight: 1.75, color: "#54605B" }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Founder Story Banner */}
        <div
          className="glass-card story-banner"
          style={{
            background: "linear-gradient(135deg, #2A3832 0%, #1A2420 100%)",
            color: "#FAF8F5",
            padding: "48px 40px",
            borderRadius: "28px",
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: "40px",
            alignItems: "center",
          }}
        >
          <div>
            <Quote size={36} color="#D6A85D" style={{ opacity: 0.8, marginBottom: "16px" }} />
            <p
              className="serif"
              style={{
                fontSize: "1.35rem",
                fontStyle: "italic",
                lineHeight: 1.6,
                color: "#F2ECE4",
                marginBottom: "24px",
              }}
            >
              "We noticed how tired modern society had become—not just physically, but emotionally.
              The Yoga Story is our antidote: an earthy haven free of judgment, where you can unbuckle
              the heavy armor of daily life and remember what it feels like to simply be."
            </p>
            <div>
              <div style={{ fontWeight: 600, fontSize: "1.05rem", color: "#FAF8F5" }}>
                Ananya & Marcus Vance
              </div>
              <div style={{ fontSize: "0.84rem", color: "#98A8A1" }}>
                Founders & Lead Mindfulness Practitioners
              </div>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px",
            }}
          >
            <div
              style={{
                background: "rgba(255,255,255,0.06)",
                borderRadius: "18px",
                padding: "20px",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <div className="serif" style={{ fontSize: "2rem", color: "#D6A85D" }}>
                100%
              </div>
              <div style={{ fontSize: "0.85rem", color: "#CBD5CE" }}>
                Sustainably sourced cork mats & props
              </div>
            </div>

            <div
              style={{
                background: "rgba(255,255,255,0.06)",
                borderRadius: "18px",
                padding: "20px",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <div className="serif" style={{ fontSize: "2rem", color: "#D6A85D" }}>
                16
              </div>
              <div style={{ fontSize: "0.85rem", color: "#CBD5CE" }}>
                Max practitioners per class for personalized care
              </div>
            </div>

            <div
              style={{
                background: "rgba(255,255,255,0.06)",
                borderRadius: "18px",
                padding: "20px",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <div className="serif" style={{ fontSize: "2rem", color: "#D6A85D" }}>
                Pure
              </div>
              <div style={{ fontSize: "0.85rem", color: "#CBD5CE" }}>
                HEPA filtered air with organic botanical diffusers
              </div>
            </div>

            <div
              style={{
                background: "rgba(255,255,255,0.06)",
                borderRadius: "18px",
                padding: "20px",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <div className="serif" style={{ fontSize: "2rem", color: "#D6A85D" }}>
                Daily
              </div>
              <div style={{ fontSize: "0.85rem", color: "#CBD5CE" }}>
                Complimentary post-practice herbal apothecary tea
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 860px) {
          .story-banner {
            grid-template-columns: 1fr !important;
            padding: 30px !important;
          }
        }
      `}</style>
    </section>
  );
}
