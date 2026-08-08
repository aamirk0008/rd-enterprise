"use client";

import { motion } from "framer-motion";
import {
  HardHat,
  Truck,
  Milestone,
  Sun,
  Droplet,
  Building2,
} from "lucide-react";

const SERVICES = [
  { icon: HardHat, label: "Construction Services" },
  { icon: Truck, label: "Earthwork & Excavation" },
  { icon: Milestone, label: "Road & Drain Construction" },
  { icon: Sun, label: "Solar Solutions" },
  { icon: Droplet, label: "Water Resource Management" },
  { icon: Building2, label: "Civil Infrastructure Works" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function ServiceIcons() {
  return (
    <section className="relative z-20 -mt-24 sm:-mt-10 lg:-mt-16 px-4 sm:px-6">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-6xl mx-auto bg-white rounded-xl shadow-xl px-4 sm:px-6 py-6 sm:py-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6"
      >
        {SERVICES.map(({ icon: Icon, label }) => (
          <motion.div
            key={label}
            variants={item}
            className="flex flex-col items-center text-center gap-2 sm:gap-3 cursor-pointer group"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-navy/5 flex items-center justify-center group-hover:bg-brand/10 transition-colors">
              <Icon size={22} className="text-navy group-hover:text-brand transition-colors sm:hidden" />
              <Icon size={26} className="text-navy group-hover:text-brand transition-colors hidden sm:block" />
            </div>
            <p className="text-[11px] sm:text-xs font-semibold text-navy leading-snug">
              {label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}