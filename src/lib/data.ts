export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  iconName: "studio" | "home" | "virtual" | "corporate";
  tagline: string;
  features: string[];
  ctaLabel: string;
  image: string;
}

export interface ProgramItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  level: string;
  intensity: string;
  benefits: string[];
  image: string;
}

export interface InstructorItem {
  id: string;
  name: string;
  role: string;
  specialty: string;
  bio: string;
  experience: string;
  certifications: string[];
  image: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  role: string;
  quote: string;
  rating: number;
  classAttended: string;
  avatar: string;
}

export const STUDIO_INFO = {
  name: "The Yoga Story",
  tagline: "Sanctuary of Conscious Movement, Earthen Peace & Sacred Breath",
  address: "42 Serenity Lane, Green Glen Sanctuary, Bengaluru 560034",
  googleMapsUrl: "https://maps.google.com",
  phone: "+91 98450 12844",
  email: "namaste@theyogastory.com",
  whatsapp: "+919845012844",
  hours: [
    { days: "Monday - Friday", time: "06:00 AM – 08:30 PM" },
    { days: "Saturday", time: "06:30 AM – 07:00 PM" },
    { days: "Sunday", time: "07:30 AM – 02:00 PM (Workshops & Sound Baths)" },
  ],
  socials: {
    instagram: "https://instagram.com/theyogastory",
    facebook: "https://facebook.com/theyogastorystudio",
    youtube: "https://youtube.com/@theyogastory",
  },
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "studio-classes",
    title: "Studio Classes",
    tagline: "Immersive In-Person Energy",
    shortDesc:
      "Practice within our sunlit, bamboo-floored sanctuary equipped with natural cork props, gentle aromatherapy, and radiant floor warmth.",
    iconName: "studio",
    features: [
      "Max 14 practitioners per class for focused adjustments",
      "Organic botanical tea lounge before & after class",
      "Full locker, rainfall shower & steam amenities",
    ],
    ctaLabel: "View Studio Schedule",
    image:
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "home-sessions",
    title: "Home Sessions",
    tagline: "Tailored Sanctuary at Your Doorstep",
    shortDesc:
      "Receive personalized one-on-one or private family guidance in the comfort of your home, calibrated strictly to your anatomy, schedule, and goals.",
    iconName: "home",
    features: [
      "Custom postural alignment & breath therapy",
      "Flexible morning or twilight scheduling",
      "Senior guides bringing sustainable cork mats & bolsters",
    ],
    ctaLabel: "Request Home Guide",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "virtual-sessions",
    title: "Online / Virtual Sessions",
    tagline: "Global Interactive Livestreams",
    shortDesc:
      "High-definition multi-camera live interactive flows with real-time vocal feedback and posture calibration wherever life takes you.",
    iconName: "virtual",
    features: [
      "Two-way HD video with individualized teacher cues",
      "Unlimited access to on-demand practice archives",
      "Curated ambient binaural soundscapes",
    ],
    ctaLabel: "Join Virtual Portal",
    image:
      "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "corporate-programs",
    title: "Corporate Yoga Programs",
    tagline: "Mindful Ergonomics & Burnout Relief",
    shortDesc:
      "Restore vitality, focus, and somatic ease across your corporate teams through targeted desk ergonomics, breathwork, and de-stress rituals.",
    iconName: "corporate",
    features: [
      "Spinal decompression & wrist recovery sequences",
      "Micro-breath sessions to combat cognitive fatigue",
      "Quarterly executive wellness retreats & metrics",
    ],
    ctaLabel: "Explore Corporate Plans",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80",
  },
];

