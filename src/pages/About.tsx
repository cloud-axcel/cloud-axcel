import { motion } from "framer-motion";
import { Target, Eye, Users, Award, Heart, Lightbulb, Handshake, Shield } from "lucide-react";
import { Layout } from "@/components/layout";
import { CTASection } from "@/components/home";
import { StickyScroll } from "@/components/shared/StickyScroll";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace new technologies and creative thinking to solve complex problems.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "Transparency and honesty are at the core of everything we do.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work as partners with our clients, not just service providers.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We never settle for mediocrity. Quality is non-negotiable.",
  },
];

const stickyFeatures = [
  {
    icon: Users,
    title: "Client-Centric Approach",
    description: "We put your business goals at the center of everything we build, ensuring solutions that truly drive value.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnerships",
    description: "We don't just deliver projects—we build lasting relationships that grow with your business.",
  },
  {
    icon: Shield,
    title: "Trusted Expertise",
    description: "With offices in Nepal and USA, we bring global perspective with local understanding to every engagement.",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description: "Years of successful projects across industries demonstrate our commitment to excellence.",
  },
];

const team = [
  {
    name: "Arjun Patel",
    role: "CEO & Founder",
    bio: "15+ years in software development and technology leadership.",
  },
  {
    name: "Priya Sharma",
    role: "CTO",
    bio: "Former Google engineer with expertise in cloud architecture.",
  },
  {
    name: "Michael Chen",
    role: "Head of Design",
    bio: "Award-winning UX designer focused on creating delightful experiences.",
  },
  {
    name: "Sarah Williams",
    role: "VP of Engineering",
    bio: "Passionate about building scalable, high-performance systems.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-hero relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-accent font-semibold text-sm tracking-wider uppercase mb-4 block"
            >
              About Us
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-5xl md:text-6xl font-bold text-primary mb-6"
            >
              We're Building the
              <span className="text-accent"> Future of Tech</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg md:text-xl leading-relaxed"
            >
              Cloud Axcel was founded with a vision to democratize access to world-class software development. We believe every business deserves technology that empowers growth.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-4xl font-bold text-primary mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2019, Cloud Axcel began as a small team of passionate developers with a shared dream: to create software that makes a real difference in people's lives.
                </p>
                <p>
                  What started in a modest office has grown into a dynamic company serving clients across the globe. Our journey has been defined by continuous learning, bold innovation, and an unwavering commitment to our clients' success.
                </p>
                <p>
                  Today, we're proud to be trusted by startups and enterprises alike, helping them navigate the complexities of digital transformation with confidence.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="bg-primary rounded-2xl p-8 text-primary-foreground">
                <Target className="w-10 h-10 mb-4 text-accent" />
                <h3 className="font-display text-xl font-semibold mb-2">Mission</h3>
                <p className="text-primary-foreground/80 text-sm">
                  To deliver innovative software solutions that empower businesses to achieve their full potential.
                </p>
              </div>
              <div className="bg-card border border-border rounded-2xl p-8 mt-8">
                <Eye className="w-10 h-10 mb-4 text-accent" />
                <h3 className="font-display text-xl font-semibold text-primary mb-2">Vision</h3>
                <p className="text-muted-foreground text-sm">
                  To be the most trusted technology partner for businesses worldwide.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sticky Scroll Section */}
      <StickyScroll
        label="Why Cloud Axcel"
        title="Why Businesses"
        titleAccent="Choose Us"
        subtitle="Our commitment to excellence and innovation sets us apart in the software development industry."
        features={stickyFeatures}
      />

      {/* Values Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-accent font-semibold text-sm tracking-wider uppercase mb-4 block">
              Our Values
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary">
              What We Stand For
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-8 rounded-2xl border border-border text-center hover:shadow-[0_16px_48px_-12px_hsl(var(--primary)/0.1)] transition-shadow"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold text-primary mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/*
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-accent font-semibold text-sm tracking-wider uppercase mb-4 block">
              Our Team
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">
              Meet the Experts
            </h2>
            <p className="text-muted-foreground text-lg">
              Our talented team brings together diverse expertise and a shared passion for excellence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-40 h-40 mx-auto mb-6 bg-gradient-to-br from-primary to-navy-light rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform">
                  <span className="font-display text-5xl font-bold text-primary-foreground">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold text-primary mb-1">
                  {member.name}
                </h3>
                <p className="text-accent font-medium text-sm mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* CTA Section */}
      <CTASection />
    </Layout>
  );
};

export default About;
