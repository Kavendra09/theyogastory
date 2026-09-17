"use client";

import { useState } from "react";
import { Calendar, Clock, MapPin, Users, CheckCircle2 } from "lucide-react";

interface ScheduleSlot {
  id: string;
  time: string;
  title: string;
  instructor: string;
  room: string;
  spotsLeft: number;
  intensity: string;
}

interface ScheduleSectionProps {
  onBookSlot: (className: string, time: string, day: string) => void;
}

const WEEK_SCHEDULE: Record<string, ScheduleSlot[]> = {
  Monday: [
    { id: "m1", time: "07:00 AM - 08:00 AM", title: "Sunrise Prana Flow", instructor: "Elena Vance", room: "Earth Shala", spotsLeft: 4, intensity: "Dynamic" },
    { id: "m2", time: "09:30 AM - 10:45 AM", title: "Ashtanga Core & Mysore", instructor: "Kai Soren", room: "Bamboo Loft", spotsLeft: 2, intensity: "Dynamic" },
    { id: "m3", time: "12:15 PM - 01:00 PM", title: "Midday Mindful Breath & Nidra", instructor: "Maya Lin", room: "Sun Shala", spotsLeft: 7, intensity: "Deep Calm" },
    { id: "m4", time: "05:30 PM - 06:45 PM", title: "Deep Somatic Yin & Fascia", instructor: "Maya Lin", room: "Earth Shala", spotsLeft: 5, intensity: "Deep Calm" },
    { id: "m5", time: "07:15 PM - 08:15 PM", title: "Sound Alchemy & Crystal Bowls", instructor: "Arjun Dev", room: "Zen Sanctuary", spotsLeft: 3, intensity: "Gentle" },
  ],
  Tuesday: [
    { id: "t1", time: "07:00 AM - 08:00 AM", title: "Hatha Alignment & Strength", instructor: "Kai Soren", room: "Bamboo Loft", spotsLeft: 6, intensity: "Moderate" },
    { id: "t2", time: "10:00 AM - 11:15 AM", title: "Restorative Spine Unwinding", instructor: "Elena Vance", room: "Earth Shala", spotsLeft: 4, intensity: "Deep Calm" },
    { id: "t3", time: "04:30 PM - 05:30 PM", title: "Sacred Kundalini & Kriya", instructor: "Arjun Dev", room: "Sun Shala", spotsLeft: 8, intensity: "Moderate" },
    { id: "t4", time: "06:30 PM - 07:30 PM", title: "Candlelight Yoga Nidra", instructor: "Elena Vance", room: "Zen Sanctuary", spotsLeft: 1, intensity: "Deep Calm" },
  ],
  Wednesday: [
    { id: "w1", time: "07:00 AM - 08:15 AM", title: "Sunrise Prana Flow", instructor: "Elena Vance", room: "Earth Shala", spotsLeft: 5, intensity: "Dynamic" },
    { id: "w2", time: "09:30 AM - 10:45 AM", title: "Ashtanga Primary Immersion", instructor: "Kai Soren", room: "Bamboo Loft", spotsLeft: 3, intensity: "Dynamic" },
    { id: "w3", time: "05:30 PM - 06:45 PM", title: "Deep Somatic Yin & Fascia", instructor: "Maya Lin", room: "Earth Shala", spotsLeft: 6, intensity: "Deep Calm" },
    { id: "w4", time: "07:15 PM - 08:30 PM", title: "Vocal Toning & Gong Bath", instructor: "Arjun Dev", room: "Zen Sanctuary", spotsLeft: 4, intensity: "Gentle" },
  ],
  Thursday: [
    { id: "th1", time: "07:15 AM - 08:15 AM", title: "Gentle Morning Awakening", instructor: "Maya Lin", room: "Sun Shala", spotsLeft: 7, intensity: "Gentle" },
    { id: "th2", time: "10:00 AM - 11:15 AM", title: "Vinyasa Core Therapeutics", instructor: "Elena Vance", room: "Earth Shala", spotsLeft: 4, intensity: "Dynamic" },
    { id: "th3", time: "06:00 PM - 07:15 PM", title: "Kundalini Breath & Sound", instructor: "Arjun Dev", room: "Bamboo Loft", spotsLeft: 2, intensity: "Moderate" },
    { id: "th4", time: "07:45 PM - 08:45 PM", title: "Candlelight Yoga Nidra", instructor: "Elena Vance", room: "Zen Sanctuary", spotsLeft: 5, intensity: "Deep Calm" },
  ],
  Friday: [
    { id: "f1", time: "07:00 AM - 08:00 AM", title: "Sunrise Prana Flow", instructor: "Elena Vance", room: "Earth Shala", spotsLeft: 3, intensity: "Dynamic" },
    { id: "f2", time: "12:00 PM - 01:00 PM", title: "Midday De-stress & Sound", instructor: "Arjun Dev", room: "Zen Sanctuary", spotsLeft: 6, intensity: "Gentle" },
    { id: "f3", time: "05:30 PM - 07:00 PM", title: "Friday Sacred Reset & Yin", instructor: "Maya Lin", room: "Earth Shala", spotsLeft: 2, intensity: "Deep Calm" },
  ],
  Saturday: [
    { id: "sa1", time: "08:30 AM - 10:00 AM", title: "Master Class: 90min Vinyasa Mandalas", instructor: "Kai Soren", room: "Earth Shala", spotsLeft: 2, intensity: "Dynamic" },
    { id: "sa2", time: "10:30 AM - 12:00 PM", title: "Somatic Breath & Sound Portal", instructor: "Arjun Dev", room: "Zen Sanctuary", spotsLeft: 4, intensity: "Gentle" },
    { id: "sa3", time: "04:00 PM - 05:30 PM", title: "Restorative Yin & Aromatherapy", instructor: "Maya Lin", room: "Bamboo Loft", spotsLeft: 8, intensity: "Deep Calm" },
  ],
  Sunday: [
    { id: "su1", time: "09:00 AM - 10:30 AM", title: "Sunday Soul Awakening Flow", instructor: "Elena Vance", room: "Earth Shala", spotsLeft: 3, intensity: "Moderate" },
    { id: "su2", time: "11:00 AM - 12:30 PM", title: "Ecstatic Sound & Himalayan Bowls", instructor: "Arjun Dev", room: "Zen Sanctuary", spotsLeft: 1, intensity: "Gentle" },
    { id: "su3", time: "05:00 PM - 06:15 PM", title: "Evening Nidra & Candlelight Reflection", instructor: "Maya Lin", room: "Bamboo Loft", spotsLeft: 5, intensity: "Deep Calm" },
  ],
};