export const PROGRAMS_DATA: ProgramItem[] = [
  {
    id: "hatha-vinyasa",
    title: "Hatha & Vinyasa Yoga",
    subtitle: "Fluid Movement & Structural Grace",
    description:
      "A harmonious blend of deliberate static holds and fluid breath-synchronized transitions that build functional strength, spinal mobility, and profound cardiovascular vitality.",
    duration: "60 - 75 Mins",
    level: "All Levels Welcome",
    intensity: "Moderate to Dynamic",
    benefits: [
      "Spinal decompression and postural tone",
      "Enhanced cardiovascular endurance & core power",
      "Synchronized breath-movement mental clarity",
    ],
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "meditation-mindfulness",
    title: "Meditation & Mindfulness",
    subtitle: "Stillness of the Thinking Mind",
    description:
      "Immerse yourself in gentle Pranayama breath control, somatic body scans, and sound immersion with Tibetan quartz singing bowls to calm the nervous system.",
    duration: "45 - 60 Mins",
    level: "Beginner Friendly",
    intensity: "Gentle & Restorative",
    benefits: [
      "Reduces cortisol and anxiety markers",
      "Improves parasympathetic tone and deep sleep",
      "Cultivates non-reactive mental resilience",
    ],
    image:
      "https://images.unsplash.com/photo-1512290900672-1f55b9e59902?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "prenatal-yoga",
    title: "Prenatal Yoga",
    subtitle: "Sacred Support for Mother & Child",
    description:
      "Safe, obstetrician-approved somatic postures designed to alleviate pelvic strain, build birthing stamina, and nurture a calm, deep emotional connection with your growing child.",
    duration: "55 Mins",
    level: "Trimesters 1 - 3",
    intensity: "Gentle & Supportive",
    benefits: [
      "Relieves lumbar strain and pelvic tightness",
      "Optimizes diaphragmatic breath for labor",
      "Warm sisterhood and postpartum preparation",
    ],
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "nutrition-coaching",
    title: "Nutrition & Wellness Coaching",
    subtitle: "Nourishment Rooted in Seasonal Living",
    description:
      "Personalized plant-forward culinary guidance that aligns with your metabolism, circadian rhythm, and energetic demands without dogmatic restrictions.",
    duration: "Consultation & Plans",
    level: "Personalized",
    intensity: "Lifestyle Integration",
    benefits: [
      "Gut microbiome restoration & anti-inflammation",
      "Sustained energy without afternoon crashes",
      "Clean meal plans with whole ancestral foods",
    ],
    image:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "ayurveda-guidance",
    title: "Ayurveda-Inspired Guidance",
    subtitle: "Harmonizing Your Unique Dosha",
    description:
      "Understand your unique Vata, Pitta, and Kapha constitution. Discover ancient herbal wisdom, dinacharya (daily self-care rituals), and oil abhyanga practices.",
    duration: "60 Mins",
    level: "All Seekers",
    intensity: "Holistic Health",
    benefits: [
      "Individualized Dosha constitution map",
      "Seasonal lifestyle transitions (Ritucharya)",
      "Herbal tea formulations and restorative rituals",
    ],
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "stress-management",
    title: "Stress Management & Somatics",
    subtitle: "Vagal Reset & Emotional Regulation",
    description:
      "A therapeutic sanctuary specifically designed for chronic burnout and sensory overwhelm, combining polyvagal breath resets, gentle restorative poses, and myofascial release.",
    duration: "60 Mins",
    level: "Open to All",
    intensity: "Deep Relaxation",
    benefits: [
      "Instant nervous system down-regulation",
      "Releases stored jaw, neck, and hip trauma",
      "Practical daily grounding tools for busy lives",
    ],
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=80",
  },
];

