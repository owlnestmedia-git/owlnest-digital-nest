import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useEffect, useRef, useState } from "react";
import { submitContactForm } from "@/lib/contact.functions";
import {
  ArrowUpRight, Play, Sparkles, Instagram, Mail, Phone,
  ArrowRight, Check, Star, ChevronRight, Globe, MessageCircle,
  Film, Camera, Megaphone, Search, ShoppingBag, PenTool,
  BarChart3, Layers, Zap, Quote, Calendar, Send,
  Facebook, Linkedin, Github, MapPin, ShieldCheck
} from "lucide-react";
import { Link } from "@tanstack/react-router";

/* ---------- SHARED LINKS ---------- */
const SOCIALS = [
  { name: "Instagram", href: "https://www.instagram.com/owlnest.media", Icon: Instagram },
  { name: "Facebook", href: "https://www.facebook.com/share/1BQ27QSWVq/?mibextid=wwXIfr", Icon: Facebook },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/owlnest-media-pvt-ltd/", Icon: Linkedin },
  { name: "GitHub", href: "https://github.com/owlnestmedia", Icon: Github },
  { name: "WhatsApp", href: "https://wa.me/message/Z74MFBZ4HVQGG1", Icon: MessageCircle },
];
const MAPS_URL = "https://maps.app.goo.gl/XrCj1Rvociu7CWkQ7?g_st=iw";
const UDYAM_URL = "https://udyamregistration.gov.in/verifyudyambarcode.aspx?verifyudrn=5FDilq9U1bBk1OLDxx5Yta0I0ElhGcvZpqSDMlQJ/w8=";

function SocialLinks({ size = "md" }: { size?: "sm" | "md" }) {
  const dim = size === "sm" ? "size-9" : "size-11";
  const icon = size === "sm" ? "size-4" : "size-[18px]";
  return (
    <div className="flex flex-wrap gap-2.5">
      {SOCIALS.map(({ name, href, Icon }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          title={name}
          className={`group relative ${dim} grid place-items-center rounded-full bg-white/5 border border-white/12 text-white/80 hover:text-white hover:border-ember/60 hover:bg-ember/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_24px_-4px_var(--ember)]`}
        >
          <Icon className={icon} />
        </a>
      ))}
    </div>
  );
}

function UdyamBadge() {
  return (
    <a
      href={UDYAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-ember/10 border border-emerald-400/25 hover:border-emerald-300/60 px-4 py-3 transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-12px_rgba(16,185,129,0.4)]"
    >
      <span className="size-10 rounded-xl bg-emerald-500/20 text-emerald-300 grid place-items-center shrink-0">
        <ShieldCheck className="size-5" />
      </span>
      <span className="min-w-0">
        <span className="block text-[10px] uppercase tracking-widest text-emerald-300/80">Government Registered</span>
        <span className="block text-sm font-semibold text-white">✅ Udyam Registered MSME</span>
      </span>
      <ArrowUpRight className="size-4 text-white/60 group-hover:text-white ml-1" />
    </a>
  );
}

function FindUs() {
  return (
    <section id="find-us" className="py-20 sm:py-28">
      <div className="container-x">
        <Reveal>
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-8 items-stretch">
            <div className="rounded-3xl glass p-8 sm:p-10 flex flex-col">
              <span className="chip w-fit"><MapPin className="size-3.5" /> Visit our office</span>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold leading-tight">
                Find <span className="text-ember">us</span> on the map
              </h2>
              <p className="mt-4 text-white/70 max-w-md leading-relaxed">
                Drop by the nest — coffee's on us. Or ping ahead so we can pull up the moodboards.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="btn-ember hover:btn-ember-hover">
                  <MapPin className="size-4" /> Open in Google Maps
                </a>
                <a href="https://wa.me/message/Z74MFBZ4HVQGG1" target="_blank" rel="noopener noreferrer" className="btn-ghost hover:btn-ghost-hover !text-white !border-white/20">
                  <MessageCircle className="size-4" /> WhatsApp us
                </a>
              </div>
              <div className="mt-auto pt-8">
                <UdyamBadge />
              </div>
            </div>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-3xl overflow-hidden border border-white/10 min-h-[340px] bg-[radial-gradient(circle_at_30%_30%,rgba(56,128,255,0.25),transparent_60%),radial-gradient(circle_at_70%_70%,rgba(90,160,255,0.18),transparent_55%),#0A0F1F]"
            >
              <div className="absolute inset-0 opacity-40 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:40px_40px]" />
              <div className="absolute inset-0 grid place-items-center">
                <div className="text-center px-6">
                  <div className="mx-auto size-16 rounded-2xl bg-ember/20 border border-ember/40 grid place-items-center backdrop-blur">
                    <MapPin className="size-8 text-ember" />
                  </div>
                  <div className="mt-4 font-display text-2xl font-bold">Owlnest Media HQ</div>
                  <div className="mt-1 text-sm text-white/60">Tap to open in Google Maps</div>
                  <div className="mt-5 inline-flex items-center gap-2 text-ember group-hover:translate-x-1 transition-transform">
                    View directions <ArrowUpRight className="size-4" />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
import owlLogo from "@/assets/owlnest-logo.png.asset.json";
import computechLogo from "@/assets/computech-logo.png.asset.json";
import heroReel from "@/assets/hero-reel.mp4.asset.json";
import brandFilm from "@/assets/brand-film.mp4.asset.json";
import ariaFestival from "@/assets/aria-festival-campaign.mov.asset.json";
import reelUniqove from "@/assets/reel-uniqove.mp4.asset.json";
import reelDivyabhoomi from "@/assets/reel-divyabhoomi.mp4.asset.json";
import reelGamingMannia from "@/assets/reel-gaming-mannia.mp4.asset.json";
import reelCulturalThrifts from "@/assets/reel-cultural-thrifts.mp4.asset.json";
import reelBirthdayParties from "@/assets/reel-birthday-parties.mp4.asset.json";
import reelJuiceShoot from "@/assets/reel-juice-shoot.mp4.asset.json";
import commercialAnandaBhavan from "@/assets/commercial-ananda-bhavan.mp4.asset.json";
import commercialParachute from "@/assets/commercial-parachute.mp4.asset.json";
import commercialLunore from "@/assets/commercial-lunore.mp4.asset.json";
import commercialFonezone from "@/assets/commercial-fonezone.mp4.asset.json";

const CALENDLY_URL = "https://calendly.com/team-owlnestmedia/30min";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Owlnest Media — We Turn Brands Into Stories People Remember" },
      { name: "description", content: "Creative marketing agency for brands that want attention. Video, social, SEO, marketplaces, branding & growth — all under one nest." },
      { property: "og:title", content: "Owlnest Media — Creative Marketing Agency" },
      { property: "og:description", content: "Brand Ko Do Digital Pankh. We turn brands into stories people remember." },
    ],
  }),
  component: OwlnestHome,
});

