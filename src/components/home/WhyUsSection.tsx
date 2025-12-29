import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const features = [
  {
    title: "Innovation First",
    description: "We stay ahead of the curve with cutting-edge technologies and methodologies.",
  },
  {
    title: "Client-Centric",
    description: "Your success is our priority. We build solutions that drive real business value.",
  },
  {
    title: "Agile Delivery",
    description: "Fast iterations and transparent communication ensure projects stay on track.",
  },
  {
    title: "Expert Team",
    description: "Our developers are industry veterans with deep technical expertise.",
  },
];

export function WhyUsSection() {
  return (
    <section className="py-24 bg-muted/30 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-semibold text-sm tracking-wider uppercase mb-4 block">
              Why Choose Us
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">
              Building Tomorrow's
              <span className="block text-accent">Technology Today</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              At Cloud Axcel, we combine technical excellence with creative thinking to deliver software solutions that transform businesses and create lasting impact.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-primary mb-1">{feature.title}</h4>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card p-8 rounded-2xl border border-border shadow-[0_8px_24px_-8px_hsl(var(--primary)/0.1)]">
                <span className="font-display text-5xl font-bold text-accent">50+</span>
                <p className="text-muted-foreground mt-2">Projects Delivered</p>
              </div>
              <div className="bg-primary p-8 rounded-2xl text-primary-foreground mt-8">
                <span className="font-display text-5xl font-bold">98%</span>
                <p className="text-primary-foreground/70 mt-2">Client Satisfaction</p>
              </div>
              <div className="bg-accent p-8 rounded-2xl text-accent-foreground">
                <span className="font-display text-5xl font-bold">5+</span>
                <p className="text-accent-foreground/70 mt-2">Years Experience</p>
              </div>
              <div className="bg-card p-8 rounded-2xl border border-border shadow-[0_8px_24px_-8px_hsl(var(--primary)/0.1)] -mt-8">
                <span className="font-display text-5xl font-bold text-primary">30+</span>
                <p className="text-muted-foreground mt-2">Team Members</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
