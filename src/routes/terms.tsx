import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Owlnest Media" },
      { name: "description", content: "Terms governing the use of Owlnest Media's website and services." },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-20 sm:py-28">
        <div className="container-x max-w-3xl">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-ember transition-colors">
            <ArrowLeft className="size-4" /> Back to home
          </Link>
          <h1 className="mt-6 font-display text-5xl font-bold">Terms & <span className="text-ember">Conditions</span></h1>
          <p className="mt-3 text-sm text-white/50">Last updated: 2026</p>

          <div className="mt-10 space-y-8 text-white/75 leading-relaxed">
            <section>
              <h2 className="font-display text-2xl font-bold text-white">1. Acceptance</h2>
              <p className="mt-3">By using owlnestmedia.com you agree to these terms. If you do not agree, please discontinue use of the site.</p>
            </section>
            <section>
              <h2 className="font-display text-2xl font-bold text-white">2. Services</h2>
              <p className="mt-3">Owlnest Media Pvt. Ltd. provides creative, marketing, and technology services. Scope, deliverables, and timelines for engagements are captured in individual proposals or agreements.</p>
            </section>
            <section>
              <h2 className="font-display text-2xl font-bold text-white">3. Intellectual property</h2>
              <p className="mt-3">All brand assets, copy, and creative work on this site are owned by Owlnest Media unless credited otherwise. Please do not reproduce without written permission.</p>
            </section>
            <section>
              <h2 className="font-display text-2xl font-bold text-white">4. Third-party links</h2>
              <p className="mt-3">This site links to third-party platforms (Google Maps, Calendly, Instagram, LinkedIn, and others). We are not responsible for their content or policies.</p>
            </section>
            <section>
              <h2 className="font-display text-2xl font-bold text-white">5. Changes</h2>
              <p className="mt-3">We may update these terms at any time. Continued use of the site indicates acceptance of any changes.</p>
            </section>
            <section>
              <h2 className="font-display text-2xl font-bold text-white">6. Contact</h2>
              <p className="mt-3">Questions about these terms can be sent through the contact form on the home page.</p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
