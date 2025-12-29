import { motion } from "framer-motion";
import { Layout } from "@/components/layout";

const TermsOfService = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-hero relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-5xl md:text-6xl font-bold text-primary mb-6"
            >
              Terms of Service
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
                <h2 className="font-display text-2xl font-bold text-primary mb-4">1. Agreement to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing or using the services provided by Cloud Axcel Pvt. Ltd. ("Company," "we," "us," or "our"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not access or use our services. These Terms constitute a legally binding agreement between you and Cloud Axcel Pvt. Ltd., a company incorporated in the United States with operations in both the USA and Nepal.
                </p>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border">
                <h2 className="font-display text-2xl font-bold text-primary mb-4">2. Description of Services</h2>
                <div className="text-muted-foreground leading-relaxed">
                  <p className="mb-4">Cloud Axcel provides software development and technology consulting services, including but not limited to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Custom web application development</li>
                    <li>Mobile application development</li>
                    <li>Cloud solutions and infrastructure</li>
                    <li>AI and machine learning solutions</li>
                    <li>DevOps and automation services</li>
                    <li>Cybersecurity consulting</li>
                    <li>Technology consulting and advisory services</li>
                  </ul>
                </div>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border">
                <h2 className="font-display text-2xl font-bold text-primary mb-4">3. Client Responsibilities</h2>
                <div className="text-muted-foreground leading-relaxed">
                  <p className="mb-4">As a client, you agree to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide accurate and complete information required for the project</li>
                    <li>Respond to requests for information, feedback, or approvals in a timely manner</li>
                    <li>Pay all fees as agreed upon in the project contract</li>
                    <li>Obtain necessary licenses and permissions for third-party content</li>
                    <li>Use our services only for lawful purposes</li>
                  </ul>
                </div>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border">
                <h2 className="font-display text-2xl font-bold text-primary mb-4">4. Intellectual Property Rights</h2>
                <div className="text-muted-foreground leading-relaxed space-y-4">
                  <p><strong className="text-primary">Client Materials:</strong> You retain all rights to materials you provide to us for use in your project.</p>
                  <p><strong className="text-primary">Deliverables:</strong> Upon full payment, you will own all rights to the custom deliverables created specifically for your project, except for pre-existing materials and third-party components.</p>
                  <p><strong className="text-primary">Our Materials:</strong> We retain ownership of our proprietary tools, methodologies, frameworks, and any pre-existing intellectual property that may be incorporated into deliverables.</p>
                  <p><strong className="text-primary">Open Source:</strong> Deliverables may include open-source components subject to their respective licenses.</p>
                </div>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border">
                <h2 className="font-display text-2xl font-bold text-primary mb-4">5. Payment Terms</h2>
                <div className="text-muted-foreground leading-relaxed">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Payment terms will be specified in individual project contracts or statements of work</li>
                    <li>Invoices are due within 30 days of issuance unless otherwise agreed</li>
                    <li>Late payments may incur interest at 1.5% per month or the maximum rate permitted by law</li>
                    <li>We reserve the right to suspend services for overdue accounts</li>
                    <li>All fees are non-refundable unless otherwise specified in the project contract</li>
                  </ul>
                </div>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border">
                <h2 className="font-display text-2xl font-bold text-primary mb-4">6. Confidentiality</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Both parties agree to maintain the confidentiality of proprietary and sensitive information disclosed during the course of the engagement. This obligation extends for a period of three (3) years following the termination of services. Confidential information does not include information that is publicly available, rightfully received from third parties, or independently developed.
                </p>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border">
                <h2 className="font-display text-2xl font-bold text-primary mb-4">7. Warranties and Disclaimers</h2>
                <div className="text-muted-foreground leading-relaxed space-y-4">
                  <p><strong className="text-primary">Our Warranty:</strong> We warrant that our services will be performed in a professional and workmanlike manner consistent with industry standards. We will correct any defects in deliverables reported within 30 days of delivery at no additional cost.</p>
                  <p><strong className="text-primary">Disclaimer:</strong> EXCEPT AS EXPRESSLY PROVIDED HEREIN, OUR SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND. WE DISCLAIM ALL IMPLIED WARRANTIES, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.</p>
                </div>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border">
                <h2 className="font-display text-2xl font-bold text-primary mb-4">8. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, CLOUD AXCEL'S TOTAL LIABILITY FOR ANY CLAIMS ARISING FROM OR RELATED TO THESE TERMS OR OUR SERVICES SHALL NOT EXCEED THE TOTAL FEES PAID BY YOU FOR THE SPECIFIC PROJECT GIVING RISE TO THE CLAIM. IN NO EVENT SHALL WE BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, OR BUSINESS OPPORTUNITIES.
                </p>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border">
                <h2 className="font-display text-2xl font-bold text-primary mb-4">9. Indemnification</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You agree to indemnify, defend, and hold harmless Cloud Axcel and its officers, directors, employees, and agents from any claims, damages, losses, or expenses (including reasonable attorneys' fees) arising from your use of our services, violation of these Terms, or infringement of any third-party rights.
                </p>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border">
                <h2 className="font-display text-2xl font-bold text-primary mb-4">10. Termination</h2>
                <div className="text-muted-foreground leading-relaxed">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Either party may terminate the engagement with 30 days written notice</li>
                    <li>We may terminate immediately if you breach these Terms or fail to pay fees when due</li>
                    <li>Upon termination, you shall pay for all services rendered and expenses incurred</li>
                    <li>Provisions regarding intellectual property, confidentiality, and limitation of liability survive termination</li>
                  </ul>
                </div>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border">
                <h2 className="font-display text-2xl font-bold text-primary mb-4">11. Governing Law and Dispute Resolution</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of the State of Georgia, United States, without regard to its conflict of law provisions. Any disputes arising from these Terms shall be resolved through binding arbitration in Atlanta, Georgia, in accordance with the rules of the American Arbitration Association. The prevailing party shall be entitled to recover reasonable attorneys' fees and costs.
                </p>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border">
                <h2 className="font-display text-2xl font-bold text-primary mb-4">12. Force Majeure</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Neither party shall be liable for any failure or delay in performance due to circumstances beyond its reasonable control, including but not limited to acts of God, natural disasters, war, terrorism, riots, embargoes, acts of civil or military authorities, fire, floods, accidents, strikes, or shortages of transportation, facilities, fuel, energy, labor, or materials.
                </p>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border">
                <h2 className="font-display text-2xl font-bold text-primary mb-4">13. Modifications to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these Terms at any time. Material changes will be communicated via our website or direct notice to active clients. Your continued use of our services after such modifications constitutes acceptance of the updated Terms.
                </p>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border">
                <h2 className="font-display text-2xl font-bold text-primary mb-4">14. Miscellaneous</h2>
                <div className="text-muted-foreground leading-relaxed">
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong className="text-primary">Entire Agreement:</strong> These Terms, together with any project contracts, constitute the entire agreement between the parties</li>
                    <li><strong className="text-primary">Severability:</strong> If any provision is found unenforceable, the remaining provisions shall remain in effect</li>
                    <li><strong className="text-primary">Waiver:</strong> Failure to enforce any right does not constitute a waiver of that right</li>
                    <li><strong className="text-primary">Assignment:</strong> You may not assign these Terms without our prior written consent</li>
                  </ul>
                </div>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border">
                <h2 className="font-display text-2xl font-bold text-primary mb-4">15. Contact Information</h2>
                <div className="text-muted-foreground leading-relaxed">
                  <p className="mb-4">For questions regarding these Terms of Service, please contact us:</p>
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

export default TermsOfService;
