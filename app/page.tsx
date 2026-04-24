import Link from "next/link"
import Image from "next/image"
import {
  Phone,
  ShieldCheck,
  MapPin,
  CalendarClock,
  MessageSquare,
  Wrench,
  Droplets,
  Filter,
  Zap,
  Sparkles,
  Cog,
  ClipboardCheck,
  CheckCircle2,
} from "lucide-react"
import type { Metadata } from "next"
import { CtaSection } from "@/components/cta-section"
import { ServiceCard } from "@/components/service-card"
import { site, services } from "@/lib/site"

export const metadata: Metadata = {
  title: "Pool Cleaning & Repair in Houston & Humble, TX",
  description:
    "Reliable residential pool cleaning, maintenance, and repair in Houston and Humble, Texas. Weekly pool service starts at $200/month plus chemicals.",
  alternates: { canonical: "/" },
}

const trustPoints = [
  "Locally owned",
  "Insured",
  "Residential pool specialists",
  "Weekly service available",
  "Clear communication",
  "Repairs by quote",
]

const problems = [
  { title: "Cloudy water", desc: "We diagnose and correct filtration and chemistry issues causing haze." },
  { title: "Algae", desc: "Green, yellow, or black algae treated with the right combination of care." },
  { title: "Chemical imbalance", desc: "Weekly testing and dosing helps keep water within healthy ranges." },
  { title: "Dirty filters", desc: "Filter cleans to restore flow and pressure when your system needs it." },
  { title: "Salt cell buildup", desc: "Scale buildup reduces output — we inspect and clean salt cells as needed." },
  { title: "Unreliable service", desc: "Consistent route visits, clear notes, and responsive communication." },
  { title: "Equipment issues", desc: "Pumps, filters, and plumbing checked during service with repair coordination." },
  { title: "DIY burnout", desc: "Hand off the weekly maintenance so you can actually enjoy your pool." },
]

const serviceIcons = {
  "weekly-pool-service": Droplets,
  "filter-cleaning": Filter,
  "salt-cell-cleaning": Zap,
  "green-pool-cleanup": Sparkles,
  "pool-repair": Wrench,
}

const whyPoints = [
  "Reliable weekly visits",
  "Clear communication",
  "Local Houston and Humble service",
  "Transparent service expectations",
  "Extra services available when needed",
  "Simple quote process",
]

const steps = [
  { title: "Request service", desc: "Send a quick quote request with your address and pool details." },
  { title: "We review your pool", desc: "We review your location, route, and pool so the plan fits your setup." },
  { title: "Simple service plan", desc: "You receive a straightforward plan covering what's included and what's extra." },
  { title: "Service begins", desc: "Weekly service or a one-time visit starts on an agreed day." },
]

const faqs = [
  {
    q: "How much does weekly pool service cost?",
    a: "Weekly residential pool service starts at $200/month. Final pricing depends on pool size, equipment, and location.",
  },
  {
    q: "Are chemicals included?",
    a: "No. Chemicals are not included in the base monthly service price and are billed separately based on pool demand.",
  },
  {
    q: "Do you service saltwater pools?",
    a: "Yes. We service both chlorine and saltwater residential pools in Houston and Humble, TX.",
  },
  {
    q: "Is filter cleaning included?",
    a: "Filter cleaning is an extra service, recommended based on filter type, pressure, and pool condition.",
  },
  {
    q: "Is salt cell cleaning included?",
    a: "Salt cell cleaning is an extra service for saltwater pools, typically recommended when scale buildup affects performance.",
  },
  {
    q: "Can you help with green pools?",
    a: "Yes. Green pool cleanup pricing depends on severity, pool size, equipment condition, and chemical demand.",
  },
  {
    q: "Do you offer pool repairs?",
    a: "Pool repairs are available by quote. We focus on equipment troubleshooting, pump and filter issues, and repair coordination.",
  },
  {
    q: "What areas do you serve?",
    a: "Houston, TX and Humble, TX. Service availability may vary by route density.",
  },
  {
    q: "How do I request service?",
    a: "Use our contact form, call, or email us. We will follow up with next steps and pricing.",
  },
]