export const INSTRUCTORS_DATA: InstructorItem[] = [
  {
    id: "ananya-deshmukh",
    name: "Ananya Deshmukh",
    role: "Founder & Lead Ashtanga Guide",
    specialty: "Dynamic Vinyasa & Sacred Breathwork",
    bio: "With over 14 years of practice across Mysore and the Himalayas, Ananya brings profound anatomical awareness balanced with deep devotional poetry.",
    experience: "14+ Years Experience",
    certifications: ["E-RYT 500", "YACEP", "Pranayama Specialist"],
    image:
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "marcus-vance",
    name: "Marcus Vance",
    role: "Somatic Movement & Yin Facilitator",
    specialty: "Restorative Yin & Myofascial Release",
    bio: "Former physical therapist turned yogic guide, Marcus specializes in neuro-somatic regulation, fascia hydration, and releasing chronic tension held in tissue memory.",
    experience: "10+ Years Experience",
    certifications: ["Doctor of Physical Therapy", "RYT 500 Yin Master"],
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "kavita-menon",
    name: "Dr. Kavita Menon",
    role: "Ayurvedic Physician & Prenatal Lead",
    specialty: "Prenatal Flow & Tridoshic Health",
    bio: "A certified BAMS physician with specialized training in perinatal biomechanics, Kavita guides mothers through radiant pregnancies with gentle ancient care.",
    experience: "12+ Years Experience",
    certifications: ["BAMS Ayurveda", "RPYT Prenatal", "Doula Certified"],
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "rohan-sen",
    name: "Rohan Sen",
    role: "Sound Architect & Meditation Guide",
    specialty: "Crystal Sound Baths & Mindfulness",
    bio: "Trained in Tibetan singing bowl acoustics and Vipassana silence, Rohan designs transcendental frequencies that gently shepherd hyperactive minds into theta waves.",
    experience: "8+ Years Experience",
    certifications: ["Vipassana Practitioner", "Sound Therapy Guild"],
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
  },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "t1",
    name: "Pooja Krishnamurthy",
    location: "Indiranagar, Bengaluru",
    role: "Creative Director",
    quote:
      "The Yoga Story transformed how I navigate high-pressure deadlines. The studio feels like stepping into another dimension of warmth and stillness. Ananya’s morning Vinyasa has grounded my entire life.",
    rating: 5,
    classAttended: "Sunrise Prana Flow",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: "t2",
    name: "David Sterling",
    location: "Koramangala, Bengaluru",
    role: "Tech Entrepreneur",
    quote:
      "After years of severe lower back stiffness from desk work, the Home Sessions with Marcus provided what physical therapy couldn't. Highly professional, mindful, and deeply healing.",
    rating: 5,
    classAttended: "Private Home Somatics",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: "t3",
    name: "Meera & Siddharth Roy",
    location: "Whitefield, Bengaluru",
    role: "Expectant Parents",
    quote:
      "Dr. Kavita’s prenatal classes were an absolute anchor during my pregnancy. The gentle breathwork techniques and safe hip openings made birth so much more manageable. We are forever grateful.",
    rating: 5,
    classAttended: "Sacred Prenatal Yoga",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: "t4",
    name: "Aarav Nair",
    location: "Lavelle Road, Bengaluru",
    role: "Architect & Designer",
    quote:
      "The aesthetics alone heal you the moment you take off your shoes. The terracotta tones, linen textures, and scent of vetiver and cedarwood set a standard no other studio matches.",
    rating: 5,
    classAttended: "Candlelight Yin & Sound Bath",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
  },
];

export interface JobOpeningItem {
  id: string;
  title: string;
  subtitle?: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  iconType: "social" | "marketing" | "yoga" | "manager" | "attendant";
  tagColor: "pink" | "green" | "purple" | "yellow" | "blue";
}

