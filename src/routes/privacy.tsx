import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Owlnest Media" },
      { name: "description", content: "How Owlnest Media collects, uses, and protects your information." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-20 sm:py-28">
        <div className="container-x max-w-3xl">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-ember transition-colors">
            <ArrowLeft className="size-4" /> Back to home
          </Link>
          <h1 className="mt-6 font-display text-5xl font-bold">Privacy <span className="text-ember">Policy</span></h1>
          <p className="mt-3 text-sm text-white/50">Last updated: 2026</p>

          <div className="mt-10 space-y-8 text-white/75 leading-relaxed">
            <section>
              <h2 className="font-display text-2xl font-bold text-white">1. Information we collect</h2>
              <p className="mt-3">This page is maintained by Owlnest Media Pvt. Ltd. When you submit our contact form, we collect the name, email, company, and message you provide so we can respond to your enquiry.</p>
            </section>
            <section>
              <h2 className="font-display text-2xl font-bold text-white">2. How we use it</h2>
              <p className="mt-3">We use submitted information solely to reply to enquiries, schedule meetings, and prepare proposals. We do not sell your data to third parties.</p>
            </section>
            <section>
              <h2 className="font-display text-2xl font-bold text-white">3. Storage</h2>
              <p className="mt-3">Submissions are stored securely in our backend and are accessible only to authorised team members.</p>
            </section>
            <section>
              <h2 className="font-display text-2xl font-bold text-white">4. Your rights</h2>
              <p className="mt-3">You can request access, correction, or deletion of your information at any time by writing to us via the contact form.</p>
            </section>
            <section>
              <h2 className="font-display text-2xl font-bold text-white">5. Contact</h2>
              <p className="mt-3">For any privacy questions, reach us through the contact form on the home page.</p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
