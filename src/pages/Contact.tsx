import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Clock, MessageCircle, Headphones, Zap, Users } from "lucide-react";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { StickyScroll } from "@/components/shared/StickyScroll";
import emailjs from '@emailjs/browser';

const stickyFeatures = [
  {
    icon: MessageCircle,
    title: "Quick Response",
    description: "We respond to all inquiries within 24 hours, ensuring you get the answers you need promptly.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Get a dedicated project manager who understands your needs and keeps you updated every step.",
  },
  {
    icon: Zap,
    title: "Fast Onboarding",
    description: "Our streamlined onboarding process gets your project started quickly without unnecessary delays.",
  },
  {
    icon: Users,
    title: "Global Accessibility",
    description: "With teams in Nepal and USA, we're available across time zones to support your business needs.",
  },
];

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "customersuccess@cloudaxcel.com",
    link: "mailto:customersuccess@cloudaxcel.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+977-9709109010",
    link: "tel:+9779709109010",
  },
  {
    icon: MapPin,
    label: "Nepal Office",
    value: "Kupondole Hts Rd, Lalitpur, Nepal",
    link: "#",
  },
  {
    icon: MapPin,
    label: "USA Office",
    value: "4019 Chelsea Ln, Marietta, GA 30062, USA",
    link: "#",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon - Fri: 9:00 AM - 6:00 PM (NPT / EST)",
    link: "#",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company,
        subject: formData.subject,
        message: formData.message,
        to_email: 'lokesh.bajracharya5@gmail.com'
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });

      setFormData({ name: "", email: "", company: "", subject: "", message: "" });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-hero relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-accent font-semibold text-sm tracking-wider uppercase mb-4 block"
            >
              Contact Us
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-5xl md:text-6xl font-bold text-primary mb-6"
            >
              Let's Build Something
              <span className="text-accent"> Amazing Together</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg md:text-xl leading-relaxed"
            >
              Have a project in mind? We'd love to hear about it. Get in touch and let's discuss how we can help.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <h2 className="font-display text-3xl font-bold text-primary mb-8">
                Get in Touch
              </h2>
              <p className="text-muted-foreground mb-10 leading-relaxed">
                Whether you have a question, want to discuss a project, or just want to say hello, we're here to help. Reach out through any of the channels below.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.link}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:scale-110 transition-all">
                      <info.icon className="w-5 h-5 text-accent group-hover:text-accent-foreground transition-colors" />
                    </div>
                    <div>
                      <p className="font-semibold text-primary">{info.label}</p>
                      <p className="text-muted-foreground text-sm">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="mt-12 bg-muted rounded-2xl h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-accent mx-auto mb-2" />
                  <p className="text-muted-foreground text-sm">Interactive Map</p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="bg-card p-8 md:p-12 rounded-3xl border border-border shadow-[0_16px_48px_-12px_hsl(var(--primary)/0.1)]">
                <h3 className="font-display text-2xl font-bold text-primary mb-2">
                  Send us a Message
                </h3>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        Your Name *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        Email Address *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        Company
                      </label>
                      <Input
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        Subject *
                      </label>
                      <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Project Inquiry"
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Message *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      required
                      rows={6}
                      className="resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="xl"
                    className="w-full group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sticky Scroll Section */}
      <StickyScroll
        label="Why Contact Us"
        title="What to Expect"
        titleAccent="When You Reach Out"
        subtitle="We're committed to making your experience seamless from the very first interaction."
        features={stickyFeatures}
      />

      {/* FAQ Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-accent font-semibold text-sm tracking-wider uppercase mb-4 block">
              FAQ
            </span>
            <h2 className="font-display text-4xl font-bold text-primary">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "What is your typical project timeline?",
                a: "Project timelines vary based on scope and complexity. A simple website might take 4-6 weeks, while complex enterprise applications can take 3-6 months or more.",
              },
              {
                q: "Do you offer ongoing support?",
                a: "Yes! We provide comprehensive maintenance and support packages to ensure your software continues to perform optimally after launch.",
              },
              {
                q: "What technologies do you work with?",
                a: "We work with a wide range of technologies including React, Node.js, Python, AWS, Azure, and more. We choose the best tools for each specific project.",
              },
              {
                q: "How do you handle project pricing?",
                a: "We offer both fixed-price and time-and-materials models depending on project requirements. We'll work with you to find the best approach for your budget and needs.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-6 rounded-2xl border border-border"
              >
                <h4 className="font-semibold text-primary mb-2">{faq.q}</h4>
                <p className="text-muted-foreground text-sm">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
