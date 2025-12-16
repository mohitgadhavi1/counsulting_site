"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, X, Mail } from "lucide-react";
import * as motion from "motion/react-client";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import EnquiryForm from "@/components/ui/enquiry-form";

const FloatingActions = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isEnquiryFormOpen, setIsEnquiryFormOpen] = useState(false);

  const handleWhatsAppClick = () => {
    // Replace with your actual WhatsApp number
    const phoneNumber = "9137180056"; // Your WhatsApp number without + or spaces
    const message = "Hi! I'm interested in your web development services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleEnquiryClick = () => {
    setIsEnquiryFormOpen(true);
    setIsExpanded(false); // Close the expanded menu
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Expanded Action Buttons */}
      <motion.div
        className="flex flex-col gap-3"
        initial={false}
        animate={{
          opacity: isExpanded ? 1 : 0,
          y: isExpanded ? 0 : 20,
          scale: isExpanded ? 1 : 0.8,
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        style={{ pointerEvents: isExpanded ? "auto" : "none" }}
      >
        {/* WhatsApp Button */}
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                onClick={handleWhatsAppClick}
                className="cursor-pointer w-12 h-12 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg border-0 p-0 flex items-center justify-center"
                title="Chat on WhatsApp"
              >
                <MessageCircle className="w-6 h-6" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>connect on whatsapp</p>
            </TooltipContent>
          </Tooltip>
        </motion.div>

        {/* Enquiry Form Button */}
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                onClick={handleEnquiryClick}
                className="cursor-pointer w-12 h-12 rounded-full bg-blue-500 hover:bg-blue-600 text-white shadow-lg border-0 p-0 flex items-center justify-center"
                title="Send Enquiry"
              >
                <Mail className="w-6 h-6" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Send Enquiry</p>
            </TooltipContent>
          </Tooltip>
        </motion.div>
      </motion.div>

      {/* Main Toggle Button */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative"
      >
        <Button
          onClick={() => setIsExpanded(!isExpanded)}
          className="cursor-pointer w-14 h-14 rounded-full bg-linear-to-r from-primary to-secondary hover:from-purple-700 hover:to-pink-700 text-white shadow-xl border-0 p-0 flex items-center justify-center relative overflow-hidden"
          title={isExpanded ? "Close" : "Contact Us"}
        >
          {/* Animated Icon */}
          <motion.div
            animate={{ rotate: isExpanded ? 45 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {isExpanded ? (
              <X className="w-6 h-6" />
            ) : (
              <Phone className="w-6 h-6" />
            )}
          </motion.div>

          {/* Pulse Animation Ring */}
          {!isExpanded && (
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-purple-400"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.7, 0, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          )}
        </Button>
      </motion.div>

      {/* Enquiry Form Popup */}
      <EnquiryForm
        isOpen={isEnquiryFormOpen}
        onClose={() => setIsEnquiryFormOpen(false)}
      />
    </div>
  );
};

export default FloatingActions;
