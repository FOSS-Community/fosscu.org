"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus("success");
      setEmail("");
    } catch (_error) {
      console.log(_error);
      setStatus("error");
    }
  };

  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-black/[0.96] via-neutral-900 to-neutral-950" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-4">
            Want Latest News of OSS World?
            </h2>
            <p className="text-neutral-400 mb-8 max-w-md mx-auto">
            Sign up for our newsletter to stay up to date.
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-md mx-auto"
          >
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 rounded-lg bg-neutral-800 border border-neutral-700 px-4 py-3 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-400 transition-all"
                required
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="bg-neutral-200 hover:bg-neutral-300 text-neutral-900 rounded-lg px-6 py-3 font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Subscribing..." : "Subscribe"}
              </button>
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 h-6"
          >
            {status === "success" && (
              <p className="text-green-400">Thank you for subscribing!</p>
            )}
            {status === "error" && (
              <p className="text-red-400">Something went wrong. Please try again.</p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};