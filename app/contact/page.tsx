"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", { name, email, subject, message });
    // Reset form fields
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/contact-hero.jpg"
          alt="Fitness Equipment"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>
        <div className="relative z-10 text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Let&apos;s Connect
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We&apos;re here to help you on your fitness journey. Reach out to us
            anytime!
          </motion.p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div {...fadeInUp}>
            <Card className="bg-neutral-950 border-none overflow-hidden">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6 text-red-500">
                  Get in Touch
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-white">
                      Name
                    </Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="bg-neutral-900 border-gray-600 text-white"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-white">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-neutral-900 border-gray-600 text-white"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="subject" className="text-white">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="bg-neutral-900 border-gray-600 text-white"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-white">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="bg-neutral-900 border-gray-600 text-white"
                      rows={4}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/80 text-white"
                  >
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
            <Card className="bg-neutral-950 border-none overflow-hidden mb-8">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6 text-red-500">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-yellow-500 mr-2" />
                    <p className="text-white">example@gymelite.com</p>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-yellow-500 mr-2" />
                    <p className="text-white">+1-234-567-890</p>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-yellow-500 mr-2" />
                    <p className="text-white">123 Fitness Ave, Wellness City</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-neutral-950 border-none overflow-hidden">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6 text-red-500">
                  Find Us
                </h2>
                <div className="aspect-video relative">
                  <iframe
                    title="GymElite Map"
                    loading="lazy"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412648750455!2d-73.98823492404069!3d40.74844097138946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1682805705568!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  ></iframe>
                </div>
                <p className="mt-4 text-sm text-gray-400">
                  Visit us at our headquarters or find your nearest GymElite
                  location.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.section className="mt-16 text-center" {...fadeInUp}>
          <h2 className="text-2xl font-bold mb-6 text-red-500">
            Connect With Us
          </h2>
          <div className="flex justify-center space-x-6">
            {[
              { icon: Facebook, href: "#" },
              { icon: Instagram, href: "#" },
              { icon: Twitter, href: "#" },
              { icon: Youtube, href: "#" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="text-white hover:text-accent transition-colors"
              >
                <social.icon className="h-8 w-8" />
              </a>
            ))}
          </div>
        </motion.section>

        <motion.section className="mt-16 text-center" {...fadeInUp}>
          <h2 className="text-3xl font-bold mb-4">
            Got Questions? Let&apos;s Talk.
          </h2>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/80 text-white"
          >
            Contact Support
          </Button>
        </motion.section>
      </div>
    </div>
  );
};

export default ContactPage;
