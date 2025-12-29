import { motion } from "framer-motion";
import { Layout } from "@/components/layout";

const PrivacyPolicy = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-hero relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-5xl md:text-6xl font-bold text-primary mb-6"
            >
              Privacy Policy
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-lg"
            >
              Last updated: December 29, 2025
            </motion.p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="bg-card p-8 rounded-2xl border border-border">
                <h2 className="font-display text-2xl font-bold text-primary mb-4">1. Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Cloud Axcel Pvt. Ltd. ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. We are based in the United States with operations in both the USA and Nepal.
                </p>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border">
                <h2 className="font-display text-2xl font-bold text-primary mb-4">2. Information We Collect</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p><strong className="text-primary">Personal Information:</strong> We may collect personal information that you voluntarily provide to us when you contact us, subscribe to our newsletter, or engage our services. This includes:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Name and contact information (email address, phone number, mailing address)</li>
                    <li>Company name and job title</li>
                    <li>Project requirements and business information</li>
                    <li>Payment and billing information</li>
                  </ul>
                  <p><strong className="text-primary">Automatically Collected Information:</strong> When you visit our website, we may automatically collect certain information about your device, including:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>IP address and browser type</li>
                    <li>Operating system and device information</li>
                    <li>Pages visited and time spent on our website</li>
                    <li>Referring website addresses</li>
                  </ul>
                </div>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border">
                <h2 className="font-display text-2xl font-bold text-primary mb-4">3. How We Use Your Information</h2>
                <div className="text-muted-foreground leading-relaxed">
                  <p className="mb-4">We use the information we collect for the following purposes:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>To provide and maintain our services</li>
                    <li>To respond to your inquiries and provide customer support</li>
                    <li>To send you marketing communications (with your consent)</li>
                    <li>To improve our website and services</li>
                    <li>To comply with legal obligations</li>
                    <li>To protect our rights and prevent fraud</li>
                  </ul>
                </div>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border">
                <h2 className="font-display text-2xl font-bold text-primary mb-4">4. Disclosure of Your Information</h2>
                <div className="text-muted-foreground leading-relaxed">
                  <p className="mb-4">We may share your information in the following situations:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong className="text-primary">Service Providers:</strong> We may share your information with third-party vendors who perform services on our behalf</li>
                    <li><strong className="text-primary">Business Transfers:</strong> In connection with any merger, sale of company assets, or acquisition</li>
                    <li><strong className="text-primary">Legal Requirements:</strong> If required by law or in response to valid requests by public authorities</li>
                    <li><strong className="text-primary">With Your Consent:</strong> We may disclose your personal information for any other purpose with your consent</li>
                  </ul>
                </div>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border">
                <h2 className="font-display text-2xl font-bold text-primary mb-4">5. Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border">
                <h2 className="font-display text-2xl font-bold text-primary mb-4">6. Your Rights</h2>
                <div className="text-muted-foreground leading-relaxed">
                  <p className="mb-4">Depending on your location, you may have the following rights regarding your personal information:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Right to access and receive a copy of your personal data</li>
                    <li>Right to rectify or update your personal data</li>
                    <li>Right to delete your personal data</li>
                    <li>Right to restrict or object to processing</li>
                    <li>Right to data portability</li>
                    <li>Right to withdraw consent</li>
                  </ul>
                </div>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border">
                <h2 className="font-display text-2xl font-bold text-primary mb-4">7. California Privacy Rights</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you are a California resident, you have specific rights under the California Consumer Privacy Act (CCPA). You have the right to request disclosure of information we collect about you, request deletion of your personal information, and opt-out of the sale of personal information. We do not sell personal information.
                </p>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border">
                <h2 className="font-display text-2xl font-bold text-primary mb-4">8. Children's Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
                </p>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border">
                <h2 className="font-display text-2xl font-bold text-primary mb-4">9. Changes to This Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
                </p>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border">
                <h2 className="font-display text-2xl font-bold text-primary mb-4">10. Contact Us</h2>
                <div className="text-muted-foreground leading-relaxed">
                  <p className="mb-4">If you have questions about this Privacy Policy, please contact us:</p>
                  <div className="space-y-2">
                    <p><strong className="text-primary">Email:</strong> customersuccess@cloudaxcel.com</p>
                    <p><strong className="text-primary">Phone:</strong> +977-9709109010</p>
                    <p><strong className="text-primary">USA Address:</strong> 4019 Chelsea Ln, Marietta, GA 30062, USA</p>
                    <p><strong className="text-primary">Nepal Address:</strong> Kupondole Hts Rd, Lalitpur, Nepal</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