export default function ScheduleSection({ onBookSlot }: ScheduleSectionProps) {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const [selectedDay, setSelectedDay] = useState<string>("Monday");

  const currentSlots = WEEK_SCHEDULE[selectedDay] || [];

  return (
    <section id="schedule" className="section-padding">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="badge-tag">
            <Calendar size={14} color="#375344" />
            <span>Weekly Timetable</span>
          </div>
          <h2 className="section-title">Step Onto Your Mat</h2>
          <p className="section-subtitle">
            Choose your rhythm. Each session is capped at 16 practitioners to safeguard
            a tranquil, uncrowded experience with dedicated instructor attention.
          </p>
        </div>

        {/* Days Pill Selector */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "8px",
            marginBottom: "40px",
          }}
        >
          {days.map((day) => {
            const isSelected = selectedDay === day;
            return (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                style={{
                  padding: "12px 22px",
                  borderRadius: "20px",
                  fontSize: "0.92rem",
                  fontWeight: 600,
                  transition: "all 0.25s ease",
                  background: isSelected ? "#375344" : "rgba(255,255,255,0.7)",
                  color: isSelected ? "#FAF8F5" : "#4A5652",
                  border: isSelected
                    ? "1px solid #375344"
                    : "1px solid rgba(55, 83, 68, 0.12)",
                  boxShadow: isSelected ? "0 6px 18px rgba(55,83,68,0.22)" : "none",
                }}
              >
                {day}
              </button>
            );
          })}
        </div>

        {/* Schedule List */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            maxWidth: "940px",
            margin: "0 auto",
          }}
        >
          {currentSlots.map((slot) => (
            <div
              key={slot.id}
              className="glass-card schedule-row"
              style={{
                padding: "24px 28px",
                display: "grid",
                gridTemplateColumns: "1.4fr 1.6fr 1fr auto",
                alignItems: "center",
                gap: "20px",
                borderRadius: "20px",
              }}
            >
              {/* Time */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Clock size={18} color="#C27852" />
                <div>
                  <div style={{ fontWeight: 700, fontSize: "1rem", color: "#1D2321" }}>
                    {slot.time}
                  </div>
                  <div style={{ fontSize: "0.78rem", color: "#788781" }}>
                    {selectedDay}
                  </div>
                </div>
              </div>

              {/* Class & Details */}
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                  <span
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      color: "#18221D",
                      fontFamily: "var(--font-serif)",
                    }}
                  >
                    {slot.title}
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    fontSize: "0.82rem",
                    color: "#67756F",
                  }}
                >
                  <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                    <MapPin size={13} color="#7D9D8B" />
                    {slot.room}
                  </span>
                  <span>•</span>
                  <span>Guide: <strong>{slot.instructor}</strong></span>
                </div>
              </div>

              {/* Capacity Status */}
              <div>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    padding: "4px 12px",
                    borderRadius: "20px",
                    background:
                      slot.spotsLeft <= 2
                        ? "rgba(194, 120, 82, 0.14)"
                        : "rgba(82, 122, 100, 0.12)",
                    color: slot.spotsLeft <= 2 ? "#C27852" : "#375344",
                  }}
                >
                  <Users size={13} />
                  {slot.spotsLeft} {slot.spotsLeft === 1 ? "spot" : "spots"} left
                </span>
              </div>

              {/* Action Button */}
              <div>
                <button
                  onClick={() => onBookSlot(slot.title, slot.time, selectedDay)}
                  className="btn btn-primary btn-sm"
                  style={{ whiteSpace: "nowrap" }}
                >
                  Reserve Mat
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Complimentary Studio Amenities Note */}
        <div
          style={{
            maxWidth: "940px",
            margin: "36px auto 0",
            padding: "18px 24px",
            background: "rgba(255, 255, 255, 0.6)",
            borderRadius: "16px",
            border: "1px dashed rgba(55,83,68,0.25)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.88rem", color: "#475450" }}>
            <CheckCircle2 size={18} color="#375344" />
            <span>
              <strong>All classes include:</strong> Organic Manduka cork mat, linen eye pillows, filtered alkaline water, and post-session apothecary tea.
            </span>
          </div>
          <span style={{ fontSize: "0.82rem", color: "#8E9995" }}>
            Studio opens 20 mins prior to start
          </span>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 860px) {
          .schedule-row {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }
        }
      `}</style>
    </section>
  );
}
