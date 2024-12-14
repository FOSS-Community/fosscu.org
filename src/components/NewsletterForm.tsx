// src/components/NewsletterForm.tsx
"use client";
import { useState } from "react";
import { UiButton } from "./UiButton";
export const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // Add your newsletter subscription logic here
      // For example:
      // await subscribeToNewsletter(email);
      setStatus("success");
      setEmail("");
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 px-4 py-2 rounded-md bg-white/10 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <UiButton
          type="submit"
          disabled={status === "loading"}
          className="bg-blue-600 hover:bg-blue-700"
        >
          {status === "loading"
            ? "Subscribing..."
            : status === "success"
            ? "Subscribed!"
            : "Subscribe"}
        </UiButton>
      </div>
      {status === "error" && (
        <p className="mt-2 text-red-500">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
};