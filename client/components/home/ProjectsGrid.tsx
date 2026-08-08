"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ChevronRight } from "lucide-react";
import { mockProjects } from "@/data/mock-projects";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function ProjectsGrid() {
  const featured = mockProjects.filter((p) => p.featured);

  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-brand text-xs sm:text-sm font-bold tracking-widest uppercase mb-2">
            Our Recent Projects
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-navy">
            Delivering Excellence Across Projects
          </h2>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5"
        >
          {featured.map((project) => (
            <motion.div key={project.id} variants={item}>
              <Link
                href={`/projects/${project.slug}`}
                className="group block rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="relative w-full h-36 sm:h-40 overflow-hidden">
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-3 sm:p-4">
                  <h3 className="text-sm sm:text-[15px] font-semibold text-navy leading-snug mb-1 group-hover:text-brand transition-colors">
                    {project.title}
                  </h3>
                  <p className="flex items-center gap-1 text-xs text-gray-500">
                    <MapPin size={12} className="text-brand shrink-0" />
                    {project.location}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-center mt-10 sm:mt-12">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1 bg-navy hover:bg-navy-light text-white font-semibold px-6 py-3 rounded transition-colors text-sm"
          >
            View All Projects <ChevronRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}