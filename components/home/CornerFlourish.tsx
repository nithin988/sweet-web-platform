import { motion } from "motion/react";

export function CornerFlourish({ className }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 60 60"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.6 }}
    >
      <path d="M4 44 L4 14 Q4 4 14 4 L44 4" />
      <path d="M4 30 Q16 30 16 18" />
      <circle cx="4" cy="4" r="2.5" fill="currentColor" stroke="none" />
    </motion.svg>
  );
}
