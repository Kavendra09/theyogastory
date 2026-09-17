"use client";

import { Sparkles, Flame, Coffee, Leaf, VolumeX, Shield, Check } from "lucide-react";

export default function SanctuarySection() {
  const features = [
    {
      icon: <Flame size={24} color="#C27852" />,
      title: "Radiant Infrared Heat",
      desc: "Unlike stifling convective hot rooms, our German infrared panels mimic sunlight, directly warming joints and tissues at cellular depth while keeping ambient air crisp and easy to breathe.",
    },
    {
      icon: <Coffee size={24} color="#D6A85D" />,
      title: "Herbal Apothecary Lounge",
      desc: "After each class, rest in our apothecary lounge with complimentary organic infusions: Himalayan Tulsi, Ashwagandha calming brews, and turmeric golden lattes.",
    },
    {
      icon: <Leaf size={24} color="#375344" />,
      title: "Zero Synthetic Materials",
      desc: "Practice with peace of mind. Every yoga mat, block, bolster, and strap in our studio is crafted from sustainably harvested Portuguese cork and unbleached GOTS organic cotton.",
    },
    {
      icon: <VolumeX size={24} color="#527A64" />,
      title: "Acoustic Silence Chamber",
      desc: "Engineered with architectural sound baffles and solid clay-plaster walls that insulate you completely from metropolitan siren and street noise.",
    },
  ];

  return (
    <section id="sanctuary" className="section-padding" style={{ background: "rgba(242, 236, 228, 0.55)" }}>
      <div className="container">
        <div className="section-header">
          <div className="badge-tag">
            <Sparkles size={14} color="#C27852" />
            <span>The Space</span>
          </div>
          <h2 className="section-title">An Architecture of Serenity</h2>
          <p className="section-subtitle">
            Every square foot of The Yoga Story is meticulously curated to signal safety,
            grounding, and deep physiological restoration to your nervous system.
          </p>
        </div>

        {/* 4 Feature Columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "24px",
            marginBottom: "50px",
          }}
        >
          {features.map((feat, i) => (
            <div
              key={i}
              className="glass-card"
              style={{
                borderRadius: "20px",
                padding: "32px 24px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "14px",
                  background: "var(--bg-main)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.04)",
                }}
              >
                {feat.icon}
              </div>

              <h3
                className="serif"
                style={{ fontSize: "1.35rem", fontWeight: 600, color: "#1D2321", marginBottom: "10px" }}
              >
                {feat.title}
              </h3>

              <p style={{ fontSize: "0.92rem", lineHeight: 1.7, color: "#596862" }}>
                {feat.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Sanctuary Hours & Etiquette Box */}
        <div
          className="glass-card sanctuary-details-box"
          style={{
            borderRadius: "24px",
            padding: "32px 36px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "36px",
            background: "#FAF8F5",
            border: "1px solid rgba(55,83,68,0.15)",
          }}
        >
          <div>
            <h4 className="serif" style={{ fontSize: "1.45rem", marginBottom: "12px", color: "#1E2824" }}>
              Studio Etiquette & Mindful Presence
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              <li style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.9rem", color: "#4E5C56" }}>
                <Check size={16} color="#375344" />
                <span><strong>Silent Shala:</strong> Phones are kept in complimentary biometric lockboxes.</span>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.9rem", color: "#4E5C56" }}>
                <Check size={16} color="#375344" />
                <span><strong>Shoe-Free Sanctuary:</strong> Soft Japanese slippers are provided at reception.</span>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.9rem", color: "#4E5C56" }}>
                <Check size={16} color="#375344" />
                <span><strong>Punctual Doors:</strong> Studio doors lock at session start to preserve meditative stillness.</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="serif" style={{ fontSize: "1.45rem", marginBottom: "12px", color: "#1E2824" }}>
              Sanctuary Hours & Location
            </h4>
            <div style={{ fontSize: "0.92rem", color: "#4E5C56", lineHeight: 1.8 }}>
              <div><strong>Monday – Friday:</strong> 06:30 AM – 09:00 PM</div>
              <div><strong>Saturday & Sunday:</strong> 08:00 AM – 07:00 PM</div>
              <div style={{ marginTop: "10px", color: "#375344", fontWeight: 600 }}>
                📍 742 Lotus Path, Serenity Gardens District
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 800px) {
          .sanctuary-details-box {
            grid-template-columns: 1fr !important;
            padding: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
