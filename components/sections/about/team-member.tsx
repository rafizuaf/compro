"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Linkedin, Twitter } from "lucide-react";

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  delay: number;
}

export function TeamMember({ name, role, image, delay }: TeamMemberProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden">
        <CardContent className="p-4 text-center group">
          <Avatar className="w-24 h-24 mx-auto mb-4 transition-transform duration-300 group-hover:scale-105">
            <AvatarImage src={image} alt={name} />
            <AvatarFallback>{name[0]}</AvatarFallback>
          </Avatar>
          <h3 className="font-semibold text-lg mb-1">{name}</h3>
          <p className="text-sm text-muted-foreground mb-3">{role}</p>
          <div className="flex justify-center space-x-2">
            <Linkedin className="w-5 h-5 text-muted-foreground hover:text-foreground cursor-pointer" />
            <Twitter className="w-5 h-5 text-muted-foreground hover:text-foreground cursor-pointer" />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}