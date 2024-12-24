"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ContactForm } from "./contact-form";
import { Mail, MapPin, Phone } from "lucide-react";

export function ContactSection() {
  return (
    <section className="py-24 bg-secondary/20" id="contact">
      <div className="px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground">
            Have a question or want to work together? Drop us a message!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="p-6 text-center">
            <MapPin className="w-8 h-8 mx-auto mb-4 text-primary" />
            <h3 className="font-semibold mb-2">Visit Us</h3>
            <p className="text-muted-foreground">
              123 Innovation Street
              <br />
              Tech Valley, CA 94043
            </p>
          </Card>

          <Card className="p-6 text-center">
            <Phone className="w-8 h-8 mx-auto mb-4 text-primary" />
            <h3 className="font-semibold mb-2">Call Us</h3>
            <p className="text-muted-foreground">
              +1 (555) 123-4567
              <br />
              Mon-Fri, 9am-6pm PST
            </p>
          </Card>

          <Card className="p-6 text-center">
            <Mail className="w-8 h-8 mx-auto mb-4 text-primary" />
            <h3 className="font-semibold mb-2">Email Us</h3>
            <p className="text-muted-foreground">
              info@techcorp.com
              <br />
              support@techcorp.com
            </p>
          </Card>
        </div>

        <Card className="mt-12 p-8">
          <ContactForm />
        </Card>
      </div>
    </section>
  );
}