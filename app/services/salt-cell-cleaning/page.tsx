import type { Metadata } from "next"
import Link from "next/link"
import { CheckCircle2 } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { CtaSection } from "@/components/cta-section"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Salt Cell Cleaning in Houston & Humble, TX",
  description:
    "Salt cell cleaning for residential saltwater pools in Houston and Humble. Extra service scheduled when scale buildup affects performance.",
  alternates: { canonical: "/services/salt-cell-cleaning/" },
}

export default function SaltCellCleaningPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Salt Cell Cleaning",
    serviceType: "Residential saltwater pool salt cell cleaning",
    provider: { "@type": "LocalBusiness", name: site.name, telephone: site.phone, email: site.email },
    areaServed: site.areas.map((a) => ({ "@type": "City", name: a.replace(", TX", "") })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />

      <PageHero
        eyebrow="Salt Cell Cleaning"
        title="Salt cell cleaning for saltwater pools"
        description="Scale buildup on a salt cell reduces chlorine output and can hide bigger issues. We inspect and clean cells when performance calls for it."
      />

      <section className="bg-background py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-3 md:px-6">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-primary md:text-3xl">About salt cell cleaning</h2>
            <p className="mt-4 text-base text-muted-foreground md:text-lg">
              Saltwater pools use a chlorinator cell to produce chlorine from dissolved salt. Over time, calcium
              scale builds up on the plates inside the cell, which reduces output and can make your pool harder
              to keep balanced. A proper cleaning restores output and lets the cell do its job.
            </p>
            <p className="mt-4 text-muted-foreground">
              Salt cell cleaning is an extra service for saltwater pools and may be recommended when scale
              buildup affects performance.
            </p>

            <h3 className="mt-10 text-xl font-semibold text-primary">Who it's for</h3>
            <p className="mt-3 text-muted-foreground">
              Homeowners with saltwater pools noticing lower chlorine output, scale visible on the cell plates,
              low-salt warnings despite a correct salt level, or who haven't had the cell inspected recently.
            </p>

            <h3 className="mt-10 text-xl font-semibold text-primary">Generally included</h3>
            <ul className="mt-4 space-y-3">
              {[
                "Safe removal of the salt cell from the plumbing",
                "Visual inspection for scale, damage, and plate condition",
                "Appropriate cleaning method based on scale level",
                "Reinstall with correct orientation and flow",
                "Confirm generator is operating as expected",
              ].map((i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-foreground" aria-hidden="true" />
                  <span className="text-foreground/80">{i}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-10 text-xl font-semibold text-primary">What may cost extra</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-foreground/80">
              <li>Replacement cells if plates are worn or damaged</li>
              <li>Replacement unions, O-rings, or fittings</li>
              <li>Controller repairs or replacement (quoted separately)</li>
            </ul>
          </div>

          <aside className="md:col-span-1">
            <div className="sticky top-24 rounded-xl border border-border bg-card p-6">
              <p className="text-sm font-semibold text-primary">Get a salt cell clean</p>
              <p className="mt-2 text-sm text-muted-foreground">
                We can check your cell during a weekly visit or schedule a dedicated cleaning.
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