export const JOBS_DATA: JobOpeningItem[] = [
  {
    id: "social-media-executive",
    title: "Social Media Executive",
    subtitle: "(Social Media Handling)",
    location: "Gurgaon",
    type: "Full-time",
    experience: "0-2 years",
    description:
      "Manage our social media presence across platforms, create engaging content and build our online community.",
    iconType: "social",
    tagColor: "pink",
  },
  {
    id: "digital-marketing-executive",
    title: "Digital Marketing & Social Media Executive",
    subtitle: "",
    location: "Gurgaon / Dehradun",
    type: "Full-time",
    experience: "1-3 years",
    description:
      "Plan and execute digital campaigns, handle social media, drive lead generation and support our brand growth.",
    iconType: "marketing",
    tagColor: "green",
  },
  {
    id: "yoga-teacher",
    title: "Yoga Teacher",
    subtitle: "(Yoga Coach)",
    location: "Gurgaon / Dehradun",
    type: "Part-time / Full-time",
    experience: "As per requirement",
    description:
      "Share your expertise, inspire others and be a part of our growing yoga community.",
    iconType: "yoga",
    tagColor: "purple",
  },
  {
    id: "centre-manager",
    title: "Centre Manager",
    subtitle: "",
    location: "Gurgaon / Dehradun",
    type: "Full-time",
    experience: "2-5 years",
    description:
      "Oversee day-to-day centre operations, manage schedules, coordinate with members and lead the team for a smooth experience.",
    iconType: "manager",
    tagColor: "yellow",
  },
  {
    id: "centre-attendant",
    title: "Centre Attendant",
    subtitle: "(Studio Care & Support)",
    location: "Gurgaon / Dehradun",
    type: "Full-time",
    experience: "0-2 years",
    description:
      "Keep our centre clean, organized and welcoming for everyone. Provide basic assistance to ensure a great experience for our members.",
    iconType: "attendant",
    tagColor: "blue",
  },
];

export interface GoogleReviewItem {
  id: string;
  name: string;
  initial: string;
  rating: number;
  date: string;
  quote: string;
  avatarBg: string;
}

export const GOOGLE_TESTIMONIALS_DATA: GoogleReviewItem[] = [
  {
    id: "g1",
    name: "Priya Sharma",
    initial: "P",
    rating: 5,
    date: "2 weeks ago",
    quote:
      "The Yoga Story has truly changed my life. The instructors are knowledgeable, kind and genuinely care about your well-being. Highly recommended!",
    avatarBg: "bg-blue-200 text-blue-800",
  },
  {
    id: "g2",
    name: "Rahul Mehta",
    initial: "R",
    rating: 5,
    date: "1 month ago",
    quote:
      "A serene and positive environment. The classes are well-structured and suitable for all levels. I feel more energetic and calm since joining.",
    avatarBg: "bg-emerald-200 text-emerald-800",
  },
  {
    id: "g3",
    name: "Sneha Verma",
    initial: "S",
    rating: 5,
    date: "1 month ago",
    quote:
      "Amazing experience! The team is so supportive and the sessions have helped me both physically and mentally. Grateful to be a part of The Yoga Story.",
    avatarBg: "bg-pink-200 text-pink-800",
  },
  {
    id: "g4",
    name: "Amit Gupta",
    initial: "A",
    rating: 5,
    date: "2 months ago",
    quote:
      "Best yoga studio in the area! Professional, friendly and truly focused on your holistic wellness. The atmosphere itself brings peace.",
    avatarBg: "bg-amber-200 text-amber-800",
  },
  {
    id: "g5",
    name: "Neha Sinha",
    initial: "N",
    rating: 5,
    date: "2 months ago",
    quote:
      "More than just a yoga studio, it's a community. I've learned so much and feel healthier, happier and more centered. Thank you The Yoga Story!",
    avatarBg: "bg-indigo-200 text-indigo-800",
  },
  {
    id: "g6",
    name: "Vikram Malhotra",
    initial: "V",
    rating: 5,
    date: "3 months ago",
    quote:
      "The morning sound immersion and asana practice helped me completely recover from corporate stress. The studio design is truly magical.",
    avatarBg: "bg-teal-200 text-teal-800",
  },
  {
    id: "g7",
    name: "Ananya Roy",
    initial: "A",
    rating: 5,
    date: "3 months ago",
    quote:
      "Instructors pay attention to each student's alignment and breathing. The atmosphere is warm, positive and genuinely peaceful.",
    avatarBg: "bg-rose-200 text-rose-800",
  },
];
