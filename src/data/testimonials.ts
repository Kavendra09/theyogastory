/**
 * src/data/testimonials.ts
 *
 * Testimonials and Google reviews data.
 * Zero hardcoded text in JSX.
 */
import type { Tone } from "@/theme/tones";

export interface ReviewItem {
  id: string;
  name: string;
  initial: string;
  rating: number;
  date: string;
  daysAgo: number;
  helpfulCount: number;
  quote: string;
  avatarTone: Tone;
}

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: "r1",
    name: "Priya Sharma",
    initial: "P",
    rating: 5,
    date: "2 weeks ago",
    daysAgo: 14,
    helpfulCount: 38,
    quote:
      "The Yoga Story has truly changed my life. The instructors are knowledgeable, kind and genuinely care about your well-being. Highly recommended!",
    avatarTone: "blue",
  },
  {
    id: "r2",
    name: "Rahul Mehta",
    initial: "R",
    rating: 5,
    date: "1 month ago",
    daysAgo: 30,
    helpfulCount: 29,
    quote:
      "A serene and positive environment. The classes are well-structured and suitable for all levels. I feel more energetic and calm since joining.",
    avatarTone: "green",
  },
  {
    id: "r3",
    name: "Sneha Verma",
    initial: "S",
    rating: 5,
    date: "1 month ago",
    daysAgo: 30,
    helpfulCount: 42,
    quote:
      "Amazing experience! The team is so supportive and the sessions have helped me both physically and mentally. Grateful to be a part of The Yoga Story.",
    avatarTone: "pink",
  },
  {
    id: "r4",
    name: "Amit Gupta",
    initial: "A",
    rating: 5,
    date: "2 months ago",
    daysAgo: 60,
    helpfulCount: 21,
    quote:
      "Best yoga studio in the area! Professional, friendly and truly focused on your holistic wellness. The atmosphere itself brings peace.",
    avatarTone: "yellow",
  },
  {
    id: "r5",
    name: "Neha Sinha",
    initial: "N",
    rating: 5,
    date: "2 months ago",
    daysAgo: 60,
    helpfulCount: 33,
    quote:
      "More than just a yoga studio, it's a community. I've learned so much and feel healthier, happier and more centered. Thank you The Yoga Story!",
    avatarTone: "purple",
  },
  {
    id: "r6",
    name: "Karan Malhotra",
    initial: "K",
    rating: 5,
    date: "3 months ago",
    daysAgo: 90,
    helpfulCount: 27,
    quote:
      "The morning sound immersion and asana practice helped me completely recover from corporate stress. The studio design is truly magical.",
    avatarTone: "orange",
  },
];

export const RATING_SUMMARY = {
  score: "4.9/5",
  ratingValue: 4.9,
  source: "on Google",
  countText: "100+ Happy Members",
  googleMapsUrl: "https://maps.google.com/?q=The+Yoga+Story+Studio",
  buttonLabel: "Read All Reviews on Google",
  buttonSubnote: "Opens our official Google Business Profile",
  trustItems: [
    {
      label: "Real Reviews\nfrom Real People",
      tone: "green" as Tone,
      iconType: "users",
    },
    {
      label: "Verified on\nGoogle",
      tone: "green" as Tone,
      iconType: "shield",
    },
    {
      label: "Trusted by Our\nGrowing Community",
      tone: "pink" as Tone,
      iconType: "heart",
    },
  ],
};

export type FilterKey = "all" | "5star" | "4star" | "recent" | "helpful";

export const FILTER_OPTIONS: Array<{ key: FilterKey; label: string; count?: string }> = [
  { key: "all", label: "All Reviews (100+)" },
  { key: "5star", label: "5 Stars" },
  { key: "4star", label: "4 Stars" },
  { key: "recent", label: "Recent" },
  { key: "helpful", label: "Most Helpful" },
];

export const TESTIMONIALS_SECTION = {
  eyebrow: "COMMUNITY LOVE",
  title: "Here's What They Say",
  mobileSubtitle: "Real feedback from real members on their journey with us.",
};

export const TESTIMONIALS_CTA = {
  title: "Be A Part of Our Story",
  subtitle: "Have a story to share? We'd love to hear from you!",
  buttonLabel: "Write a Review on Google",
  buttonHref: "https://g.page/r/theyogastory/review",
};
