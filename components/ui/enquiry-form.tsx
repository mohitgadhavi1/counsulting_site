"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { X, Send, Loader2 } from "lucide-react";
import * as motion from "motion/react-client";

interface EnquiryFormProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

const EnquiryForm = ({ isOpen, onClose }: EnquiryFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (
      !/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/\s/g, ""))
    ) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Replace this with your actual API endpoint
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Success - reset form and close
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        });
        setErrors({});
        onClose();

        // Show success message (you can replace with a toast notification)
        alert("Thank you for your enquiry! We'll get back to you soon.");
      } else {
        throw new Error("Failed to submit enquiry");
      }
    } catch (error) {
      console.error("Error submitting enquiry:", error);
      alert(
        "Sorry, there was an error submitting your enquiry. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  if (!isOpen) return null;

  return (
    <motion.div
      id="contact"
      className="fixed inset-0 z-100 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      {/* Form Container */}
      <motion.div
        className="relative w-full max-w-md bg-background border border-border rounded-2xl shadow-2xl overflow-hidden"
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Header */}
        <div className="bg-linear-to-r from-secondary to-secondary-foreground p-6 text-white">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Send Enquiry</h2>
            <Button
              onClick={onClose}
              variant="ghost"
              size="sm"
              className="text-white cursor-pointer hover:bg-white/20 p-1 h-8 w-8"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
          <p className="text-purple-100 mt-2">
            Let&apos;s discuss your project requirements
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Name Field */}
          <div>
            <Input
              placeholder="Full Name *"
              value={formData.name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleInputChange("name", e.target.value)
              }
              className={`${errors.name ? "border-red-500" : ""}`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <Input
              type="email"
              placeholder="Email Address *"
              value={formData.email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleInputChange("email", e.target.value)
              }
              className={`${errors.email ? "border-red-500" : ""}`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Phone Field */}
          <div>
            <Input
              type="tel"
              placeholder="Phone Number *"
              value={formData.phone}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleInputChange("phone", e.target.value)
              }
              className={`${errors.phone ? "border-red-500" : ""}`}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          {/* Company Field */}
          <div>
            <Input
              placeholder="Company Name (Optional)"
              value={formData.company}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleInputChange("company", e.target.value)
              }
            />
          </div>

          {/* Message Field */}
          <div>
            <Textarea
              placeholder="Tell us about your project requirements *"
              value={formData.message}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                handleInputChange("message", e.target.value)
              }
              className={`min-h-[100px] ${errors.message ? "border-red-500" : ""
                }`}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-linear-to-r from-secondary to-secondary-foreground cursor-pointer hover:from-purple-700 hover:to-pink-700 text-white py-3"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Send Enquiry
              </>
            )}
          </Button>

          <p className="text-sm text-muted-foreground text-center">
            We&apos;ll get back to you within 24 hours
          </p>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default EnquiryForm;
