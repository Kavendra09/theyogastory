"use client";

import { BookOpen, Clock, ArrowRight } from "lucide-react";

interface Article {
  title: string;
  category: string;
  readTime: string;
  excerpt: string;
  date: string;
}

const ARTICLES: Article[] = [
  {
    title: "The Alchemy of Morning Breath: 4 Ancient Pranayamas to Ground Your Day",
    category: "Breathwork & Science",
    readTime: "5 min read",
    excerpt: "Discover how Nadi Shodhana (Alternate Nostril Breathing) balances hemispheric brain activity and resets the autonomic nervous system before opening screens.",
    date: "Mindful Living • June 2026",
  },
  {
    title: "Why Yin Yoga Is the Ultimate Somatic Antidote to Digital Overload",
    category: "Somatic Healing",
    readTime: "7 min read",
    excerpt: "In a culture of hyper-acceleration, long-held passive floor postures signal profound safety to deep myofascial meridians, unspooling tension stored for years.",
    date: "Practice Notes • May 2026",
  },
  {
    title: "Ayurvedic Dinacharya: Sacred Evening Rituals for Restorative REM Sleep",
    category: "Ayurveda & Rest",
    readTime: "6 min read",
    excerpt: "Exploring warm sesame oil self-massage (Abhyanga), Brahmi herbal infusions, and candlelit Yoga Nidra to prepare your consciousness for profound overnight healing.",
    date: "Sanctuary Wisdom • April 2026",
  },
];

export default function JournalSection() {
  return (
    <section id="journal" className="section-padding" style={{ background: "rgba(242, 236, 228, 0.4)" }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="badge-tag">
            <BookOpen size={14} color="#375344" />
            <span>The Journal</span>
          </div>
          <h2 className="section-title">Mindful Musings & Wisdom</h2>
          <p className="section-subtitle">
            Reflections on ancient philosophy, modern somatic science, and daily rituals
            for living with gentle presence.
          </p>
        </div>

        {/* Articles Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "28px",
          }}
        >
          {ARTICLES.map((art, idx) => (
            <article
              key={idx}
              className="glass-card"
              style={{
                borderRadius: "24px",
                padding: "34px 28px",
                display: "flex",
                flexDirection: "column",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "16px",
                  fontSize: "0.8rem",
                }}
              >
                <span
                  style={{
                    color: "var(--accent)",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  {art.category}
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: "5px", color: "#8E9995" }}>
                  <Clock size={13} />
                  {art.readTime}
                </span>
              </div>

              <h3
                className="serif"
                style={{
                  fontSize: "1.45rem",
                  lineHeight: 1.3,
                  color: "#1A2420",
                  marginBottom: "14px",
                }}
              >
                {art.title}
              </h3>

              <p
                style={{
                  fontSize: "0.94rem",
                  lineHeight: 1.7,
                  color: "#5C6B65",
                  marginBottom: "24px",
                }}
              >
                {art.excerpt}
              </p>

              <div
                style={{
                  marginTop: "auto",
                  paddingTop: "16px",
                  borderTop: "1px solid rgba(55,83,68,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  fontSize: "0.88rem",
                  fontWeight: 600,
                  color: "#375344",
                }}
              >
                <span>Read Story</span>
                <ArrowRight size={16} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