export default function HomePage() {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    image: `${site.url}/images/hero-pool.jpg`,
    telephone: site.phone,
    email: site.email,
    url: site.url,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address,
      addressLocality: "Houston",
      addressRegion: "TX",
      addressCountry: "US",
    },
    areaServed: site.areas.map((a) => ({ "@type": "City", name: a.replace(", TX", "") })),
    priceRange: "$$",
  }

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-background">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-2 md:gap-12 md:px-6 md:py-20 lg:py-24">
          <div className="flex flex-col justify-center">
            <p className="inline-flex w-fit items-center gap-2 rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              Houston &amp; Humble, TX
            </p>
            <h1 className="mt-4 text-balance text-4xl font-bold tracking-tight text-primary md:text-5xl lg:text-6xl">
              Reliable Pool Service in Houston &amp; Humble
            </h1>
            <p className="mt-5 max-w-xl text-base text-muted-foreground md:text-lg">
              {site.name} helps homeowners keep their pools clean, balanced, and ready
              to enjoy with dependable residential pool cleaning, maintenance, and repair services.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-sm transition hover:opacity-90"
              >
                Request Pool Service
              </Link>
              <a
                href={site.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-background px-6 py-3 text-base font-semibold text-primary transition hover:bg-secondary"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call Now
              </a>
            </div>
            <p className="mt-5 text-sm text-muted-foreground">
              Weekly pool service starts at <span className="font-semibold text-primary">$200/month</span> plus chemicals.
            </p>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border shadow-sm md:aspect-[5/4]">
              <Image
                src="/images/hero-pool.jpg"
                alt="Clean, sparkling residential backyard swimming pool in Houston"
                fill
                priority
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 hidden rounded-lg border border-border bg-card p-4 shadow-sm md:block">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-accent/30 text-primary">
                  <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-primary">Locally owned &amp; insured</p>
                  <p className="text-xs text-muted-foreground">Residential pool specialists</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section aria-label="Trust indicators" className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-4 py-6 md:px-6">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm md:grid-cols-3 lg:grid-cols-6">
            {trustPoints.map((p) => (
              <li key={p} className="flex items-center gap-2 text-foreground/80">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-accent-foreground" aria-hidden="true" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Problem / solution */}
      <section className="bg-background py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="max-w-2xl">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-primary md:text-4xl">
              Pool problems we solve for homeowners
            </h2>
            <p className="mt-4 text-base text-muted-foreground md:text-lg">
              Every pool is different. We help Houston and Humble homeowners work through common
              issues that get in the way of enjoying the water.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {problems.map((p) => (
              <div
                key={p.title}
                className="rounded-lg border border-border bg-card p-5"
              >
                <h3 className="text-base font-semibold text-primary">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        headline="Tired of fighting your pool?"
        subline="We'll get it sorted with straightforward service and clear communication."
        className="border-y border-border bg-primary/5"
      />

      {/* Services */}
      <section className="bg-secondary/40 py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <h2 className="text-balance text-3xl font-bold tracking-tight text-primary md:text-4xl">
                Residential pool services
              </h2>
              <p className="mt-4 text-base text-muted-foreground md:text-lg">
                From weekly maintenance to equipment repair, we focus on the services most homeowners actually need.
              </p>
            </div>
            <Link
              href="/services/"
              className="text-sm font-semibold text-primary hover:underline"
            >
              View all services →
            </Link>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard
                key={s.slug}
                title={s.title}
                description={s.short}
                href={`/services/${s.slug}/`}
                icon={serviceIcons[s.slug as keyof typeof serviceIcons]}
              />
            ))}
            <ServiceCard
              title="Equipment Checks"
              description="Routine inspection of pumps, filters, and salt systems during service visits."
              href="/services/"
              icon={Cog}
            />
          </div>
        </div>
      </section>

      <CtaSection
        headline="Need something specific?"
        subline="We'll give you a straight answer and point you to the right service."
        className="border-y border-border bg-secondary"
      />

      {/* Pricing */}
      <section className="bg-background py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2 md:px-6">
          <div>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-primary md:text-4xl">
              Transparent weekly service pricing
            </h2>
            <p className="mt-4 text-base text-muted-foreground md:text-lg">
              We keep pricing simple so you know what to expect each month. Final pricing is based on your pool, equipment, and location.
            </p>
            <Link
              href="/services/weekly-pool-service/"
              className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-base font-semibold text-primary-foreground shadow-sm transition hover:opacity-90"
            >
              See what weekly service includes
            </Link>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent-foreground/70">
              Weekly residential pool service
            </p>
            <p className="mt-2 text-4xl font-bold text-primary md:text-5xl">
              $200<span className="text-lg font-medium text-muted-foreground">/month and up</span>
            </p>
            <ul className="mt-6 space-y-3 text-sm text-foreground/80">
              <li className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-foreground" aria-hidden="true" />
                <span>Weekly visits covering cleaning, brushing, skimming, and basic water testing</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-foreground" aria-hidden="true" />
                <span>
                  <strong className="text-primary">Chemicals are not included</strong> — billed based on pool demand
                </span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-foreground" aria-hidden="true" />
                <span>Filter cleaning is an extra service</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-foreground" aria-hidden="true" />
                <span>Salt cell cleaning is an extra service for saltwater pools</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-foreground" aria-hidden="true" />
                <span>Pool repairs are quoted separately</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <CtaSection
        headline="Ready to stop managing your pool yourself?"
        subline="Let's set up service and take weekly upkeep off your plate."
        className="border-y border-border bg-primary/5"
      />

      {/* Why choose us */}
      <section className="bg-secondary/40 py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="max-w-2xl">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-primary md:text-4xl">
              Why homeowners choose {site.name}
            </h2>
            <p className="mt-4 text-base text-muted-foreground md:text-lg">
              We focus on doing a straightforward job well — no gimmicks, no surprises.
            </p>
          </div>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyPoints.map((p) => (
              <li
                key={p}
                className="flex items-start gap-3 rounded-lg border border-border bg-card p-5"
              >
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-accent/30 text-primary">
                  <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="text-sm font-medium text-foreground md:text-base">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaSection
        headline="Not sure which service you need?"
        subline="We'll help you figure it out and point you in the right direction."
        className="border-y border-border bg-secondary"
      />

      {/* Service area */}
      <section className="bg-background py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2 md:items-center md:px-6">
          <div>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-primary md:text-4xl">
              Serving Humble, Houston &amp; Surrounding Areas
            </h2>
            <p className="mt-4 text-base text-muted-foreground md:text-lg">
              {site.name} currently serves Humble first, then Houston and nearby suburbs. Service availability may vary by route density.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:max-w-md">
              {site.areas.map((a) => (
                <div
                  key={a}
                  className="flex items-center gap-2 rounded-lg border border-border bg-card p-4"
                >
                  <MapPin className="h-4 w-4 text-accent-foreground" aria-hidden="true" />
                  <span className="text-sm font-semibold text-primary">{a}</span>
                </div>
              ))}
            </div>
            <Link
              href="/service-areas/"
              className="mt-6 inline-flex text-sm font-semibold text-primary hover:underline"
            >
              See service area details →
            </Link>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border">
            <Image
              src="/images/pool-service.jpg"
              alt="Pool skimmer net cleaning a clean residential pool"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <CtaSection
        headline="In the Humble area?"
        subline="Tell us your address — we'll check the route and follow up fast."
        className="border-y border-border bg-primary/5"
      />

      {/* Process */}
      <section className="bg-secondary/40 py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="max-w-2xl">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-primary md:text-4xl">
              A simple process to get started
            </h2>
            <p className="mt-4 text-base text-muted-foreground md:text-lg">
              We keep things easy from the first message to your first visit.
            </p>
          </div>
          <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => {
              const Icon = [ClipboardCheck, MapPin, MessageSquare, CalendarClock][i]
              return (
                <li
                  key={s.title}
                  className="relative rounded-lg border border-border bg-card p-6"
                >
                  <span className="absolute -top-3 left-6 rounded-full bg-primary px-2.5 py-0.5 text-xs font-bold text-primary-foreground">
                    Step {i + 1}
                  </span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-md bg-accent/30 text-primary">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-primary">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </li>
              )
            })}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-background py-14 md:py-20">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-primary md:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            Straight answers to what most Houston and Humble homeowners ask before starting service.
          </p>
          <div className="mt-10 divide-y divide-border rounded-lg border border-border bg-card">
            {faqs.map((f) => (
              <details key={f.q} className="group p-5 open:bg-secondary/40">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left">
                  <span className="text-base font-semibold text-primary">{f.q}</span>
                  <span
                    aria-hidden="true"
                    className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-border text-primary transition group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