/* ---------- small in-view hook for reveal ---------- */
function useInView<T extends HTMLElement>(opts?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    if (!ref.current || seen) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setSeen(true); io.disconnect(); }
    }, { threshold: 0.15, ...opts });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [seen, opts]);
  return { ref, seen };
}

function Reveal({ children, delay = 0, as: As = "div", className = "" }:
  { children: React.ReactNode; delay?: number; as?: any; className?: string }) {
  const { ref, seen } = useInView<HTMLDivElement>();
  return (
    <As
      ref={ref}
      className={className}
      style={{
        opacity: seen ? 1 : 0,
        transform: seen ? "translateY(0)" : "translateY(28px)",
        transition: `opacity .9s cubic-bezier(.2,.7,.2,1) ${delay}ms, transform .9s cubic-bezier(.2,.7,.2,1) ${delay}ms`,
      }}
    >
      {children}
    </As>
  );
}

/* ---------- NAV ---------- */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}>
      <div className="container-x">
        <div className={`flex items-center justify-between rounded-full px-3 sm:px-5 py-2.5 transition-all ${scrolled ? "glass shadow-[0_10px_30px_-15px_rgba(0,0,0,0.15)]" : ""}`}>
          <a href="#top" className="flex items-center gap-2.5 group">
            <OwlMark />
            <span className="font-display font-bold text-[15px] tracking-tight">Owlnest <span className="text-ember">Media</span></span>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            <a href="#work" className="hover:text-ink transition-colors">Work</a>
            <a href="#services" className="hover:text-ink transition-colors">Services</a>
            <a href="#process" className="hover:text-ink transition-colors">Process</a>
            <a href="#about" className="hover:text-ink transition-colors">About</a>
          </nav>
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-ink hover:btn-ink-hover !py-2 !px-4 !text-sm">
            Book a Call <ArrowUpRight className="size-4" />
          </a>
        </div>
      </div>
    </header>
  );
}

