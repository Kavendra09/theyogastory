"use client";

import { useState } from "react";
import { Clock, Flame, Users, Sparkles, ArrowRight, Check } from "lucide-react";

interface ClassItem {
  id: string;
  title: string;
  sanskrit: string;
  category: "all" | "vinyasa" | "yin" | "sound" | "ashtanga";
  duration: string;
  intensity: "Gentle" | "Moderate" | "Dynamic" | "Deep Calm";
  heat: "Room Temp (72°F)" | "Warm (85°F)" | "Infrared Heated (98°F)";
  instructor: string;
  instructorRole: string;
  description: string;
  benefits: string[];
}

interface ClassesSectionProps {
  onBookClass: (className: string) => void;
}

const CLASSES_DATA: ClassItem[] = [
  {
    id: "vinyasa-prana",
    title: "Sunrise Prana Flow",
    sanskrit: "सूर्यनमस्कार विन्यास",
    category: "vinyasa",
    duration: "60 Mins",
    intensity: "Dynamic",
    heat: "Warm (85°F)",
    instructor: "Elena Vance",
    instructorRole: "Vinyasa Lead (500hr RYT)",
    description: "An invigorating morning sequence synchronizing deliberate breath with fluid transitions. Awaken spinal elasticity, fire up metabolic vitality, and enter the day centered.",
    benefits: ["Boosts lymphatic circulation", "Builds functional core heat", "Balances morning mental fog"],
  },
  {
    id: "yin-somatic",
    title: "Deep Somatic Yin & Fascia",
    sanskrit: "गहन यिन योग",
    category: "yin",
    duration: "75 Mins",
    intensity: "Deep Calm",
    heat: "Room Temp (72°F)",
    instructor: "Maya Lin",
    instructorRole: "Somatic Therapist",
    description: "Slow, floor-based postures supported by organic bolsters and blocks, held for 3 to 6 minutes to gently hydrate dense connective tissue, deep fascia, and release stored somatic tension.",
    benefits: ["Releases chronic hip tension", "Promotes parasympathetic rest", "Increases joint mobility"],
  },
  {
    id: "sound-crystal",
    title: "Sound Alchemy & Crystal Bowls",
    sanskrit: "नाद ब्रह्म ध्यान",
    category: "sound",
    duration: "60 Mins",
    intensity: "Gentle",
    heat: "Room Temp (72°F)",
    instructor: "Arjun Dev",
    instructorRole: "Acoustic Healer",
    description: "Bathe in the restorative vibrations of 432Hz frosted quartz singing bowls, Tibetan bells, and oceanic gongs. Shifts brainwaves into deep theta states for profound nervous system recovery.",
    benefits: ["Induces restful REM sleep", "Alleviates neurological stress", "Clears emotional blockages"],
  },
  {
    id: "ashtanga-primary",
    title: "Ashtanga Core & Mysore",
    sanskrit: "अष्टाङ्ग योग",
    category: "ashtanga",
    duration: "75 Mins",
    intensity: "Dynamic",
    heat: "Warm (85°F)",
    instructor: "Kai Soren",
    instructorRole: "Ashtanga Traditionist",
    description: "Rooted in the traditional Pattabhi Jois primary series with mindful anatomical adjustments. Master bandhas, drishti (gaze focus), and rhythmic ujjayi breath.",
    benefits: ["Develops razor-sharp focus", "Full body structural stamina", "Deep internal detoxification"],
  },
  {
    id: "candlelight-nidra",
    title: "Candlelight Yoga Nidra",
    sanskrit: "योग निद्रा",
    category: "yin",
    duration: "60 Mins",
    intensity: "Deep Calm",
    heat: "Room Temp (72°F)",
    instructor: "Elena Vance",
    instructorRole: "Nidra Specialist",
    description: "Known as conscious psychic sleep, this bedtime sanctuary session guides you through multilayered kosha body scans by flickering candlelight. 45 minutes of Nidra equates to 3 hours of sleep.",
    benefits: ["Restores adrenal exhaustion", "Quiets racing thoughts", "Deep somatic tranquility"],
  },
  {
    id: "kriya-breath",
    title: "Sacred Kundalini & Kriya",
    sanskrit: "कुण्डलिनी क्रिया",
    category: "sound",
    duration: "60 Mins",
    intensity: "Moderate",
    heat: "Room Temp (72°F)",
    instructor: "Arjun Dev",
    instructorRole: "Vedic Scholar",
    description: "Harness rhythmic breath of fire, spinal flexion sequences, and primordial mantra chanting to awaken dormant prana along the sushumna nadi spine.",
    benefits: ["Sharpens intuitive clarity", "Expands energetic reserve", "Releases stagnant lethargy"],
  },
];

