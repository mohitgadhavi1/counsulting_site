"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "./input";
import { X, Upload, Loader2 } from "lucide-react";
import * as motion from "motion/react-client";

interface JoinFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const JoinForm = ({ isOpen, onClose }: JoinFormProps) => {
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<{ role?: string; email?: string; file?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const validate = () => {
    const e: typeof errors = {};
    if (!role.trim()) e.role = "Please enter the role you are interested in";
    if (!email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Enter a valid email";
    if (!file) e.file = "Please attach your resume (PDF or DOC)";
    else {
      const allowed = ["application/pdf", "application/msword"];
      if (!allowed.includes(file.type)) {
        e.file = "Only .pdf and .doc files are accepted";
      }
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleFileChange = (f?: FileList | null) => {
    if (!f || f.length === 0) {
      setFile(null);
      return;
    }
    setFile(f[0]);
    // clear file error
    setErrors((prev) => ({ ...prev, file: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);

    try {
      const fd = new FormData();
      fd.append("role", role);
      fd.append("email", email);
      if (file) fd.append("resume", file);

      // Replace with real API endpoint if available
      await fetch("/api/join", {
        method: "POST",
        body: fd,
      });

      alert("Thanks — we've received your resume and will keep it on file for future openings.");
      // reset
      setRole("");
      setEmail("");
      setFile(null);
      setErrors({});
      onClose();
    } catch (err) {
      console.error(err);
      alert("There was an error submitting your application. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-100 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      <motion.div
        className="relative w-full max-w-md bg-background border border-border rounded-2xl shadow-2xl overflow-hidden"
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="bg-linear-to-r from-secondary to-secondary-foreground p-6 text-white">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Join Us</h2>
            <Button onClick={onClose} variant="ghost" size="sm" className="text-white cursor-pointer p-1 h-8 w-8">
              <X className="w-5 h-5" />
            </Button>
          </div>
          <p className="mt-2">Currently no openings — send your resume for future roles.</p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <Input
              placeholder="Role you're interested in *"
              value={role}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRole(e.target.value)}
              className={`${errors.role ? "border-red-500" : ""}`}
            />
            {errors.role && <p className="text-red-500 text-sm mt-1">{errors.role}</p>}
          </div>

          <div>
            <Input
              type="email"
              placeholder="Email Address *"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              className={`${errors.email ? "border-red-500" : ""}`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="flex items-center gap-2 cursor-pointer">
              <div className="px-3 py-2 bg-muted rounded-md flex items-center gap-2">
                <Upload className="w-4 h-4" />
                <span className="text-sm">Attach Resume</span>
              </div>
              <input
                type="file"
                accept=".pdf,.doc"
                onChange={(e) => handleFileChange(e.target.files)}
                className="sr-only"
              />
            </label>
            <div className="mt-2 text-sm text-muted-foreground">
              {file ? file.name : "No file chosen — only .pdf and .doc allowed"}
            </div>
            {errors.file && <p className="text-red-500 text-sm mt-1">{errors.file}</p>}
          </div>

          <Button type="submit" disabled={isSubmitting} className="cursor-pointer w-full bg-linear-to-r from-secondary to-secondary-foreground text-white py-3">
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Sending...
              </>
            ) : (
              "Send Resume"
            )}
          </Button>

          <p className="text-sm text-muted-foreground text-center">We will keep your resume for future openings.</p>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default JoinForm;