function OwlMark({ size = "size-9" }: { size?: string }) {
  return (
    <span className={`relative grid place-items-center ${size} rounded-2xl bg-ink overflow-hidden ring-1 ring-ink/10`}>
      <img src={owlLogo.url} alt="Owlnest Media logo" className="h-full w-full object-cover" />
    </span>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section id="top" className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 grain overflow-hidden">
      <span className="grain-overlay" />
      {/* ambient blobs */}
      <div aria-hidden className="absolute -top-40 -left-32 size-[520px] rounded-full blur-3xl opacity-60"
        style={{ background: "radial-gradient(circle, rgba(255,154,61,.35), transparent 60%)" }} />
      <div aria-hidden className="absolute top-20 -right-32 size-[420px] rounded-full blur-3xl opacity-50"
        style={{ background: "radial-gradient(circle, rgba(255,122,0,.25), transparent 60%)" }} />

      <div className="container-x relative">
        <Reveal>
          <span className="chip"><Sparkles className="size-3.5" /> Creative Marketing Agency</span>
        </Reveal>

        <div className="mt-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          <div>
            <Reveal delay={80}>
              <h1 className="font-display font-bold text-[44px] leading-[1.02] sm:text-6xl lg:text-[80px] text-balance">
                We turn brands<br />into{" "}
                <span className="relative inline-block">
                  <span className="italic font-serif font-normal text-ember">stories</span>
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none" preserveAspectRatio="none">
                    <path d="M2 8 Q 60 1 100 6 T 198 4" stroke="#2D7BFF" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </span>{" "}
                <br className="hidden sm:block" />people remember.
              </h1>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-7 text-lg sm:text-xl text-muted-foreground max-w-xl text-pretty">
                Creative Video Editing • Content Strategy • Social Media Marketing • Brand Growth
              </p>
            </Reveal>
            <Reveal delay={260}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a href="#work" className="btn-ember hover:btn-ember-hover">View Our Work <ArrowRight className="size-4" /></a>
                <a href="#contact" className="btn-ghost hover:btn-ghost-hover">Book a Call</a>
              </div>
            </Reveal>
            <Reveal delay={340}>
              <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
                {[
                  ["120+", "Brands"],
                  ["50M+", "Views"],
                  ["4.9★", "Avg. Rating"],
                ].map(([k, v]) => (
                  <div key={k as string}>
                    <div className="font-display text-2xl sm:text-3xl font-bold">{k}</div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{v}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Animated mockup */}
          <Reveal delay={200}>
            <HeroMockup />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function HeroMockup() {
  return (
    <div className="relative mx-auto max-w-md lg:max-w-none lg:ml-auto h-[520px] sm:h-[560px]">
      {/* glow */}
      <div className="absolute inset-0 -z-10 rounded-[40px] blur-2xl opacity-70"
        style={{ background: "radial-gradient(60% 60% at 50% 40%, rgba(255,122,0,.25), transparent 70%)" }} />

      {/* Phone reel — full-bleed autoplay video */}
      <div className="absolute left-1/2 top-4 -translate-x-1/2 w-[260px] h-[500px] rounded-[40px] bg-ink p-2 shadow-[0_40px_80px_-20px_rgba(0,0,0,.45)] float-slow" style={{ ['--r' as any]: '-2deg' }}>
        <div className="absolute top-2 left-1/2 -translate-x-1/2 h-5 w-24 rounded-b-2xl bg-ink z-10" />
        <div className="h-full w-full rounded-[34px] overflow-hidden relative bg-black">
          <video
            src={heroReel.url}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Analytics card */}
      <div className="absolute -left-2 sm:left-0 top-10 w-[210px] rounded-2xl bg-white border border-border p-4 shadow-[0_30px_60px_-30px_rgba(0,0,0,.25)] float-slow" style={{ animationDelay: '-2s', ['--r' as any]: '-6deg' }}>
        <div className="flex items-center justify-between">
          <span className="text-[11px] uppercase tracking-widest text-gray-800 font-bold">Reach</span>
          <span className="text-[11px] text-emerald-600 font-medium">+248%</span>
        </div>
        <div className="font-display text-2xl font-bold mt-1">12.4M</div>
        <svg viewBox="0 0 120 40" className="mt-2 w-full h-10">
          <path d="M0,30 C20,28 30,18 50,20 S90,8 120,4" fill="none" stroke="#2D7BFF" strokeWidth="2" />
          <path d="M0,30 C20,28 30,18 50,20 S90,8 120,4 L120,40 L0,40 Z" fill="url(#g)" opacity=".25" />
          <defs><linearGradient id="g" x2="0" y2="1"><stop stopColor="#2D7BFF"/><stop offset="1" stopColor="#2D7BFF" stopOpacity="0"/></linearGradient></defs>
        </svg>
      </div>

      {/* Brand Film video card */}
      <div className="absolute right-0 top-6 w-[150px] h-[200px] rounded-2xl shadow-2xl overflow-hidden float-slow border border-white" style={{ animationDelay: '-4s', ['--r' as any]: '8deg' }}>
        <video
          src={brandFilm.url}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute bottom-2 left-2 right-2 text-white text-[10px] font-medium drop-shadow-md">Brand Film</div>
      </div>

      {/* Comment bubble */}
      <div className="absolute right-2 sm:right-6 bottom-16 max-w-[230px] glass rounded-2xl p-3 shadow-xl float-slow" style={{ animationDelay: '-1s', ['--r' as any]: '4deg' }}>
        <div className="flex items-center gap-2">
          <div className="size-8 rounded-full bg-white overflow-hidden ring-1 ring-border flex-shrink-0">
            <img src={computechLogo.url} alt="CompuTech Academy" className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="text-xs font-semibold">CompuTech Academy</div>
            <div className="text-[10px] text-muted-foreground">Govt. Recognised</div>
          </div>
        </div>
        <div className="text-[12px] mt-2 leading-snug">"Owlnest transformed our digital presence. Students & reach both doubled!" 🚀</div>
      </div>

      {/* Engagement chip */}
      <div className="absolute left-2 bottom-6 rounded-full bg-ink text-white px-4 py-2 flex items-center gap-2 shadow-xl float-slow" style={{ animationDelay: '-3s' }}>
        <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-xs font-bold">CTR 8.4% • ROAS 6.2x</span>
      </div>
    </div>
  );
}

/* ---------- LOGO MARQUEE ---------- */
function Marquee() {
  const items = ["Amazon", "Flipkart", "Meesho", "Hostinger", "Shopify", "Meta", "Google", "YouTube", "LinkedIn", "Blogspot", "Calendly", "Zoho"];
  return (
    <section className="py-10 border-y border-border/60 bg-surface-2/50">
      <div className="container-x">
        <p className="text-center text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">Marketplaces & Platforms we operate on</p>
      </div>
      <div className="relative overflow-hidden no-scrollbar">
        <div className="flex w-max marquee gap-12 pr-12">
          {[...items, ...items].map((t, i) => (
            <span key={i} className="font-display text-2xl sm:text-3xl text-ink/40 hover:text-ink transition-colors whitespace-nowrap">{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- ABOUT ---------- */
function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container-x grid lg:grid-cols-12 gap-10">
        <Reveal className="lg:col-span-5">
          <span className="chip">About</span>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-balance">
            Built for brands<br/>that want <span className="italic font-serif text-ember">attention.</span>
          </h2>
        </Reveal>
        <Reveal delay={120} className="lg:col-span-7 lg:pt-4">
          <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
            Owlnest Media helps businesses, creators, and startups grow through high-converting video content and modern digital marketing strategies — from the first frame of a reel to the last line of a landing page.
          </p>
          <div className="mt-10 grid sm:grid-cols-3 gap-5">
            {[
              { k: "Story-led", v: "Every asset is built around a narrative people actually finish." },
              { k: "Performance", v: "Creative tied to measurable outcomes — views, clicks, revenue." },
              { k: "One nest", v: "Strategy, content, tech and growth — under one roof." },
            ].map(c => (
              <div key={c.k} className="rounded-2xl bg-card border border-border p-5">
                <div className="font-display font-bold">{c.k}</div>
                <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{c.v}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- WORK SHOWCASE (Netflix-style) ---------- */
const featured = {
  title: "Aria Skincare — Festival Campaign",
  client: "Aria Skincare",
  industry: "D2C Beauty",
  services: ["Brand Films", "Performance Creative", "Meta Ads", "Landing Page"],
  result: { reach: "8.4M", roas: "6.2x", ctr: "4.7%" },
  tag: "Featured Case",
};

type Card = { title: string; meta: string; tag?: string; tone?: string; views?: string; video?: string };
const reels: Card[] = [
  { title: "UNIQOVE", meta: "Reel · Brand", video: reelUniqove.url },
  { title: "Divyabhoomi Opulence — Rameshwaram Group", meta: "Reel · Luxury Living", video: reelDivyabhoomi.url },
  { title: "Gaming Mannia", meta: "Reel · Gaming", video: reelGamingMannia.url },
  { title: "Cultural Thrifts", meta: "Reel · Lifestyle", video: reelCulturalThrifts.url },
  { title: "Birthday & Parties — The Event Agency", meta: "Reel · Events", video: reelBirthdayParties.url },
  { title: "Juic'e Shoot — Product Shoot", meta: "Reel · Product", video: reelJuiceShoot.url },
];

const documentaries: Card[] = [
  { title: "The Loom — A weaver's story", meta: "Doc · 6:42" },
  { title: "Inside Bharat Coffee", meta: "Doc · 9:10" },
  { title: "Crafting Steel", meta: "Doc · 5:28" },
];

const commercials: Card[] = [
  { title: "Ananda Bhavan — Sweets & Snacks", meta: "Spot · Food", video: commercialAnandaBhavan.url },
  { title: "PARACHUTE — India's No. 1 Oil", meta: "Spot · FMCG", video: commercialParachute.url },
  { title: "Lunore — Aroma of Wild", meta: "Spot · Fragrance", video: commercialLunore.url },
  { title: "FONEZONE — Apple iPhone", meta: "Spot · Retail", video: commercialFonezone.url },
];

const campaigns = [
  { title: "Aria — Festival of Glow", stat: "+248% reach", sub: "Meta + YouTube · 14 days" },
  { title: "Nimbus — Cup of City", stat: "8.4% CTR", sub: "Reels + Influencers" },
  { title: "Forge — Drop 03 Launch", stat: "6.2x ROAS", sub: "Performance creative" },
  { title: "Mira — Studio Reveal", stat: "1.8M views", sub: "Organic + Boost" },
];

function Work() {
  return (
    <section id="work" className="py-24 sm:py-32 bg-surface-2/40">
      <div className="container-x">
        <Reveal className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <div>
            <span className="chip">Client Work</span>
            <h2 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
              A library of <span className="italic font-serif text-ember">stories</span> we've shipped.
            </h2>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-ink">
            Browse full library <ArrowRight className="size-4" />
          </a>
        </Reveal>

        {/* Featured cinematic card */}
        <Reveal>
          <FeaturedCard />
        </Reveal>

        {/* Rows */}
        <div className="mt-16 space-y-14">
          <Row title="Reels & Short-form" subtitle="Hover to feel the cut.">
            <div className="flex gap-4 sm:gap-5 overflow-x-auto no-scrollbar pb-2 -mx-5 px-5">
              {reels.map((r, i) => <ReelCard key={i} card={r} index={i} />)}
            </div>
          </Row>

          <Row title="Documentary Videos" subtitle="Long-form, character-led.">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {documentaries.map((d, i) => <DocCard key={i} card={d} index={i} />)}
            </div>
          </Row>

          <Row title="Brand Commercials" subtitle="Cinematic spots with play.">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {commercials.map((c, i) => <CommercialCard key={i} card={c} index={i} />)}
            </div>
          </Row>

          <Row title="Social Media Campaigns" subtitle="Engagement, in numbers.">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {campaigns.map((c, i) => <CampaignCard key={i} card={c} index={i} />)}
            </div>
          </Row>
        </div>
      </div>
    </section>
  );
}

function Row({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="flex items-end justify-between mb-5">
        <div>
          <h3 className="font-display text-2xl sm:text-3xl font-bold">{title}</h3>
          <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
        </div>
        <a href="#contact" className="text-sm text-muted-foreground hover:text-ember inline-flex items-center gap-1">See all <ChevronRight className="size-4" /></a>
      </div>
      {children}
    </div>
  );
}

function FeaturedCard() {
  return (
    <article className="relative rounded-[28px] overflow-hidden border border-border bg-card shadow-soft card-lift hover:card-lift-hover">
      <div className="grid lg:grid-cols-[1.2fr_1fr]">
        {/* poster */}
        <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[460px] overflow-hidden">
          <video
            src={ariaFestival.url}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          <span className="absolute top-5 left-5 chip !bg-white/85 !text-ink !border-white">{featured.tag}</span>
          <div className="absolute bottom-5 left-5 right-5 text-white">
            <div className="text-xs uppercase tracking-widest opacity-80">{featured.industry}</div>
            <div className="font-display text-2xl sm:text-3xl font-bold mt-1">{featured.title}</div>
          </div>
        </div>
        {/* meta */}
        <div className="p-7 sm:p-9 flex flex-col">
          <div className="text-xs uppercase tracking-widest text-muted-foreground">Client</div>
          <div className="font-display text-2xl font-bold mt-1">{featured.client}</div>
          <div className="mt-6 hairline" />
          <div className="mt-6">
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Services</div>
            <div className="flex flex-wrap gap-2">
              {featured.services.map(s => (
                <span key={s} className="px-3 py-1.5 rounded-full bg-surface-2 text-xs border border-border">{s}</span>
              ))}
            </div>
          </div>
          <div className="mt-7 grid grid-cols-3 gap-4">
            {Object.entries(featured.result).map(([k, v]) => (
              <div key={k} className="rounded-2xl bg-surface-2 p-4">
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{k}</div>
                <div className="font-display text-2xl font-bold mt-1">{v}</div>
              </div>
            ))}
          </div>
          <div className="mt-auto pt-7 flex items-center gap-3">
            <a href="#contact" className="btn-ink hover:btn-ink-hover !py-2.5 !px-4 !text-sm">Read case <ArrowUpRight className="size-4" /></a>
            <span className="text-sm text-muted-foreground italic">"Numbers don't lie."</span>
          </div>
        </div>
      </div>
    </article>
  );
}

const reelGradients = [
  "linear-gradient(160deg,#2D7BFF,#3a1300)",
  "linear-gradient(160deg,#1A1A1A,#3b2a1a)",
  "linear-gradient(160deg,#ff9a3d,#7a2e00)",
  "linear-gradient(160deg,#2b1a10,#2D7BFF)",
  "linear-gradient(160deg,#1a1a1a,#2D7BFF)",
  "linear-gradient(160deg,#7a2e00,#1A1A1A)",
];

function ReelCard({ card, index }: { card: Card; index: number }) {
  return (
    <div className="group shrink-0 w-[180px] sm:w-[220px]">
      <div className="relative aspect-[9/14] rounded-2xl overflow-hidden border border-border card-lift hover:card-lift-hover" style={{ background: reelGradients[index % reelGradients.length] }}>
        {card.video ? (
          <video
            src={card.video}
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        ) : (
          <div className="absolute inset-0 mix-blend-overlay opacity-30" style={{
            backgroundImage: "radial-gradient(circle at 30% 30%, rgba(255,255,255,.4), transparent 50%)"
          }} />
        )}
        {card.video && <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/30 pointer-events-none" />}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-white/90 text-[11px]">
          <span>{card.meta}</span>
          {card.views && <span className="px-2 py-0.5 rounded-full bg-black/30 backdrop-blur">{card.views}</span>}
        </div>
        {!card.video && (
          <div className="absolute inset-0 grid place-items-center opacity-90 group-hover:scale-110 transition">
            <div className="size-12 rounded-full bg-white/90 grid place-items-center">
              <Play className="size-4 fill-ink text-ink ml-0.5" />
            </div>
          </div>
        )}
        <div className="absolute inset-x-3 bottom-3 text-white">
          <div className="text-xs font-medium leading-snug drop-shadow">{card.title}</div>
        </div>
        {/* hover bar */}
        <div className="absolute inset-x-3 bottom-1 h-0.5 bg-white/20 rounded-full overflow-hidden opacity-0 group-hover:opacity-100 transition">
          <div className="h-full w-1/3 bg-ember rounded-full" />
        </div>
      </div>
    </div>
  );
}

function DocCard({ card, index }: { card: Card; index: number }) {
  return (
    <div className="group rounded-2xl overflow-hidden border border-border bg-card card-lift hover:card-lift-hover">
      <div className="relative aspect-[16/10] overflow-hidden" style={{ background: reelGradients[(index + 2) % reelGradients.length] }}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <span className="absolute top-3 left-3 chip !bg-white/85 !text-ink !border-white">Documentary</span>
        <div className="absolute inset-0 grid place-items-center opacity-90 group-hover:scale-105 transition">
          <div className="size-14 rounded-full bg-white/90 grid place-items-center">
            <Play className="size-5 fill-ink text-ink ml-0.5" />
          </div>
        </div>
        <div className="absolute bottom-3 left-3 right-3 text-white">
          <div className="font-display text-lg font-semibold">{card.title}</div>
          <div className="text-[11px] opacity-80 mt-0.5">{card.meta}</div>
        </div>
      </div>
    </div>
  );
}

function CommercialCard({ card, index }: { card: Card; index: number }) {
  return (
    <div className="group relative rounded-2xl overflow-hidden border border-border aspect-[4/5] card-lift hover:card-lift-hover" style={{ background: reelGradients[(index + 1) % reelGradients.length] }}>
      {card.video && (
        <video
          src={card.video}
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      {!card.video && (
        <div className="absolute inset-0 grid place-items-center">
          <div className="size-14 rounded-full glass grid place-items-center group-hover:scale-110 transition">
            <Play className="size-5 fill-white text-white ml-0.5" />
          </div>
        </div>
      )}
      <div className="absolute inset-x-4 bottom-4 text-white">
        <div className="text-xs uppercase tracking-widest opacity-70">{card.meta}</div>
        <div className="font-display text-base font-semibold leading-tight mt-1 drop-shadow">{card.title}</div>
      </div>
    </div>
  );
}

function CampaignCard({ card, index }: { card: { title: string; stat: string; sub: string }; index: number }) {
  return (
    <div className="group rounded-2xl border border-border bg-card p-5 card-lift hover:card-lift-hover relative overflow-hidden">
      <div className="absolute -top-10 -right-10 size-32 rounded-full opacity-20 group-hover:opacity-40 transition" style={{ background: reelGradients[index % reelGradients.length] }} />
      <div className="text-xs uppercase tracking-widest text-muted-foreground">Campaign</div>
      <div className="font-display text-lg font-semibold mt-2 leading-tight">{card.title}</div>
      <div className="mt-6 hairline" />
      <div className="mt-5 flex items-end justify-between">
        <div>
          <div className="font-display text-3xl font-bold text-ember">{card.stat}</div>
          <div className="text-xs text-muted-foreground mt-1">{card.sub}</div>
        </div>
        <ArrowUpRight className="size-5 text-muted-foreground group-hover:text-ember group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" />
      </div>
    </div>
  );
}

/* ---------- PROCESS ---------- */
function Process() {
  const steps = [
    { n: "01", t: "Discovery", d: "Deep-dive into your brand, audience, and goals. We listen first." },
    { n: "02", t: "Strategy", d: "A content + growth plan with channels, formats, and KPIs." },
    { n: "03", t: "Production", d: "Professional editing, design, and creative execution at pace." },
    { n: "04", t: "Scale", d: "Distribution, paid amplification, optimisation — week over week." },
  ];
  return (
    <section id="process" className="py-24 sm:py-32">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <span className="chip">How we work</span>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
            A simple, repeatable<br/><span className="italic font-serif text-ember">flight plan.</span>
          </h2>
        </Reveal>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 80}>
              <div className="group relative rounded-3xl border border-border bg-card p-6 h-full card-lift hover:card-lift-hover">
                <div className="font-display text-5xl font-bold text-ember/30 group-hover:text-ember transition-colors">{s.n}</div>
                <div className="mt-6 font-display text-xl font-bold">{s.t}</div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                <div className="absolute top-6 right-6 size-2 rounded-full bg-ember" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- SERVICES (rich, full content) ---------- */
const serviceGroups = [
  {
    icon: Megaphone,
    title: "Digital Marketing & Growth",
    items: [
      ["SEO & AI Search", "Visibility on Google + ChatGPT / Gemini through technical SEO, content & authority."],
      ["Performance Marketing", "High-converting campaigns across Google, Meta, YouTube, LinkedIn, Blogspot."],
      ["Social Media Management", "Calendars, design, captions, engagement, profile growth."],
      ["Email & SMS Marketing", "Automated funnels, newsletters, promos, retention systems."],
      ["Influencer & Affiliate", "Creator partnerships and affiliate campaigns that move sales."],
    ],
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce & Marketplaces",
    items: [
      ["Amazon Seller Management", "Setup, listings, catalog optimisation, A+ Content, advertising."],
      ["Flipkart Product Listing", "Pro catalogs, keyword optimisation, enhanced content design."],
      ["Meesho Seller Services", "Uploads, catalog management, image optimisation, growth."],
      ["Marketplace Onboarding", "End-to-end seller registration & verification on every platform."],
      ["Product Catalog Management", "Bulk uploads, variations, technical attributes, inventory."],
      ["E-Commerce SEO", "Titles, bullets, descriptions, backend keywords, categories."],
      ["A+ Content & Infographics", "Banners, comparison charts, lifestyle creatives, brand stories."],
      ["Google My Business", "Profile setup, verification, local SEO, reviews & reputation."],
    ],
  },
  {
    icon: PenTool,
    title: "Branding & Strategy",
    items: [
      ["Brand Identity Design", "Logos, typography systems, color palettes, brand guidelines."],
      ["Market & Competitor Research", "Personas, positioning maps, competitive benchmarking."],
      ["Go-To-Market Strategy", "Launch plans, pricing, positioning, growth roadmaps."],
      ["Public Relations", "Press releases, media communication, reputation management."],
    ],
  },
  {
    icon: Film,
    title: "Creative Production",
    items: [
      ["Video Editing & Production", "Reels, documentaries, YouTube, ads, commercial storytelling."],
      ["Graphic Design", "Social creatives, banners, brochures, decks, marketing assets."],
      ["Photography & Product Shoots", "Studio product and lifestyle imagery."],
      ["Copywriting", "Sales pages, ad copy, email campaigns, scripts."],
      ["Content Writing", "Blogs, articles, case studies, website content."],
      ["Website Design & Development", "WordPress, Shopify, custom — built for conversions."],
    ],
  },
  {
    icon: BarChart3,
    title: "Analytics & Automation",
    items: [
      ["Analytics & Tracking", "GA4, Meta Pixel, advanced conversion tracking."],
      ["Performance Dashboards", "Live reporting for ROAS, CAC, leads, campaigns."],
      ["CRM & Marketing Automation", "Calendly, Zoho, Salesforce — automated journeys."],
      ["Lead Generation Systems", "Funnels, landing pages, WhatsApp & email nurture."],
    ],
  },
  {
    icon: Layers,
    title: "Additional Services",
    items: [
      ["Reels & Short-form", "Hooks, cuts, sound design, captions, distribution."],
      ["Documentary Editing", "Story structuring, color grading, sound mixing."],
      ["Corporate Presentations", "Investor decks, sales decks, internal comms."],
      ["Packaging & Brochure Design", "Print-ready brand collateral."],
      ["WhatsApp & LinkedIn Marketing", "Outbound, automation, content systems."],
      ["YouTube Channel Management", "Strategy, thumbnails, scripting, growth."],
      ["Landing Pages & ORM", "High-converting pages and online reputation."],
      ["AI Search Optimization", "Be the answer in ChatGPT, Gemini & Google AI."],
    ],
  },
];

function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-surface-2/40">
      <div className="container-x">
        <Reveal className="flex items-end justify-between flex-wrap gap-6">
          <div className="max-w-2xl">
            <span className="chip">Services</span>
            <h2 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
              Everything your brand needs<br/><span className="italic font-serif text-ember">under one nest.</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl">
              Strategy. Creativity. Technology. Growth. A complete creative & marketing partner.
            </p>
          </div>
          <a href="#contact" className="btn-ember hover:btn-ember-hover">Talk to us <ArrowRight className="size-4" /></a>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {serviceGroups.map((g, gi) => (
            <Reveal key={g.title} delay={gi * 60}>
              <div className="group relative rounded-3xl border border-border bg-card p-7 h-full card-lift hover:card-lift-hover overflow-hidden">
                <div className="absolute -top-16 -right-16 size-40 rounded-full bg-ember-soft opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="size-11 rounded-2xl bg-ink text-white grid place-items-center">
                    <g.icon className="size-5" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold">{g.title}</h3>
                  <ul className="mt-5 space-y-3">
                    {g.items.map(([t, d]) => (
                      <li key={t} className="flex gap-3">
                        <span className="mt-1 size-1.5 rounded-full bg-ember shrink-0" />
                        <div className="min-w-0">
                          <div className="text-sm font-semibold">{t}</div>
                          <div className="text-xs text-muted-foreground leading-relaxed mt-0.5">{d}</div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- WHY ---------- */
function Why() {
  const points = [
    "End-to-End Marketing Solutions",
    "Marketplace Experts (Amazon, Flipkart, Meesho, Hostinger)",
    "Performance-Driven Approach",
    "Premium Content & Creative Production",
    "Website Design & Development",
    "AI-Powered SEO & Automation",
    "Personalized Growth Strategies",
  ];
  return (
    <section className="py-24 sm:py-32">
      <div className="container-x grid lg:grid-cols-12 gap-12">
        <Reveal className="lg:col-span-5">
          <span className="chip">Why Owlnest</span>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl font-bold text-balance">
            Grow Smarter.<br/><span className="italic font-serif text-ember">Scale Faster.</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg max-w-md">
            Transform your business with powerful marketing, creative storytelling, and digital solutions designed to help brands stand out and grow.
          </p>
          <div className="mt-7 flex gap-3">
            <a href="#work" className="btn-ink hover:btn-ink-hover">View Our Work</a>
            <a href="#contact" className="btn-ghost hover:btn-ghost-hover">Free Consultation</a>
          </div>
        </Reveal>
        <Reveal delay={120} className="lg:col-span-7">
          <div className="grid sm:grid-cols-2 gap-3">
            {points.map(p => (
              <div key={p} className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4">
                <span className="size-8 rounded-full bg-ember-soft text-ember grid place-items-center shrink-0">
                  <Check className="size-4" />
                </span>
                <span className="text-sm font-medium">{p}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- TESTIMONIALS ---------- */
const testis = [
  { q: "Owlnest re-shaped our entire content engine. Reels were getting 10x the reach within a month.", n: "Ananya Kapoor", r: "Founder, Aria Skincare" },
  { q: "Their A+ and listing work pushed us into Amazon's top 3 for our category. Pure execution.", n: "Rohit Mehta", r: "DTC Lead, Forge Athletics" },
  { q: "We finally have a creative partner who understands both story and ROAS. Rare combo.", n: "Sara Iyer", r: "CMO, Nimbus Coffee" },
  { q: "From brand identity to YouTube growth — they handled it like one team. Premium quality.", n: "Vikram Shah", r: "CEO, Halcyon Hotels" },
];

function Testimonials() {
  return (
    <section className="py-24 sm:py-32 bg-surface-2/40">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <span className="chip">Kind Words</span>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
            Trusted by founders<br/>who care about <span className="italic font-serif text-ember">craft.</span>
          </h2>
        </Reveal>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {testis.map((t, i) => (
            <Reveal key={t.n} delay={i * 80}>
              <figure className="glass rounded-3xl p-6 h-full card-lift hover:card-lift-hover relative">
                <Quote className="size-7 text-ember" />
                <blockquote className="mt-4 text-[15px] leading-relaxed text-pretty">"{t.q}"</blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <div className="size-10 rounded-full bg-gradient-to-br from-ember to-blue-900 grid place-items-center text-white font-semibold">
                    {t.n.split(" ").map(s => s[0]).join("")}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{t.n}</div>
                    <div className="text-xs text-muted-foreground">{t.r}</div>
                  </div>
                </figcaption>
                <div className="absolute top-6 right-6 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, k) => <Star key={k} className="size-3.5 fill-ember text-ember" />)}
                </div>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CTA + CONTACT FORM ---------- */



function CTA() {
  const submit = useServerFn(submitContactForm);
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "", website: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [mountedAt] = useState(() => Date.now());

  const validate = () => {
    if (!form.name.trim() || form.name.length > 100) return "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) || form.email.length > 255) return "Please enter a valid email.";
    if (form.message.trim().length < 5) return "Please tell us a bit more about your project.";
    if (form.message.length > 2000) return "Message is too long.";
    return null;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const err = validate();
    if (err) { setStatus("error"); setErrorMsg(err); return; }
    setStatus("loading"); setErrorMsg("");
    try {
      await submit({
        data: {
          name: form.name.trim(),
          email: form.email.trim(),
          company: form.company.trim(),
          message: form.message.trim(),
          website: form.website,
          elapsedMs: Date.now() - mountedAt,
        },
      });
      setStatus("success");
      setForm({ name: "", email: "", company: "", message: "", website: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again in a moment.");
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-[36px] bg-[#0A0A0F] text-white border border-white/10 p-8 sm:p-12 lg:p-16">
            <div className="absolute -top-32 -right-32 size-[480px] rounded-full opacity-50 blur-3xl"
              style={{ background: "radial-gradient(circle, #2D7BFF, transparent 60%)" }} />
            <div className="absolute -bottom-32 -left-32 size-[420px] rounded-full opacity-40 blur-3xl"
              style={{ background: "radial-gradient(circle, #5AA0FF, transparent 60%)" }} />

            <div className="relative grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-start">
              {/* Left: pitch + Calendly */}
              <div>
                <span className="chip !bg-white/10 !text-white !border-white/20">
                  <Zap className="size-3.5" /> Let's build
                </span>
                <h2 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.02] text-balance">
                  Ready to build something<br/><span className="italic font-serif text-ember">extraordinary?</span>
                </h2>
                <p className="mt-6 text-lg text-white/70 max-w-xl">
                  Tell us about your brand or grab a 30-minute slot on our calendar. We'll map your first 90 days, free.
                </p>

                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-8 inline-flex items-stretch rounded-2xl bg-white/5 border border-white/15 hover:bg-white/10 transition overflow-hidden"
                >
                  <span className="grid place-items-center px-5 bg-ember text-white">
                    <Calendar className="size-5" />
                  </span>
                  <span className="px-5 py-4">
                    <span className="block text-[11px] uppercase tracking-widest text-white/50">Schedule a meeting</span>
                    <span className="block font-display font-semibold text-base">Pick a 30-min slot on Calendly</span>
                  </span>
                  <span className="grid place-items-center pr-5 text-white/70 group-hover:text-white">
                    <ArrowUpRight className="size-5" />
                  </span>
                </a>

                <div className="mt-10 grid sm:grid-cols-1 gap-3 text-sm max-w-md">
                  <ContactLine icon={Phone} label="Phone" value="+91 89836 26846" href="tel:+918983626846" />
                  <ContactLine icon={Globe} label="Website" value="www.owlnestmedia.com" href="#" />
                </div>

                <div className="mt-8">
                  <div className="text-[11px] uppercase tracking-widest text-white/50 mb-3">Follow the nest</div>
                  <SocialLinks />
                </div>
              </div>

              {/* Right: contact form */}
              {status === "success" ? (
                <div className="rounded-3xl bg-white/[0.04] backdrop-blur border border-white/10 p-8 sm:p-10 text-center">
                  <div className="mx-auto size-14 rounded-full bg-ember/20 text-ember grid place-items-center">
                    <Check className="size-7" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-bold">Thank you!</h3>
                  <p className="mt-3 text-white/70 leading-relaxed">
                    Your message has been sent successfully. We'll get back to you shortly.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 btn-ghost hover:btn-ghost-hover !text-white !border-white/20"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={onSubmit}
                  noValidate
                  className="rounded-3xl bg-white/[0.04] backdrop-blur border border-white/10 p-6 sm:p-8 space-y-4"
                >
                  <div>
                    <div className="font-display font-bold text-xl">Start your project</div>
                    <p className="text-sm text-white/60 mt-1">We reply within one business day.</p>
                  </div>

                  {/* Honeypot — hidden from users, catches bots */}
                  <div className="hidden" aria-hidden="true">
                    <label>
                      Website
                      <input
                        type="text"
                        tabIndex={-1}
                        autoComplete="off"
                        value={form.website}
                        onChange={e => setForm({ ...form, website: e.target.value })}
                      />
                    </label>
                  </div>

                  <Field label="Your name">
                    <input
                      required
                      maxLength={100}
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="input-dark"
                      disabled={status === "loading"}
                    />
                  </Field>
                  <Field label="Email">
                    <input
                      required
                      type="email"
                      maxLength={255}
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      placeholder="jane@brand.com"
                      className="input-dark"
                      disabled={status === "loading"}
                    />
                  </Field>
                  <Field label="Company (optional)">
                    <input
                      maxLength={120}
                      value={form.company}
                      onChange={e => setForm({ ...form, company: e.target.value })}
                      placeholder="Brand or company"
                      className="input-dark"
                      disabled={status === "loading"}
                    />
                  </Field>
                  <Field label="What are you building?">
                    <textarea
                      required
                      maxLength={2000}
                      rows={4}
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about your goals, timeline, and budget…"
                      className="input-dark resize-none"
                      disabled={status === "loading"}
                    />
                  </Field>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="btn-ember hover:btn-ember-hover w-full justify-center !py-3 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <>
                        <span className="inline-block size-4 rounded-full border-2 border-white/40 border-t-white animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send className="size-4" /> Send message
                      </>
                    )}
                  </button>

                  {status === "error" && (
                    <p className="text-xs text-red-300">{errorMsg}</p>
                  )}
                  <p className="text-[11px] text-white/40">
                    Your details are sent securely to our team. We never share them.
                  </p>
                </form>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}


function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-[11px] uppercase tracking-widest text-white/50 mb-1.5">{label}</span>
      {children}
    </label>
  );
}

function ContactLine({ icon: Icon, label, value, href }: { icon: any; label: string; value: string; href: string }) {
  return (
    <a href={href} className="flex items-center gap-3 rounded-2xl bg-white/5 border border-white/10 p-4 hover:bg-white/10 transition">
      <span className="size-10 rounded-xl bg-ember/20 text-ember grid place-items-center shrink-0">
        <Icon className="size-4" />
      </span>
      <div className="min-w-0">
        <div className="text-[11px] uppercase tracking-widest text-white/50">{label}</div>
        <div className="text-sm font-medium truncate">{value}</div>
      </div>
    </a>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="pt-16 pb-10 border-t border-border">
      <div className="container-x">
        <div className="grid lg:grid-cols-[1.6fr_1fr_1fr_1.2fr] gap-10">
          <div>
            <div className="flex items-center gap-2.5">
              <OwlMark />
              <span className="font-display font-bold text-lg">Owlnest <span className="text-ember">Media</span></span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground max-w-sm">
              Brand Ko Do Digital Pankh — Helping brands fly higher through creativity, strategy, and technology.
            </p>
            <p className="mt-4 font-serif italic text-ember">Create • Inspire • Grow</p>
            <div className="mt-6">
              <SocialLinks size="sm" />
            </div>
          </div>
          <FooterCol title="Studio" links={["Work","Services","Process","About"]} />
          <FooterCol title="Services" links={["Video Editing","Social Media","SEO & AI","Performance Ads","Marketplaces"]} />
          <div>
            <div className="font-display font-bold text-sm uppercase tracking-widest text-muted-foreground">Reach us</div>
            <div className="mt-4 space-y-3 text-sm">
              <a href="https://wa.me/message/Z74MFBZ4HVQGG1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-ember transition-colors"><MessageCircle className="size-4" /> WhatsApp us</a>
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-ember transition-colors"><MapPin className="size-4" /> Find us on Maps</a>
              <a href="#contact" className="flex items-center gap-2 hover:text-ember transition-colors"><Mail className="size-4" /> Send a message</a>
            </div>
            <div className="mt-6">
              <UdyamBadge />
            </div>
          </div>
        </div>

        <div className="mt-14 hairline" />

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
          <span>© 2026 Owlnest Media Pvt. Ltd. All Rights Reserved.</span>
          <div className="flex flex-wrap items-center gap-5">
            <Link to="/privacy" className="hover:text-ember transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-ember transition-colors">Terms & Conditions</Link>
            <span className="hidden sm:inline">Brand Ko Do Digital Pankh 🚀</span>
          </div>
        </div>

        {/* Big wordmark */}
        <div className="mt-10 overflow-hidden">
          <div className="font-display font-black tracking-tighter text-[18vw] leading-none text-shine select-none whitespace-nowrap">
            OWLNEST MEDIA
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <div className="font-display font-bold text-sm uppercase tracking-widest text-muted-foreground">{title}</div>
      <ul className="mt-4 space-y-3 text-sm">
        {links.map(l => <li key={l}><a href="#" className="hover:text-ember transition-colors">{l}</a></li>)}
      </ul>
    </div>
  );
}

/* ---------- PAGE ---------- */
function OwlnestHome() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Work />
      <Process />
      <Services />
      <Why />
      <Testimonials />
      <FindUs />
      <CTA />
      <Footer />
    </main>
  );
}

