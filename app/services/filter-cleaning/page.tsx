import type { Metadata } from "next"
import Link from "next/link"
import { CheckCircle2 } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { CtaSection } from "@/components/cta-section"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Pool Filter Cleaning in Houston & Humble, TX",
  description:
    "Cartridge, DE, and sand filter cleaning for residential pools in Houston and Humble. Filter cleaning is an extra service based on pool condition and usage.",
  alternates: { canonical: "/services/filter-cleaning/" },
}

export default function FilterCleaningPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Pool Filter Cleaning",
    serviceType: "Residential pool filter cleaning",
    provider: { "@type": "LocalBusiness", name: site.name, telephone: site.phone, email: site.email },
    areaServed: site.areas.map((a) => ({ "@type": "City", name: a.replace(", TX", "") })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />

      <PageHero
        eyebrow="Filter Cleaning"
        title="Pool filter cleaning for Houston & Humble homeowners"
        description="Restore flow, pressure, and filtration performance with a proper filter clean — an extra service scheduled when your pool actually needs it."
      />

      <section className="bg-background py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-3 md:px-6">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-primary md:text-3xl">About filter cleaning</h2>
            <p className="mt-4 text-base text-muted-foreground md:text-lg">
              Your pool filter pulls debris, dust, oils, and organic material out of the water. Over time that
              buildup restricts flow, raises pressure, and makes your pump work harder. A proper filter clean
              restores performance and helps your chemistry stay on track.
            </p>
            <p className="mt-4 text-muted-foreground">
              Filter cleaning is an extra service and may be recommended based on pool condition, pressure,
              usage, and filter type.
            </p>

            <h3 className="mt-10 text-xl font-semibold text-primary">Who it's for</h3>
            <p className="mt-3 text-muted-foreground">
              Pool owners seeing higher filter pressure than normal, weaker return flow, cloudy water, or who
              simply haven't had the filter cleaned in a while. Cartridge, DE, and sand filters are all common
              on Houston-area residential pools.
            </p>

            <h3 className="mt-10 text-xl font-semibold text-primary">Generally included</h3>
            <ul className="mt-4 space-y-3">
              {[
                "Open filter housing and inspect components",
                "Remove cartridges or clean grids/sand as appropriate",
                "Rinse and clean filter media",
                "Check O-rings and seals visually",
                "Reassemble and confirm normal operating pressure",
              ].map((i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-foreground" aria-hidden="true" />
                  <span className="text-foreground/80">{i}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-10 text-xl font-semibold text-primary">What may cost extra</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-foreground/80">
              <li>Replacement cartridges, grids, O-rings, or other filter parts</li>
              <li>Deep chemical soaks for heavily contaminated filters</li>
              <li>Repairs to damaged housings or plumbing</li>
            </ul>
          </div>

          <aside className="md:col-span-1">
            <div className="sticky top-24 rounded-xl border border-border bg-card p-6">
              <p className="text-sm font-semibold text-primary">Get filter cleaning</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Not sure if you need it? We can take a look during a weekly visit or schedule a standalone clean.
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
                  <li><Link href="/services/salt-cell-cleaning/" className="text-foreground/80 hover:text-primary">Salt Cell Cleaning →</Link></li>
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
