"use client";

import { useState, useEffect } from "react";
import { X, Sparkles, Check, Calendar, Clock, User, Mail, Phone, CheckCircle } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialClass?: string;
  initialTime?: string;
  initialDay?: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  initialClass = "Sunrise Prana Flow",
  initialTime = "07:00 AM - 08:00 AM",
  initialDay = "Monday",
}: BookingModalProps) {
  const [selectedClass, setSelectedClass] = useState(initialClass);
  const [selectedDay, setSelectedDay] = useState(initialDay);
  const [selectedTime, setSelectedTime] = useState(initialTime);
  const [passType, setPassType] = useState<string>("first-time");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [experience, setExperience] = useState("Beginner / First Visit");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState("");

  useEffect(() => {
    if (initialClass) setSelectedClass(initialClass);
    if (initialDay) setSelectedDay(initialDay);
    if (initialTime) setSelectedTime(initialTime);
  }, [initialClass, initialDay, initialTime]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomRef = "YS-" + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(randomRef);
    setIsSubmitted(true);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 2000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
        background: "rgba(24, 34, 29, 0.7)",
        backdropFilter: "blur(8px)",
      }}
      onClick={handleResetAndClose}
    >
      <div
        className="glass-card"
        style={{
          width: "100%",
          maxWidth: "600px",
          background: "#FAF8F5",
          borderRadius: "28px",
          overflow: "hidden",
          boxShadow: "0 25px 60px rgba(0,0,0,0.3)",
          position: "relative",
          maxHeight: "92vh",
          display: "flex",
          flexDirection: "column",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div
          style={{
            padding: "24px 28px",
            background: "linear-gradient(135deg, #2B3A36 0%, #1A2420 100%)",
            color: "#FFF",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "0.78rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "#D6A85D",
                marginBottom: "4px",
              }}
            >
              <Sparkles size={14} />
              <span>Sanctuary Reservation</span>
            </div>
            <h3 className="serif" style={{ fontSize: "1.6rem", color: "#FAF8F5" }}>
              Reserve Your Mat
            </h3>
          </div>

          <button
            onClick={handleResetAndClose}
            aria-label="Close"
            style={{
              background: "rgba(255,255,255,0.1)",
              border: "none",
              color: "#FFF",
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ padding: "28px", overflowY: "auto" }}>
          {isSubmitted ? (
            <div style={{ textAlign: "center", padding: "20px 10px" }}>
              <div
                style={{
                  width: "72px",
                  height: "72px",
                  borderRadius: "50%",
                  background: "var(--primary-subtle)",
                  color: "#375344",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px",
                }}
              >
                <CheckCircle size={44} />
              </div>

              <span
                style={{
                  fontSize: "0.8rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  fontWeight: 700,
                }}
              >
                Reservation Confirmed
              </span>

              <h4
                className="serif"
                style={{ fontSize: "2rem", color: "#1D2321", margin: "8px 0 16px" }}
              >
                Namaste, {name || "Practitioner"}!
              </h4>

              <p style={{ color: "#54625C", fontSize: "0.98rem", marginBottom: "24px" }}>
                Your mat has been reserved for <strong>{selectedClass}</strong> on{" "}
                <strong>{selectedDay}</strong> ({selectedTime}). A confirmation email with
                arrival guidance has been sent to <strong>{email || "your email"}</strong>.
              </p>

              <div
                style={{
                  background: "#F2ECE4",
                  borderRadius: "16px",
                  padding: "16px",
                  marginBottom: "28px",
                  fontSize: "0.9rem",
                  color: "#2B3A36",
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
                <div>
                  <div style={{ fontSize: "0.75rem", color: "#6D7B75" }}>BOOKING REF</div>
                  <div style={{ fontWeight: 700 }}>{bookingRef}</div>
                </div>
                <div>
                  <div style={{ fontSize: "0.75rem", color: "#6D7B75" }}>CHECK-IN</div>
                  <div style={{ fontWeight: 700 }}>15 Mins Prior</div>
                </div>
                <div>
                  <div style={{ fontSize: "0.75rem", color: "#6D7B75" }}>MAT & TOWEL</div>
                  <div style={{ fontWeight: 700 }}>Complimentary</div>
                </div>
              </div>

              <button
                onClick={handleResetAndClose}
                className="btn btn-primary"
                style={{ width: "100%", padding: "14px" }}
              >
                Return to Sanctuary
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {/* Pass Tier Selection */}
              <div>
                <label
                  style={{
                    fontSize: "0.82rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    color: "#375344",
                    display: "block",
                    marginBottom: "8px",
                  }}
                >
                  Choose Your Pass Type
                </label>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                  <div
                    onClick={() => setPassType("first-time")}
                    style={{
                      padding: "12px 14px",
                      borderRadius: "14px",
                      cursor: "pointer",
                      border: passType === "first-time" ? "2px solid #375344" : "1px solid #D6DFDB",
                      background: passType === "first-time" ? "#EBF1EE" : "#FFFFFF",
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontWeight: 700, fontSize: "0.88rem" }}>First Experience</span>
                      <span style={{ fontWeight: 800, color: "var(--accent)" }}>$18</span>
                    </div>
                    <div style={{ fontSize: "0.74rem", color: "#6A7872", marginTop: "4px" }}>
                      Includes mat, prop & tea
                    </div>
                  </div>

                  <div
                    onClick={() => setPassType("single")}
                    style={{
                      padding: "12px 14px",
                      borderRadius: "14px",
                      cursor: "pointer",
                      border: passType === "single" ? "2px solid #375344" : "1px solid #D6DFDB",
                      background: passType === "single" ? "#EBF1EE" : "#FFFFFF",
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontWeight: 700, fontSize: "0.88rem" }}>Standard Drop-In</span>
                      <span style={{ fontWeight: 800, color: "#1D2321" }}>$26</span>
                    </div>
                    <div style={{ fontSize: "0.74rem", color: "#6A7872", marginTop: "4px" }}>
                      Single studio session
                    </div>
                  </div>
                </div>
              </div>

              {/* Session Details */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                <div>
                  <label
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      color: "#495852",
                      display: "block",
                      marginBottom: "6px",
                    }}
                  >
                    Selected Discipline
                  </label>
                  <select
                    value={selectedClass}
                    onChange={(e) => setSelectedClass(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "11px 14px",
                      borderRadius: "12px",
                      border: "1px solid #CFD8D4",
                      background: "#FFF",
                      fontSize: "0.9rem",
                    }}
                  >
                    <option value="Sunrise Prana Flow">Sunrise Prana Flow</option>
                    <option value="Deep Somatic Yin & Fascia">Deep Somatic Yin & Fascia</option>
                    <option value="Sound Alchemy & Crystal Bowls">Sound Alchemy & Crystal Bowls</option>
                    <option value="Ashtanga Core & Mysore">Ashtanga Core & Mysore</option>
                    <option value="Candlelight Yoga Nidra">Candlelight Yoga Nidra</option>
                    <option value="Sacred Kundalini & Kriya">Sacred Kundalini & Kriya</option>
                  </select>
                </div>

                <div>
                  <label
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      color: "#495852",
                      display: "block",
                      marginBottom: "6px",
                    }}
                  >
                    Preferred Day
                  </label>
                  <select
                    value={selectedDay}
                    onChange={(e) => setSelectedDay(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "11px 14px",
                      borderRadius: "12px",
                      border: "1px solid #CFD8D4",
                      background: "#FFF",
                      fontSize: "0.9rem",
                    }}
                  >
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                    <option value="Saturday">Saturday</option>
                    <option value="Sunday">Sunday</option>
                  </select>
                </div>
              </div>

              {/* Personal Details */}
              <div>
                <label
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    color: "#495852",
                    display: "block",
                    marginBottom: "6px",
                  }}
                >
                  Full Name
                </label>
                <div style={{ position: "relative" }}>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Maya Chen"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "11px 14px 11px 40px",
                      borderRadius: "12px",
                      border: "1px solid #CFD8D4",
                      fontSize: "0.92rem",
                    }}
                  />
                  <User
                    size={16}
                    color="#83918B"
                    style={{ position: "absolute", left: "14px", top: "14px" }}
                  />
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "12px" }}>
                <div>
                  <label
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      color: "#495852",
                      display: "block",
                      marginBottom: "6px",
                    }}
                  >
                    Email Address
                  </label>
                  <div style={{ position: "relative" }}>
                    <input
                      type="email"
                      required
                      placeholder="you@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={{
                        width: "100%",
                        padding: "11px 14px 11px 40px",
                        borderRadius: "12px",
                        border: "1px solid #CFD8D4",
                        fontSize: "0.92rem",
                      }}
                    />
                    <Mail
                      size={16}
                      color="#83918B"
                      style={{ position: "absolute", left: "14px", top: "14px" }}
                    />
                  </div>
                </div>

                <div>
                  <label
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      color: "#495852",
                      display: "block",
                      marginBottom: "6px",
                    }}
                  >
                    Phone
                  </label>
                  <div style={{ position: "relative" }}>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      style={{
                        width: "100%",
                        padding: "11px 14px 11px 40px",
                        borderRadius: "12px",
                        border: "1px solid #CFD8D4",
                        fontSize: "0.92rem",
                      }}
                    />
                    <Phone
                      size={16}
                      color="#83918B"
                      style={{ position: "absolute", left: "14px", top: "14px" }}
                    />
                  </div>
                </div>
              </div>

              <div>
                <label
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    color: "#495852",
                    display: "block",
                    marginBottom: "6px",
                  }}
                >
                  Yoga Experience Level
                </label>
                <select
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "11px 14px",
                    borderRadius: "12px",
                    border: "1px solid #CFD8D4",
                    background: "#FFF",
                    fontSize: "0.9rem",
                  }}
                >
                  <option value="Beginner / First Visit">First time / Curious beginner</option>
                  <option value="Occasional Practitioner">Occasional practitioner (1-2x month)</option>
                  <option value="Dedicated Yogi">Dedicated yogi (regular weekly practice)</option>
                  <option value="Advanced / Instructor">Advanced practitioner / Yoga teacher</option>
                </select>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="btn btn-accent"
                style={{
                  width: "100%",
                  padding: "15px",
                  fontSize: "1rem",
                  marginTop: "8px",
                }}
              >
                <span>Confirm & Complete Booking</span>
              </button>

              <div style={{ textAlign: "center", fontSize: "0.76rem", color: "#8E9995" }}>
                🔒 Complimentary cancellation up to 4 hours prior to class start.
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
