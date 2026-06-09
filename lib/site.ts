export const site = {
  name: "Nexora",
  whatsappDisplay: "+40 753 358 717",
  whatsappUrl: "https://wa.me/40753358717",
  instagramHandle: "@nexora.itstudio",
  instagramUrl: "https://instagram.com/nexora.itstudio",
  email: "chipserso@gmail.com",
  emailUrl: "mailto:chipserso@gmail.com",
} as const;

export const navItems = [
  { id: "services", key: "services" },
  { id: "tech", key: "tech" },
  { id: "about", key: "about" },
  { id: "reviews", key: "reviews" },
  { id: "contact", key: "contact" },
] as const;

// Technology stack, grouped. Labels are brand names — not translated.
export const techGroups = {
  frontend: ["Next.js", "React", "JavaScript", "TypeScript"],
  backend: ["Node.js", "Nest.js", "PHP"],
  mobile: ["React Native", "iOS", "Android"],
  databases: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
} as const;

export const marqueeTech = [
  "Next.js",
  "React",
  "React Native",
  "Node.js",
  "Nest.js",
  "TypeScript",
  "JavaScript",
  "PHP",
  "PostgreSQL",
  "MongoDB",
  "MySQL",
  "Redis",
] as const;
