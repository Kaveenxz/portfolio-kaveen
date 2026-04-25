'use client';

import { motion } from 'framer-motion';

export const FadeIn = ({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true, margin: '-50px' }}
    className={className}
  >
    {children}
  </motion.div>
);

export const StaggerContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-50px' }}
    variants={{
      visible: { transition: { staggerChildren: 0.1 } },
      hidden: {},
    }}
    className={className}
  >
    {children}
  </motion.div>
);

export const StaggerItem = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    }}
    transition={{ duration: 0.5 }}
    className={className}
  >
    {children}
  </motion.div>
);