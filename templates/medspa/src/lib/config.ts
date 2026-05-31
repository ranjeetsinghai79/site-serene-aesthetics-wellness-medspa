import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "SERENE AESTHETICS & MEDSPA",
    tagline: "Refined. Radiant. Renewed. Now.",
    phone: "(727) 555-1234",
    phoneHref: "tel:+17275551234",
    email: "info@sereneaesthetics.com",
    address: "123 Serene Way, St. Petersburg, FL 33701",
    city: "St. Petersburg",
    serviceAreas: ["St. Petersburg", "Clearwater", "Tampa", "Largo"],
    license: "FL-MEDSPA-12345",
    since: "2018",
    google_rating: "4.9",
    review_count: "200",
    emergency: false,
    theme: "slate",
    niche: "medspa",
  },

  services: [
    { icon: "sparkles", title: "Botox & Jeuveau", desc: "Smooth away fine lines and wrinkles for a refreshed, youthful appearance.", urgent: false },
    { icon: "droplets", title: "Dermal Fillers", desc: "Restore volume, enhance contours, and achieve natural-looking rejuvenation.", urgent: false },
    { icon: "scissors", title: "Kybella Treatments", desc: "Permanently reduce submental fat for a more defined jawline.", urgent: false },
    { icon: "heart", title: "Signature Facials", desc: "Personalized treatments to cleanse, nourish, and revitalize your skin.", urgent: false },
    { icon: "star", title: "Procell Microchanneling", desc: "Stimulate collagen production for improved skin texture and tone.", urgent: false },
    { icon: "zap", title: "IV Infusion & Vitamins", desc: "Boost your energy, immunity, and overall wellness with custom blends.", urgent: false }
  ],

  testimonials: [
    { name: "Sarah L.", location: "St. Petersburg", stars: 5, text: "I had my first Botox treatment with Serene Aesthetics, and I am absolutely thrilled with the results! The specialist was incredibly knowledgeable and made me feel so comfortable. My forehead lines are gone, and I look so much more rested. Highly recommend their precise and gentle approach!" },
    { name: "Mark T.", location: "Clearwater", stars: 5, text: "The dermal fillers I received here were a game-changer. I was nervous about looking 'done,' but the results are incredibly natural. My cheeks have a subtle lift, and I feel so much more confident. The staff is professional, and the spa itself is a tranquil oasis." },
    { name: "Jessica R.", location: "Tampa", stars: 5, text: "Serene Aesthetics truly redefines the medspa experience. I've been coming for their signature facials for months, and my skin has never looked better. The attention to detail and personalized care are unmatched. It's my little slice of luxury and self-care." }
  ],

  trustBadges: [
    "Licensed & Insured", "Certified Specialists", "5-Star Rated", "Personalized Care", "Luxurious Environment"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 500, label: "Happy Clients", suffix: "+", decimals: 0 },
    { value: 5, label: "Years Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "award", title: "Certified Specialists", desc: "Our team comprises highly trained and licensed professionals dedicated to your safety and results." },
    { icon: "sparkles", title: "Minimalist Aesthetic", desc: "We combine expert precision with a refined, minimalist approach for natural-looking enhancements." },
    { icon: "heart", title: "Personalized Care", desc: "Each treatment plan is tailored to your unique needs and aesthetic goals for optimal outcomes." },
    { icon: "home", title: "Tranquil Environment", desc: "Our spa is designed for total stillness, offering a serene escape for your self-care journey." },
    { icon: "shield-check", title: "Premium Products", desc: "We use only the highest quality, medical-grade products for superior and lasting results." },
    { icon: "thumbs-up", title: "Client Satisfaction", desc: "Your happiness and confidence are our top priorities, ensuring a truly rewarding experience." }
  ],

  formServiceOptions: ["Botox", "Fillers", "Kybella", "Facials", "Jeuveau", "Waxing", "DMK", "Eyebrows & Lashes", "Teeth Whitening", "Chiropractic", "Radiant Glow-Tox", "Semaglutide", "Procell Microchanneling", "IV Infusion and Vitamin Injectables", "Sofwave"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!