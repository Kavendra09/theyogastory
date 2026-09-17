"use client";

import { Sparkles, Award, Heart, BookOpen } from "lucide-react";

interface Teacher {
  name: string;
  role: string;
  credential: string;
  specialty: string[];
  bio: string;
  quote: string;
  avatarColor: string;
}

const TEACHERS: Teacher[] = [
  {
    name: "Elena Vance",
    role: "Lead Vinyasa & Somatics",
    credential: "500-hr E-RYT • Rishikesh Trained",
    specialty: ["Prana Flow", "Spinal Decompression", "Nidra"],
    bio: "Elena spent 8 years studying Vedic movement traditions in the foothills of Rishikesh and Bali. Her classes are a seamless dialogue between fluid movement, breath rhythm, and neuro-fascial unwinding.",
    quote: "Yoga is not about touching your toes, it is what you discover on the journey down.",
    avatarColor: "linear-gradient(135deg, #C27852 0%, #D6A85D 100%)",
  },
  {
    name: "Arjun Dev",
    role: "Acoustic Alchemy & Sound Master",
    credential: "Nada Yoga Master • Tibetan Bowl Certified",
    specialty: ["432Hz Sound Baths", "Kundalini Kriya", "Vedic Chanting"],
    bio: "A trained classical acoustic musician and meditation master, Arjun weaves ancient bronze Tibetan gongs and quartz singing bowls to shift brain activity into regenerative states of consciousness.",
    quote: "Sound is the cosmic fabric of the universe; through vibration, we return to origin.",
    avatarColor: "linear-gradient(135deg, #375344 0%, #527A64 100%)",
  },
  {
    name: "Maya Lin",
    role: "Fascia & Restorative Yin Lead",
    credential: "Somatic Bodywork & Yin Specialist",
    specialty: ["Myofascial Release", "Acupressure Yin", "Nervous System Reset"],
    bio: "Drawing from Chinese meridian theory and somatic psychology, Maya cultivates a space of profound surrender. Her sessions emphasize gentle fascia hydration and emotional release.",
    quote: "Stillness is not absence; it is the presence of everything that truly matters.",
    avatarColor: "linear-gradient(135deg, #5A6D63 0%, #7E978C 100%)",
  },
  {
    name: "Kai Soren",
    role: "Ashtanga Tradition & Alignment",
    credential: "Mysore Authorized • Kinesiology B.S.",
    specialty: ["Traditional Ashtanga", "Anatomical Safety", "Inversion Dynamics"],
    bio: "With a background in kinesiology and traditional Ashtanga, Kai guides practitioners through disciplined alignment, helping students build athletic stamina without straining delicate joints.",
    quote: "Discipline is the highest form of self-love when practiced with gentleness.",
    avatarColor: "linear-gradient(135deg, #7D5C43 0%, #B88560 100%)",
  },
];

export default function TeachersSection() {
  return (
    <section id="teachers" className="section-padding" style={{ background: "rgba(250, 248, 245, 0.7)" }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="badge-tag">
            <Award size={14} color="#375344" />
            <span>Master Guides</span>
          </div>
          <h2 className="section-title">Guided by Devoted Practitioners</h2>
          <p className="section-subtitle">
            Our certified guides bring decades of lineage study, anatomical awareness,
            and gentle compassionate presence to support your unique evolution.
          </p>
        </div>

        {/* Teachers Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "28px",
          }}
        >
          {TEACHERS.map((teacher, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                borderRadius: "24px",
                padding: "32px 26px",
                display: "flex",
                flexDirection: "column",
                border: "1px solid rgba(55,83,68,0.1)",
              }}
            >
              {/* Avatar Icon / Monogram */}
              <div
                style={{
                  width: "72px",
                  height: "72px",
                  borderRadius: "50%",
                  background: teacher.avatarColor,
                  color: "#FAF8F5",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.7rem",
                  fontWeight: 600,
                  boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
                  marginBottom: "20px",
                }}
              >
                {teacher.name.split(" ").map((n) => n[0]).join("")}
              </div>

              <h3
                className="serif"
                style={{ fontSize: "1.5rem", color: "#1D2321", marginBottom: "4px" }}
              >
                {teacher.name}
              </h3>

              <div style={{ fontSize: "0.88rem", fontWeight: 600, color: "#375344", marginBottom: "4px" }}>
                {teacher.role}
              </div>

              <div style={{ fontSize: "0.78rem", color: "#8E9995", marginBottom: "16px" }}>
                {teacher.credential}
              </div>

              {/* Specialty tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "18px" }}>
                {teacher.specialty.map((tag, i) => (
                  <span
                    key={i}
                    style={{
                      fontSize: "0.74rem",
                      background: "rgba(55, 83, 68, 0.08)",
                      color: "#375344",
                      padding: "4px 10px",
                      borderRadius: "12px",
                      fontWeight: 600,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Bio */}
              <p
                style={{
                  fontSize: "0.92rem",
                  lineHeight: 1.65,
                  color: "#54605B",
                  marginBottom: "20px",
                }}
              >
                {teacher.bio}
              </p>

              {/* Quote */}
              <div
                style={{
                  marginTop: "auto",
                  paddingTop: "14px",
                  borderTop: "1px dashed rgba(55,83,68,0.15)",
                  fontFamily: "var(--font-serif)",
                  fontSize: "0.95rem",
                  fontStyle: "italic",
                  color: "#7E8E87",
                  lineHeight: 1.45,
                }}
              >
                "{teacher.quote}"
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
