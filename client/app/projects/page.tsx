import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { mockProjects } from "@/data/mock-projects";

export const metadata = {
  title: "Our Projects | RD Enterprises",
  description: "Explore RD Enterprises' completed construction and infrastructure projects across Maharashtra.",
};

export default function ProjectsPage() {
  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-brand text-xs sm:text-sm font-bold tracking-widest uppercase mb-2">
            Our Projects
          </p>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl text-navy">
            All Completed Projects
          </h1>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {mockProjects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className="group block rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="relative w-full h-40 sm:h-48 overflow-hidden">
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <p className="text-[11px] font-semibold text-brand uppercase tracking-wide mb-1">
                  {project.category}
                </p>
                <h3 className="text-sm sm:text-base font-semibold text-navy leading-snug mb-1 group-hover:text-brand transition-colors">
                  {project.title}
                </h3>
                <p className="flex items-center gap-1 text-xs text-gray-500">
                  <MapPin size={12} className="text-brand shrink-0" />
                  {project.location}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}