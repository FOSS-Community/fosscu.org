import { NewsletterForm } from "@/components/NewsletterForm";

export const NewsletterSection = () => {
  return (
    <section className="py-20 bg-black/[0.96] dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-gray-300 mb-8">
            Stay updated with our latest projects and community events.
          </p>
          <NewsletterForm />
        </div>
      </div>
    </section>
  );
};