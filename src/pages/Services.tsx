import { motion } from "framer-motion";
import { useEffect } from "react";
import {
  Code2,
  Smartphone,
  Cloud,
  Cpu,
  Shield,
  Zap,
  CheckCircle2,
  ArrowRight,
  Lightbulb,
  Target,
  Rocket,
  HeartHandshake,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/home";
import { StickyScroll } from "@/components/shared/StickyScroll";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Custom web applications built with cutting-edge technologies. From responsive websites to complex enterprise platforms, we deliver solutions that perform.",
    features: [
      "React, Vue, Angular frontends",
      "Node.js, Python backends",
      "Progressive Web Apps (PWA)",
      "E-commerce solutions",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile apps that users love. We create seamless experiences for iOS and Android that drive engagement.",
    features: [
      "iOS & Android native apps",
      "React Native & Flutter",
      "App Store optimization",
      "Push notifications & analytics",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure and migration services. We help you leverage the full power of AWS, Azure, and Google Cloud.",
    features: [
      "Cloud architecture design",
      "Migration & modernization",
      "Serverless applications",
      "Cost optimization",
    ],
  },
  {
    icon: Cpu,
    title: "AI & Machine Learning",
    description:
      "Intelligent solutions powered by cutting-edge AI. From predictive analytics to natural language processing, we bring AI to your business.",
    features: [
      "Custom ML models",
      "Natural Language Processing",
      "Computer Vision",
      "Predictive analytics",
    ],
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description:
      "Comprehensive security solutions to protect your digital assets. We ensure your business stays safe in an increasingly connected world.",
    features: [
      "Security audits & assessments",
      "Penetration testing",
      "Compliance consulting",
      "Incident response planning",
    ],
  },
  {
    icon: Zap,
    title: "DevOps & Automation",
    description:
      "Streamlined development operations for faster, reliable deployments. We implement CI/CD pipelines that accelerate your delivery.",
    features: [
      "CI/CD pipeline setup",
      "Infrastructure as Code",
      "Container orchestration",
      "Monitoring & alerting",
    ],
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "We dive deep into understanding your business goals, challenges, and requirements.",
  },
  {
    step: "02",
    title: "Planning",
    description: "Our team creates a detailed roadmap with timelines, milestones, and deliverables.",
  },
  {
    step: "03",
    title: "Development",
    description: "Using agile methodology, we build your solution with regular updates and feedback.",
  },
  {
    step: "04",
    title: "Launch & Support",
    description: "We deploy your solution and provide ongoing maintenance and optimization.",
  },
];

const stickyFeatures = [
  {
    icon: Lightbulb,
    title: "Discovery & Strategy",
    description: "We analyze your business needs and create a comprehensive roadmap tailored to your goals.",
  },
  {
    icon: Target,
    title: "Agile Development",
    description: "Iterative development with regular feedback ensures we deliver exactly what you need.",
  },
  {
    icon: Rocket,
    title: "Quality Delivery",
    description: "Rigorous testing and quality assurance guarantee reliable, production-ready solutions.",
  },
  {
    icon: HeartHandshake,
    title: "Ongoing Partnership",
    description: "We provide continuous support and optimization to ensure long-term success.",
  },
];

const Services = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-hero relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-accent font-semibold text-sm tracking-wider uppercase mb-4 block"
            >
              Our Services
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-5xl md:text-6xl font-bold text-primary mb-6"
            >
              Solutions That
              <span className="text-accent"> Drive Growth</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg md:text-xl leading-relaxed"
            >
              From strategy to execution, we offer comprehensive technology services designed to accelerate your digital transformation.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                id={service.title.replace(/\ /g, "")}
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""} id={service.title}>
                  <div className="w-20 h-20 bg-accent/10 rounded-2xl flex items-center justify-center mb-8">
                    <service.icon className="w-10 h-10 text-accent" />
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <Button variant="hero" className="group">
                      Get Started
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
                <div
                  className={`${index % 2 === 1 ? "lg:order-1" : ""
                    } bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-12 flex items-center justify-center`}
                >
                  <div
                    className={`w-48 h-48 ${index % 2 === 0 ? "bg-primary" : "bg-accent"
                      } rounded-3xl flex items-center justify-center animate-float`}
                  >
                    <service.icon className="w-24 h-24 text-primary-foreground" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky Scroll Section */}
      <StickyScroll
        label="Our Methodology"
        title="How We"
        titleAccent="Work With You"
        subtitle="Our proven methodology ensures seamless collaboration and exceptional results at every stage of your project."
        features={stickyFeatures}
      />

      {/* Process Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-accent font-semibold text-sm tracking-wider uppercase mb-4 block">
              Our Process
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary">
              How We Work
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-card p-8 rounded-2xl border border-border h-full">
                  <span className="font-display text-6xl font-bold text-accent/20">
                    {step.step}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-primary mt-4 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-accent/30" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </Layout>
  );
};

export default Services;