export default function ClassesSection({ onBookClass }: ClassesSectionProps) {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredClasses =
    activeTab === "all"
      ? CLASSES_DATA
      : CLASSES_DATA.filter((c) => c.category === activeTab);

  const filterTabs = [
    { label: "All Offerings", value: "all" },
    { label: "Vinyasa Flow", value: "vinyasa" },
    { label: "Yin & Restorative", value: "yin" },
    { label: "Sound & Breath", value: "sound" },
    { label: "Ashtanga Series", value: "ashtanga" },
  ];

  return (
    <section id="classes" className="section-padding" style={{ background: "rgba(242, 236, 228, 0.45)" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-tag">
            <Sparkles size={14} color="#C27852" />
            <span>Curated Disciplines</span>
          </div>
          <h2 className="section-title">Practices Crafted for Mind & Body</h2>
          <p className="section-subtitle">
            Whether you are seeking high-prana athletic dynamism, gentle fascia unwinding,
            or acoustic sound frequency healing, explore our balanced sanctuary offerings.
          </p>
        </div>

        {/* Filter Tabs */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "10px",
            marginBottom: "48px",
          }}
        >
          {filterTabs.map((tab) => {
            const isActive = activeTab === tab.value;
            return (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                style={{
                  padding: "10px 22px",
                  borderRadius: "30px",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  transition: "all 0.25s ease",
                  background: isActive ? "#375344" : "rgba(255, 255, 255, 0.75)",
                  color: isActive ? "#FAF8F5" : "#4A5652",
                  border: isActive
                    ? "1px solid #375344"
                    : "1px solid rgba(55, 83, 68, 0.12)",
                  boxShadow: isActive ? "0 4px 16px rgba(55,83,68,0.2)" : "none",
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Classes Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
            gap: "30px",
          }}
        >
          {filteredClasses.map((item) => (
            <div
              key={item.id}
              className="glass-card"
              style={{
                display: "flex",
                flexDirection: "column",
                borderRadius: "24px",
                overflow: "hidden",
                padding: "32px",
                position: "relative",
              }}
            >
              {/* Card Meta Header */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "16px",
                }}
              >
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "var(--accent)",
                    background: "var(--accent-soft)",
                    padding: "4px 12px",
                    borderRadius: "12px",
                  }}
                >
                  {item.intensity}
                </span>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "0.82rem",
                    color: "#606F69",
                    fontWeight: 500,
                  }}
                >
                  <Clock size={14} color="#7D9D8B" />
                  <span>{item.duration}</span>
                </div>
              </div>

              {/* Title & Sanskrit */}
              <h3
                className="serif"
                style={{
                  fontSize: "1.75rem",
                  fontWeight: 600,
                  color: "#1A2420",
                  marginBottom: "4px",
                }}
              >
                {item.title}
              </h3>
              <div
                style={{
                  fontSize: "0.85rem",
                  color: "#8B9A93",
                  fontStyle: "italic",
                  marginBottom: "16px",
                }}
              >
                {item.sanskrit}
              </div>

              {/* Description */}
              <p
                style={{
                  fontSize: "0.95rem",
                  lineHeight: 1.7,
                  color: "#55645E",
                  marginBottom: "20px",
                }}
              >
                {item.description}
              </p>

              {/* Benefits Checklist */}
              <div
                style={{
                  padding: "14px 16px",
                  background: "rgba(235, 241, 238, 0.5)",
                  borderRadius: "14px",
                  marginBottom: "24px",
                }}
              >
                <div
                  style={{
                    fontSize: "0.76rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    color: "#375344",
                    marginBottom: "8px",
                  }}
                >
                  Session Focus & Benefits
                </div>
                {item.benefits.map((b, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "0.84rem",
                      color: "#475450",
                      marginBottom: "4px",
                    }}
                  >
                    <Check size={14} color="#375344" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              {/* Footer with Instructor & CTA */}
              <div
                style={{
                  marginTop: "auto",
                  paddingTop: "18px",
                  borderTop: "1px solid rgba(55, 83, 68, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ fontSize: "0.88rem", fontWeight: 700, color: "#1D2321" }}>
                    {item.instructor}
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "#7F8E87" }}>
                    {item.instructorRole}
                  </div>
                </div>

                <button
                  onClick={() => onBookClass(item.title)}
                  className="btn btn-primary btn-sm"
                  style={{
                    padding: "10px 18px",
                  }}
                >
                  <span>Reserve</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
