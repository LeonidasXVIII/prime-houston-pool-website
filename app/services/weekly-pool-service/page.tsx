import type { Metadata } from "next"
import Link from "next/link"
import { CheckCircle2, AlertCircle } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { CtaSection } from "@/components/cta-section"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Weekly Pool Service in Houston & Humble, TX",
  description:
    "Dependable weekly residential pool service in Houston and Humble. Starts at $200/month. Chemicals, filter cleans, and salt cell cleans are extra.",
  alternates: { canonical: "/services/weekly-pool-service/" },
}

const included = [
  "Scheduled weekly visits on a consistent day",
  "Skimming, brushing, and vacuuming as needed",
  "Basket emptying (skimmer and pump)",
  "Basic water testing and balancing guidance",
  "Visual check of pump, filter, and salt system",
  "Service notes so you know what was done",
]

const extras = [
  "Chemicals — billed based on your pool's demand",
  "Filter cleaning (cartridge, DE, or sand)",
  "Salt cell cleaning for saltwater pools",
  "Green pool cleanup / recovery",
  "Equipment repairs (quoted separately)",
]

export default function WeeklyServicePage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Weekly Pool Service",
    serviceType: "Residential weekly pool cleaning and maintenance",
    provider: { "@type": "LocalBusiness", name: site.name, telephone: site.phone, email: site.email },
    areaServed: site.areas.map((a) => ({ "@type": "City", name: a.replace(", TX", "") })),
    offers: {
      "@type": "Offer",
      price: "200",
      priceCurrency: "USD",
      description: "Starts at $200/month. Chemicals not included.",
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />

      <PageHero
        eyebrow="Weekly Pool Service"
        title="Dependable weekly pool service for Houston & Humble homeowners"
        description="Consistent visits to keep your pool clean, balanced, and ready to enjoy — starting at $200/month plus chemicals."
      />

      <section className="bg-background py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-3 md:px-6">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-primary md:text-3xl">What weekly service looks like</h2>
            <p className="mt-4 text-base text-muted-foreground md:text-lg">
              Weekly service is the backbone of a healthy pool. We show up on a consistent day each week,
              handle the routine cleaning and observation your pool needs, and flag any issues early so
              you have time to decide how to handle them. No hidden add-ons — anything extra is discussed
              before we do it.
            </p>

            <h3 className="mt-10 text-xl font-semibold text-primary">Who it's for</h3>
            <p className="mt-3 text-muted-foreground">
              Houston and Humble homeowners with a residential pool who want reliable, steady upkeep
              without having to manage testing, cleaning, and equipment watching on their own.
            </p>

            <h3 className="mt-10 text-xl font-semibold text-primary">Generally included</h3>
            <ul className="mt-4 space-y-3">
              {included.map((i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-foreground" aria-hidden="true" />
                  <span className="text-foreground/80">{i}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-10 text-xl font-semibold text-primary">What costs extra</h3>
            <ul className="mt-4 space-y-3">
              {extras.map((i) => (
                <li key={i} className="flex items-start gap-3">
                  <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                  <span className="text-foreground/80">{i}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-lg border border-border bg-secondary/40 p-5">
              <p className="text-sm text-foreground/80">
                <strong className="text-primary">Transparent pricing:</strong> Weekly residential pool service
                starts at $200/month. Chemicals are not included. Filter cleaning and salt cell cleaning are
                extra services. Repairs are quoted separately. Final pricing depends on pool size, equipment,
                and location.
              </p>
            </div>
          </div>

          <aside className="md:col-span-1">
            <div className="sticky top-24 rounded-xl border border-border bg-card p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-accent-foreground/70">
                Starting at
              </p>
              <p className="mt-1 text-4xl font-bold text-primary">
                $200<span className="text-base font-medium text-muted-foreground">/mo</span>
              </p>
              <p className="mt-2 text-xs text-muted-foreground">Chemicals billed separately</p>
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
                  <li><Link href="/services/filter-cleaning/" className="text-foreground/80 hover:text-primary">Filter Cleaning →</Link></li>
                  <li><Link href="/services/salt-cell-cleaning/" className="text-foreground/80 hover:text-primary">Salt Cell Cleaning →</Link></li>
                  <li><Link href="/services/green-pool-cleanup/" className="text-foreground/80 hover:text-primary">Green Pool Cleanup →</Link></li>
                  <li><Link href="/services/pool-repair/" className="text-foreground/80 hover:text-primary">Pool Repair →</Link></li>
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
