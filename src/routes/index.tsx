import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import {
  ClipboardList, FolderOpen, Receipt, Mic, Layers, Wallet, Building2, Home, KeyRound,
  ArrowRight, Check, MapPin,
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const TITLE = "Puri: software for cleaning businesses";
const DESC = "Walkthroughs, job cards, invoicing and payroll in one place for commercial and residential cleaners.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen text-foreground">
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Features />
        <HowItWorks />
        <Audience />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}

function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <span className={`font-display text-2xl leading-none ${light ? "text-primary-foreground" : "text-forest"}`}>puri</span>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-30 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" aria-label="Puri home"><Wordmark /></a>
        <nav className="hidden items-center gap-7 text-sm font-semibold text-ink-2 md:flex">
          <a href="#features" className="hover:text-foreground">Features</a>
          <a href="#how" className="hover:text-foreground">How it works</a>
          <a href="#who" className="hover:text-foreground">Who it's for</a>
        </nav>
        <a href="#early-access" className="btn-gloss">Get early access</a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="mx-auto grid max-w-6xl items-center gap-14 px-5 pb-20 pt-14 sm:px-8 md:pt-20 lg:grid-cols-[1.1fr_1fr] lg:pb-28">
      <div className="rise">
        <p className="mb-5 inline-flex items-center gap-2 text-sm font-bold text-success-ink">
          <span className="live-dot" /> Now onboarding early teams
        </p>
        <h1 className="title-ink font-display text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
          Run your cleaning business from one place.
        </h1>
        <p className="mt-6 max-w-lg text-lg text-ink-2">
          Walkthroughs, jobs, invoices and payroll, without the paper trail.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a href="#early-access" className="btn-gloss btn-lg">Get early access <ArrowRight className="size-4" /></a>
          <a href="#how" className="btn-paper btn-lg">See how it works</a>
        </div>
      </div>
      <div className="rise flex justify-center lg:justify-end" style={{ animationDelay: "120ms" }}>
        <PhoneMockup />
      </div>
    </section>
  );
}

