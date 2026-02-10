"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, MessageSquare } from "lucide-react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import * as motion from "motion/react-client";

interface AboutClientProps {
  title: string;
  content: {
    paragraphs: string[];
    lists: string[][];
  } | null;
}

const statsVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const statCardVariants = {
  hidden: { opacity: 0, y: 30, rotateY: -15 },
  visible: {
    opacity: 1,
    y: 0,
    rotateY: 0,
    transition: { duration: 0.5 },
  },
};

const statColors = {
  text: "text-blue-600",
  label: "text-slate-500",
};

export default function AboutClient({ title, content }: AboutClientProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const description = content?.paragraphs.join(" ") ?? "";

  const stats = content?.lists?.[0] ?? null;

  const statsData =
    stats &&
    stats
      .map((stat) => {
        const match = stat.match(/^(.+?)\s+(.+)$/);
        if (!match) return null;
        const [, value, label] = match;
        return { value: value.replace(/[📍\s]/g, ""), label };
      })
      .filter(Boolean);

  const handleWhatsAppClick = () => {
    const { name, phone, message } = formData;
    const whatsappNumber = "9137180056"; // Based on the phone number in the component
    const text = `Hello, I would like to book an appointment.\n\nName: ${name}\nPhone: ${phone}\nMessage: ${message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section
      id="about"
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden z-10 w-full snap-start"
    >
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "url('/section_bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.5,
        }}
      />

      <motion.div
        className="relative max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-900"
            >
              {title}
            </motion.h2>

            <motion.p className="text-lg text-slate-600 mb-6 font-medium">
              {description}
            </motion.p>

            <div
              className="flex items-center space-x-2 text-blue-600 font-semibold"
            >
              {/* <MapPin className="w-5 h-5" />
              <span className="text-lg">
                {stats &&
                  stats.find((s) => s.includes("📍"))?.replace("📍 ", "")}
              </span> */}
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-6"
            variants={statsVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {statsData &&
              statsData.slice(1, 5).map((stat, index) => (
                <motion.div key={index} variants={statCardVariants}>
                  <Card className="bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow p-2">
                    <CardHeader className="p-4">
                      <CardTitle
                        className={`text-4xl font-extrabold ${statColors.text}`}
                      >
                        {stat!.value}
                      </CardTitle>
                      <CardDescription className={`${statColors.label} font-medium`}>{stat!.label}</CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
          </motion.div>
        </div>

        {/* Get in Touch Section */}
        <div className="mt-32 pt-16 border-t border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-4xl font-extrabold text-slate-900 mb-4">Get in Touch</h3>
              <p className="text-lg text-slate-500 mb-12">
                Visit us for a consultation or book an appointment online.
              </p>

              <div className="space-y-10">
                {/* Location */}
                <div className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Location</h4>
                    <p className="text-slate-500 leading-relaxed max-w-sm">
                      104, Akshardham Complex, Opp.Vijay Anand Party Lawns, Dalmil Road, Surendranagar, 363001.
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Phone Number</h4>
                    <p className="text-slate-500">9137180056</p>
                    <p className="text-slate-400 text-sm mt-1">Mon-Sat: 9AM-1PM, 4PM-8PM</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Email Address</h4>
                    <p className="text-slate-500">contact@zidbit.com</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Appointment Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="rounded-3xl border-none shadow-2xl bg-white p-4 md:p-8">
                <CardHeader className="px-0 pt-0 pb-8">
                  <CardTitle className="text-2xl font-bold text-slate-900">Book Appointment</CardTitle>
                </CardHeader>
                <CardContent className="px-0 space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Name</label>
                    <Input
                      placeholder="Enter name"
                      className="bg-slate-50 border-none h-14 rounded-xl px-6 focus-visible:ring-blue-600"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Phone Number</label>
                    <Input
                      placeholder="Enter phone number"
                      className="bg-slate-50 border-none h-14 rounded-xl px-6 focus-visible:ring-blue-600"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Message</label>
                    <Textarea
                      placeholder="Briefly describe your project..."
                      className="bg-slate-50 border-none rounded-xl p-6 min-h-[120px] focus-visible:ring-blue-600 resize-none"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                  <Button
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white h-14 rounded-xl text-lg font-bold shadow-lg transition-all duration-300"
                    onClick={handleWhatsAppClick}
                  >
                    Confirm Appointment via WhatsApp
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
