import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { CheckCircle2 } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { CtaSection } from "@/components/cta-section"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Pool Repair in Houston & Humble, TX",
  description:
    "Pool repair services in Houston and Humble — pump and filter troubleshooting, leaks noticed during service, and repair coordination. Repairs are available by quote.",
  alternates: { canonical: "/services/pool-repair/" },
}

export default function PoolRepairPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Pool Repair",
    serviceType: "Residential pool equipment troubleshooting and repair coordination",
    provider: { "@type": "LocalBusiness", name: site.name, telephone: site.phone, email: site.email },
    areaServed: site.areas.map((a) => ({ "@type": "City", name: a.replace(", TX", "") })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />

      <PageHero
        eyebrow="Pool Repair"
        title="Pool repair & equipment troubleshooting"
        description="Pumps, filters, salt systems, and leaks noticed during service. Repairs are available by quote, with clear communication at every step."
      />

      <section className="bg-background py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-3 md:px-6">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-primary md:text-3xl">About pool repair</h2>
            <p className="mt-4 text-base text-muted-foreground md:text-lg">
              When something isn't working right — the pump won't prime, pressure is off, the salt system is
              throwing errors, or you think there's a leak — the goal is a clear diagnosis and a straightforward
              plan. Pool repairs are available by quote after we take a look at what's actually going on.
            </p>

            <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-xl border border-border">
              <Image
                src="/images/pool-equipment.jpg"
                alt="Residential pool equipment pad with pump, filter, and salt chlorinator"
                fill
                sizes="(min-width: 768px) 66vw, 100vw"
                className="object-cover"
              />
            </div>

            <h3 className="mt-10 text-xl font-semibold text-primary">What we focus on</h3>
            <ul className="mt-4 space-y-3">
              {[
                "Equipment troubleshooting — identifying the actual cause, not guessing",
                "Pump and filter issues (priming, pressure, leaks at the pad)",
                "Salt system and chlorinator performance issues",
                "Leaks noticed during service",
                "Repair coordination and clear write-ups of what's needed",
              ].map((i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-foreground" aria-hidden="true" />
                  <span className="text-foreground/80">{i}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-10 text-xl font-semibold text-primary">How pricing works</h3>
            <p className="mt-3 text-muted-foreground">
              Repairs are quoted based on the issue, parts needed, and time involved. We'll walk you through
              the diagnosis and options before any repair work begins.
            </p>

            <div className="mt-8 rounded-lg border border-border bg-secondary/40 p-5 text-sm text-foreground/80">
              <p>
                We don't claim specialty electrical or plumbing licensing unless we've specifically listed it.
                For work that falls outside our scope, we'll let you know and help coordinate the right
                licensed trade where needed.
              </p>
            </div>
          </div>

          <aside className="md:col-span-1">
            <div className="sticky top-24 rounded-xl border border-border bg-card p-6">
              <p className="text-sm font-semibold text-primary">Get a repair quote</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Share what you're seeing — symptoms, error codes, photos — and we'll respond with next steps.
              </p>
              <Link
                href="/contact/"
                className="mt-5 inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-90"
              >
                Request a quote
              </Link>
              <a
                href={site.phoneHref}
                className="mt-2 inline-flex w-full items-center justify-center rounded-md border border-border px-4 py-3 text-sm font-semibold text-primary transition hover:bg-secondary"
              >
                Call {site.phone}
              </a>

              <div className="mt-6 border-t border-border pt-4">
                <p className="text-sm font-semibold text-primary">Related services</p>
                <ul className="mt-3 space-y-2 text-sm">
                  <li><Link href="/services/weekly-pool-service/" className="text-foreground/80 hover:text-primary">Weekly Pool Service →</Link></li>
                  <li><Link href="/services/filter-cleaning/" className="text-foreground/80 hover:text-primary">Filter Cleaning →</Link></li>
                  <li><Link href="/services/salt-cell-cleaning/" className="text-foreground/80 hover:text-primary">Salt Cell Cleaning →</Link></li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