function PhoneMockup() {
  return (
    <div className="relative">
      <div className="bg-mesh-tile absolute -inset-6 -z-10 rounded-[56px] opacity-25 blur-2xl" />
      <div className="bg-canopy sweep w-[290px] rounded-[44px] p-3 shadow-[0_30px_60px_-20px_rgba(20,42,30,.55),0_2px_4px_rgba(20,42,30,.2)] sm:w-[310px]">
        <div className="overflow-hidden rounded-[34px] bg-background">
          <div className="flex items-center justify-between px-6 pb-2 pt-3 text-[11px] font-bold tabular-nums">
            <span>9:41</span><span className="h-5 w-20 rounded-full bg-forest-deep" /><span>100%</span>
          </div>
          <div className="space-y-3 px-4 pb-5">
            <div className="bg-mesh-tile rounded-2xl p-4 text-primary-foreground">
              <div className="flex items-center justify-between text-xs font-bold text-mint-soft">
                <span className="flex items-center gap-2"><span className="live-dot" /> Walkthrough live</span>
                <span className="tabular-nums">04:12</span>
              </div>
              <p className="mt-2 font-display text-2xl leading-tight">Harbor Office Park</p>
              <p className="mt-1 flex items-center gap-1 text-xs text-on-dark"><MapPin className="size-3" /> Suite 300, 3rd floor</p>
              <div className="mt-3 flex items-end gap-[3px]">
                {[6, 12, 8, 16, 10, 18, 7, 14, 9, 15, 6, 11, 17, 8, 13].map((h, i) => (
                  <span key={i} className="w-1.5 rounded-full bg-mint" style={{ height: h }} />
                ))}
              </div>
            </div>
            <div className="card-soft p-3.5">
              <p className="text-xs font-bold text-ink-2">Live notes</p>
              <ul className="mt-2 divide-y divide-divider text-[13px]">
                {["12 offices, carpet throughout", "2 restrooms, deep clean weekly", "Kitchen: fridge + microwave"].map((n) => (
                  <li key={n} className="flex items-center gap-2 py-1.5">
                    <Check className="size-3.5 text-success-ink" strokeWidth={2.5} /> {n}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-soft p-3.5">
              <div className="flex items-center justify-between">
                <p className="text-xs font-bold text-ink-2">Today's jobs</p>
                <span className="text-xs font-bold text-ink-3">3</span>
              </div>
              <ul className="mt-2 divide-y divide-divider text-[13px] font-semibold">
                <li className="flex items-center justify-between py-1.5">Maple St. home <span className="chip chip-green">In progress</span></li>
                <li className="flex items-center justify-between py-1.5">Harbor Office <span className="chip chip-blue">Walkthrough</span></li>
                <li className="flex items-center justify-between py-1.5">Lakeview Airbnb <span className="chip chip-slate">Upcoming</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionHead({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-extrabold text-success-ink">{eyebrow}</p>
      <h2 className="title-ink mt-3 font-display text-4xl leading-[1.1] sm:text-5xl">{title}</h2>
      {sub && <p className="mt-4 text-lg text-ink-2">{sub}</p>}
    </div>
  );
}

const problems = [
  { icon: ClipboardList, t: "Messy walkthroughs", d: "Notes on paper, photos in camera rolls, details lost before the quote goes out." },
  { icon: FolderOpen, t: "Scattered job info", d: "Access codes, scope and client requests spread across texts, email and memory." },
  { icon: Receipt, t: "Slow invoicing and payroll", d: "Hours each week rebuilding invoices and hours worked from scratch." },
];

function Problem() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-28">
      <SectionHead eyebrow="The problem" title="Cleaning is organized. The paperwork isn't." />
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {problems.map(({ icon: Icon, t, d }, i) => (
          <div key={t} className="tile-tint rise p-6" style={{ animationDelay: `${i * 60}ms` }}>
            <Icon className="size-6 text-ink-2" strokeWidth={1.8} />
            <h3 className="mt-4 text-lg font-extrabold">{t}</h3>
            <p className="mt-2 text-ink-2">{d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const features = [
  { icon: Layers, t: "Job cards", d: "Every walkthrough, note and photo stays attached to the job, for good." },
  { icon: Receipt, t: "Invoicing and recurring billing", d: "Send invoices in a tap and bill weekly or monthly clients automatically." },
  { icon: Wallet, t: "Payroll export", d: "Export hours to the payroll software you already use." },
];

function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24 sm:px-8 md:py-28">
      <SectionHead eyebrow="Features" title="Everything from first visit to payday." />
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-mesh-tile sweep rounded-2xl p-7 text-primary-foreground shadow-[0_18px_40px_-14px_rgba(30,58,43,.45)] md:col-span-2 lg:col-span-3 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div className="max-w-xl">
            <div className="grid size-10 place-items-center rounded-xl bg-primary-foreground/15 text-mint-soft">
              <Mic className="size-5" strokeWidth={1.8} />
            </div>
            <h3 className="mt-5 font-display text-3xl">Field walkthroughs</h3>
            <p className="mt-3 text-on-dark">Record the walkthrough and take live notes on your phone. Nothing gets missed, and quotes go out the same day.</p>
          </div>
          <ul className="mt-6 space-y-2 text-sm font-semibold text-on-dark lg:mt-0">
            {["Audio recording", "Live notes and photos", "Works on any phone"].map((x) => (
              <li key={x} className="flex items-center gap-2"><Check className="size-4 text-mint" strokeWidth={2.5} /> {x}</li>
            ))}
          </ul>
        </div>
        {features.map(({ icon: Icon, t, d }) => (
          <div key={t} className="card-soft p-6">
            <div className="icon-tile"><Icon className="size-5" strokeWidth={1.8} /></div>
            <h3 className="mt-5 text-lg font-extrabold">{t}</h3>
            <p className="mt-2 text-ink-2">{d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const steps = [
  { t: "Set up your knowledge base", d: "Add services, rates, clients and checklists on desktop." },
  { t: "Run walkthroughs in the field", d: "Record, take notes and build the job from your phone." },
  { t: "Bill and pay from one place", d: "Send invoices and export payroll when the work is done." },
];

function HowItWorks() {
  return (
    <section id="how" className="bg-canopy scroll-mt-16 text-primary-foreground">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-28">
        <p className="text-sm font-extrabold text-mint">How it works</p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl leading-[1.1] sm:text-5xl">Three steps. One system.</h2>
        <ol className="mt-14 grid gap-10 md:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.t} className="border-t border-primary-foreground/15 pt-6">
              <span className="font-display text-6xl leading-none text-mint-soft">{i + 1}</span>
              <h3 className="mt-5 text-lg font-extrabold">{s.t}</h3>
              <p className="mt-2 text-on-dark">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const audience = [
  { icon: Building2, t: "Commercial cleaners", d: "Offices, clinics and retail with recurring contracts." },
  { icon: Home, t: "Residential cleaners", d: "Homes, move-outs and regular weekly clients." },
  { icon: KeyRound, t: "Short-term rental turnovers", d: "Fast resets between guests, with every detail on the card." },
];

function Audience() {
  return (
    <section id="who" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24 sm:px-8 md:py-28">
      <SectionHead eyebrow="Who it's for" title="Built for the way cleaners work." />
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {audience.map(({ icon: Icon, t, d }) => (
          <div key={t} className="card-soft p-6">
            <div className="icon-tile"><Icon className="size-5" strokeWidth={1.8} /></div>
            <h3 className="mt-5 text-lg font-extrabold">{t}</h3>
            <p className="mt-2 text-ink-2">{d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const emailSchema = z.string().trim().email("Enter a valid email").max(255);

function FinalCta() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [msg, setMsg] = useState("");

  async function submit(e: FormEvent) {
    e.preventDefault();
    const parsed = emailSchema.safeParse(email);
    if (!parsed.success) { setState("error"); setMsg(parsed.error.issues[0]?.message ?? "Enter a valid email"); return; }
    setState("loading");
    const { error } = await supabase.from("early_access_signups").insert({ email: parsed.data.toLowerCase() });
    if (error && error.code !== "23505") { setState("error"); setMsg("Something went wrong. Please try again."); return; }
    setState("done");
  }

  return (
    <section id="early-access" className="mx-auto max-w-6xl scroll-mt-20 px-5 pb-24 sm:px-8 md:pb-28">
      <div className="card-soft mx-auto max-w-3xl px-6 py-14 text-center sm:px-12">
        <h2 className="title-ink font-display text-4xl leading-[1.1] sm:text-5xl">Get early access to Puri.</h2>
        <p className="mx-auto mt-4 max-w-md text-lg text-ink-2">Join the list and we'll reach out when your spot opens.</p>
        {state === "done" ? (
          <p className="mt-8 inline-flex items-center gap-2 font-bold text-success-ink">
            <Check className="size-5" strokeWidth={2.5} /> You're on the list. Thanks.
          </p>
        ) : (
          <form onSubmit={submit} noValidate className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
            <label htmlFor="email" className="sr-only">Email</label>
            <input
              id="email" type="email" required maxLength={255} placeholder="you@company.com"
              value={email} onChange={(e) => setEmail(e.target.value)}
              className="input-sunken btn-lg w-full flex-1 px-4"
            />
            <button type="submit" disabled={state === "loading"} className="btn-gloss btn-lg">
              {state === "loading" ? "Joining..." : "Get early access"}
            </button>
          </form>
        )}
        {state === "error" && <p className="mt-3 text-sm font-semibold text-destructive">{msg}</p>}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-canopy text-on-dark">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-12 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <Wordmark light />
        <a href="mailto:hello@puri.app" className="font-semibold hover:text-primary-foreground">hello@puri.app</a>
        <p className="text-sm">© {new Date().getFullYear()} Puri. All rights reserved.</p>
      </div>
    </footer>
  );
}
