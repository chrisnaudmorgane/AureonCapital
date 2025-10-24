"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";
import { useMotionVariants } from "@/hooks/use-reduced-motion";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
  once?: boolean;
  threshold?: number;
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 50,
  once = true,
  threshold = 0.1,
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once,
    margin: "-10% 0px -10% 0px",
    amount: threshold
  });
  const variants = useMotionVariants();

  const directionOffset = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
  };

  const animationVariants = {
    hidden: {
      opacity: 0,
      ...directionOffset[direction],
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };

  const animationTransition = {
    duration: 0.6,
    delay,
    ease: "easeOut" as const,
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={animationVariants}
      transition={animationTransition}
    >
      {children}
    </motion.div>
  );
}

interface StaggeredRevealProps {
  children: ReactNode[];
  className?: string;
  staggerDelay?: number;
  childDelay?: number;
}

export function StaggeredReveal({
  children,
  className = "",
  staggerDelay = 0.1,
  childDelay = 0,
}: StaggeredRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true,
    margin: "-10% 0px -10% 0px"
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: childDelay,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const itemTransition = {
    duration: 0.5,
    ease: "easeOut" as const,
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {children.map((child, index) => (
        <motion.div key={index} variants={itemVariants} transition={itemTransition}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}