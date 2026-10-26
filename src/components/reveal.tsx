"use client";
import { LazyMotion, domAnimation, m, useReducedMotion } from "motion/react";
export function Reveal({ children }: { children: React.ReactNode }) {
  const reduced = useReducedMotion();
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={false}
        whileInView={reduced ? undefined : { y: [10, 0] }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}
