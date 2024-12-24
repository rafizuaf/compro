"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Code2, Smartphone, Globe, Cpu } from "lucide-react";

const services = [
  {
    icon: <Code2 className="h-12 w-12" />,
    title: "Web Development",
    description: "Custom web applications built with cutting-edge technologies.",
  },
  {
    icon: <Smartphone className="h-12 w-12" />,
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications for iOS and Android.",
  },
  {
    icon: <Globe className="h-12 w-12" />,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and deployment solutions.",
  },
  {
    icon: <Cpu className="h-12 w-12" />,
    title: "AI Integration",
    description: "Intelligent solutions powered by machine learning and AI.",
  },
];

export function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-24 bg-secondary/20">
      <div className="px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground">
            We offer a comprehensive range of digital solutions to help your business thrive in the modern world.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="relative overflow-hidden group hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="mb-4 text-primary transition-transform duration-300 group-hover:scale-105">
                    {service.icon}
                  </div>
                  <CardTitle className="mb-2">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}