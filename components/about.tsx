"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>Tentang Saya</SectionHeading>
      <p className="mb-3">
        Saya lulusan SMKN 7 Kab.Tangerang Jurusan{" "}
        <span className="font-medium">Akomodasi Perhotelan</span>, Saya memiliki minat terhadap dunia programing. Dan aktif mengikuti webinar dan bootcamp{" "}
        <span className="font-medium">Front-End Development</span>.{" "}
        <span className="italic">Bagian yang menjadi favorit saya yaitu</span> pada bagian problem solving sebuah Skill saya berfokus pada
        {" "}
        <span className="font-medium">
        Next.js, Tailwind CSS
        </span>
        </p>

    </motion.section>
  );
}
