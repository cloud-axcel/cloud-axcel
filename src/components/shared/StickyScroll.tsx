import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface StickyFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface StickyScrollProps {
  label: string;
  title: string;
  titleAccent: string;
  subtitle: string;
  features: StickyFeature[];
}

export function StickyScroll({ label, title, titleAccent, subtitle, features }: StickyScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={containerRef}
      className="relative bg-muted/20"
      style={{ height: `${(features.length + 1) * 100}vh` }}
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Title */}
            <div>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-accent font-semibold text-sm tracking-wider uppercase mb-4 block"
              >
                {label}
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6"
              >
                {title}
                <span className="block text-accent">{titleAccent}</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-muted-foreground text-lg leading-relaxed"
              >
                {subtitle}
              </motion.p>
            </div>

            {/* Right side - Stacked Cards */}
            <div className="relative h-[400px]">
              {features.map((feature, index) => {
                const start = index / features.length;
                const end = (index + 1) / features.length;

                return (
                  <StickyCard
                    key={feature.title}
                    feature={feature}
                    index={index}
                    totalFeatures={features.length}
                    progress={scrollYProgress}
                    range={[start, end]}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface StickyCardProps {
  feature: StickyFeature;
  index: number;
  totalFeatures: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  range: [number, number];
}

function StickyCard({ feature, index, totalFeatures, progress, range }: StickyCardProps) {
  const y = useTransform(progress, range, [100, -20 * index]);
  const scale = useTransform(progress, range, [0.9, 1 - index * 0.05]);
  const opacity = useTransform(
    progress,
    [range[0], range[0] + 0.1, range[1], range[1] + 0.1],
    [0, 1, 1, index === totalFeatures - 1 ? 1 : 0.5]
  );

  return (
    <motion.div
      style={{ y, scale, opacity }}
      className="absolute inset-0"
    >
      <div
        className={`h-full rounded-3xl p-8 ${
          index % 2 === 0 ? "bg-card border border-border" : "bg-primary"
        } shadow-[0_16px_48px_-12px_hsl(var(--primary)/0.15)]`}
      >
        <div
          className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
            index % 2 === 0 ? "bg-accent/10" : "bg-primary-foreground/20"
          }`}
        >
          <feature.icon
            className={`w-8 h-8 ${
              index % 2 === 0 ? "text-accent" : "text-primary-foreground"
            }`}
          />
        </div>
        <h3
          className={`font-display text-2xl font-bold mb-4 ${
            index % 2 === 0 ? "text-primary" : "text-primary-foreground"
          }`}
        >
          {feature.title}
        </h3>
        <p
          className={`text-lg leading-relaxed ${
            index % 2 === 0 ? "text-muted-foreground" : "text-primary-foreground/80"
          }`}
        >
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
}
