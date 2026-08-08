"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Award, Truck, Users, ShieldCheck, Check, ChevronRight } from "lucide-react";
import jcbImg from "../../public/jcb-2.jpg"

const STATS = [
  { icon: Award, value: "13+", label: "Years of Experience" },
  { icon: Truck, value: "25+", label: "Machines in Operation" },
  { icon: Users, value: "100+", label: "Projects Completed" },
];

const WHY_CHOOSE_US = [
  "Modern & Well Maintained Machinery",
  "Skilled & Experienced Team",
  "Timely Project Delivery",
  "Competitive Pricing",
  "Safety & Quality Assured",
];

export default function AboutSection() {
  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        {/* Left: text + stats */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-brand text-xs sm:text-sm font-bold tracking-widest uppercase mb-2">
            About RD Enterprises
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-navy mb-4">
            Experience. Quality. Commitment.
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
            RD Enterprises is a Chandrapur based firm providing end-to-end
            construction solutions and earthmoving equipment on rent. With
            modern machinery and a skilled team, we ensure safe, timely and
            quality execution of every project.
          </p>

          {/* Stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4 mb-8">
            {STATS.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex flex-col gap-1.5">
                <Icon size={22} className="text-brand" />
                <p className="text-xl sm:text-2xl font-extrabold text-navy">
                  {value}
                </p>
                <p className="text-xs text-gray-500 leading-snug">{label}</p>
              </div>
            ))}

            <div className="flex flex-col gap-1.5">
              <ShieldCheck size={22} className="text-brand" />
              <p className="text-xl sm:text-2xl font-extrabold text-navy">
                Safety First
              </p>
              <p className="text-xs text-gray-500 leading-snug">Always</p>
            </div>
          </div>

          <Link
            href="/about"
            className="inline-flex items-center gap-1 bg-navy hover:bg-navy-light text-white font-semibold px-6 py-3 rounded transition-colors text-sm"
          >
            Read More About Us <ChevronRight size={16} />
          </Link>
        </motion.div>

        {/* Right: image + why choose us card */}
        {/* Right: image + why choose us card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row rounded-xl overflow-hidden shadow-lg lg:h-[350px] xl:h-[350px]"
        >
          <div className="relative w-full sm:w-1/2 h-64 sm:h-full">
            <Image
              src={jcbImg}
              alt="RD Enterprises excavator at work"
              fill
              className="object-cover"
            />
          </div>

          <div className="w-full sm:w-1/2 bg-navy p-6 sm:p-8 flex flex-col justify-center overflow-y-auto">
            <p className="text-brand text-xs font-bold tracking-widest uppercase mb-4">
              Why Choose Us?
            </p>
            <ul className="flex flex-col gap-3 sm:gap-4">
              {WHY_CHOOSE_US.map((point) => (
                <li key={point} className="flex items-start gap-2.5">
                  <span className="mt-0.5 w-4 h-4 rounded-full bg-brand/20 flex items-center justify-center shrink-0">
                    <Check size={11} className="text-brand" strokeWidth={3} />
                  </span>
                  <span className="text-gray-200 text-sm leading-snug">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}