import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Calendar, User, ChevronLeft } from "lucide-react";
import { mockProjects, getProjectBySlug } from "@/data/mock-projects";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

// Pre-render all project pages at build time
export function generateStaticParams() {
  return mockProjects.map((project) => ({ slug: project.slug }));
}

// Dynamic SEO metadata per project
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) return { title: "Project Not Found | RD Enterprises" };

  return {
    title: `${project.title} | RD Enterprises`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <article className="py-14 sm:py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-brand transition-colors mb-6"
        >
          <ChevronLeft size={16} /> Back to Projects
        </Link>

        <p className="text-brand text-xs sm:text-sm font-bold tracking-widest uppercase mb-2">
          {project.category}
        </p>
        <h1 className="text-2xl sm:text-4xl text-navy mb-4">
          {project.title}
        </h1>

        <div className="flex flex-wrap gap-4 sm:gap-6 text-sm text-gray-500 mb-8">
          <span className="flex items-center gap-1.5">
            <MapPin size={16} className="text-brand" /> {project.location}
          </span>
          {project.completedDate && (
            <span className="flex items-center gap-1.5">
              <Calendar size={16} className="text-brand" /> {project.completedDate}
            </span>
          )}
          {project.client && (
            <span className="flex items-center gap-1.5">
              <User size={16} className="text-brand" /> {project.client}
            </span>
          )}
        </div>

        <div className="relative w-full h-64 sm:h-96 rounded-xl overflow-hidden mb-8">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-10">
          {project.description}
        </p>

        {project.gallery.length > 1 && (
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-navy mb-4">
              Project Gallery
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              {project.gallery.map((img, i) => (
                <div
                  key={i}
                  className="relative w-full h-32 sm:h-40 rounded-lg overflow-hidden"
                >
                  <Image src={img} alt={`${project.title} ${i + 1}`} fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}