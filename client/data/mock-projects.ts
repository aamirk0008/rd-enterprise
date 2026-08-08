export type Project = {
  id: string;
  title: string;
  slug: string;
  category: string;
  location: string;
  coverImage: string;
  gallery: string[];
  description: string;
  client?: string;
  completedDate?: string; // e.g. "March 2025"
  featured: boolean;
};

export const mockProjects: Project[] = [
  {
    id: "1",
    title: "CC Road Construction",
    slug: "cc-road-construction",
    category: "Road Construction",
    location: "Chandrapur, Maharashtra",
    coverImage: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    gallery: [
      "https://plus.unsplash.com/premium_photo-1681691912442-68c4179c530c?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?q=80&w=779&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    description:
      "A complete cement-concrete road construction project executed with modern paving equipment, ensuring durability and smooth surface finish for long-term use.",
    client: "Local Municipal Council",
    completedDate: "January 2025",
    featured: true,
  },
  {
    id: "2",
    title: "RCC Drain Construction",
    slug: "rcc-drain-construction",
    category: "Civil Infrastructure",
    location: "Chandrapur, Maharashtra",
    coverImage: "https://images.unsplash.com/photo-1678664522520-ad001061ff83?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    gallery: ["https://images.unsplash.com/photo-1678664522520-ad001061ff83?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1678664522520-ad001061ff83?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    description:
      "Reinforced cement concrete drainage system built to manage stormwater runoff efficiently and prevent waterlogging in the surrounding area.",
    client: "Government Department",
    completedDate: "November 2024",
    featured: true,
  },
  {
    id: "3",
    title: "Solar Installation",
    slug: "solar-installation",
    category: "Solar Solutions",
    location: "Chandrapur, Maharashtra",
    coverImage: "https://images.unsplash.com/photo-1678664522520-ad001061ff83?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    gallery: ["https://images.unsplash.com/photo-1581091226035-689a3a904c4d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    description:
      "Ground-mounted solar panel installation delivering clean, reliable power generation with a focus on long-term energy efficiency.",
    completedDate: "August 2024",
    featured: true,
  },
  {
    id: "4",
    title: "Pond Excavation",
    slug: "pond-excavation",
    category: "Earthwork & Excavation",
    location: "Chandrapur, Maharashtra",
    coverImage: "https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?q=80&w=779&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    gallery: ["https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?q=80&w=779&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    description:
      "Large-scale earthmoving and excavation work for a water retention pond, executed using heavy machinery for precise depth and slope control.",
    completedDate: "June 2024",
    featured: true,
  },
  {
    id: "5",
    title: "Solar Street Lights",
    slug: "solar-street-lights",
    category: "Solar Solutions",
    location: "Chandrapur, Maharashtra",
    coverImage: "https://images.unsplash.com/photo-1678664522520-ad001061ff83?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    gallery: ["https://images.unsplash.com/photo-1581091226035-689a3a904c4d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    description:
      "Installation of solar-powered street lighting across public roads, improving nighttime visibility and reducing dependency on grid electricity.",
    completedDate: "April 2024",
    featured: true,
  },
];

export function getProjectBySlug(slug: string) {
  return mockProjects.find((p) => p.slug === slug);
}