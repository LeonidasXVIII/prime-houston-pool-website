import type { Metadata } from "next"
import Link from "next/link"
import { CheckCircle2 } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { CtaSection } from "@/components/cta-section"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Green Pool Cleanup in Houston & Humble, TX",
  description:
    "Green pool cleanup and algae recovery for residential pools in Houston and Humble. Pricing depends on severity, pool size, equipment, and chemical demand.",
  alternates: { canonical: "/services/green-pool-cleanup/" },
}

export default function GreenPoolPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Green Pool Cleanup",
    serviceType: "Residential algae and green pool recovery",
    provider: { "@type": "LocalBusiness", name: site.name, telephone: site.phone, email: site.email },
    areaServed: site.areas.map((a) => ({ "@type": "City", name: a.replace(", TX", "") })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />

      <PageHero
        eyebrow="Green Pool Cleanup"
        title="Green pool cleanup & algae recovery"
        description="From slightly hazy to deep green, we work methodically to bring a neglected pool back to clear, swimmable water."
      />

      <section className="bg-background py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-3 md:px-6">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-primary md:text-3xl">About green pool cleanup</h2>
            <p className="mt-4 text-base text-muted-foreground md:text-lg">
              A green pool is almost always a combination of algae growth, chemical imbalance, and
              underperforming filtration. Clearing it up is more than a quick shock — it takes planning,
              repeated filter runs, and patience.
            </p>
            <p className="mt-4 text-muted-foreground">
              Green pool cleanup pricing depends on severity, pool size, equipment condition, and chemical
              demand. We share a straightforward plan before we start.
            </p>

            <h3 className="mt-10 text-xl font-semibold text-primary">Who it's for</h3>
            <p className="mt-3 text-muted-foreground">
              Houston and Humble homeowners with a pool that has turned green, cloudy, or has visible algae —
              whether after a storm, vacation, equipment failure, or a gap in service.
            </p>

            <h3 className="mt-10 text-xl font-semibold text-primary">Generally included</h3>
            <ul className="mt-4 space-y-3">
              {[
                "Initial water test and pool/equipment assessment",
                "A clear recovery plan based on the pool's condition",
                "Brushing, vacuuming, and debris removal as needed",
                "Filter runs and filter cleans during recovery",
                "Chemical treatment planned for the pool's demand",
              ].map((i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-foreground" aria-hidden="true" />
                  <span className="text-foreground/80">{i}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-10 text-xl font-semibold text-primary">What may cost extra</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-foreground/80">
              <li>Chemicals (billed based on pool demand)</li>
              <li>Filter cleans during and after recovery</li>
              <li>Equipment repairs identified during the process</li>
              <li>Additional visits for severe cases</li>
            </ul>

            <div className="mt-10 rounded-lg border border-border bg-secondary/40 p-5">
              <p className="text-sm text-foreground/80">
                After recovery, most homeowners move onto weekly service to keep the pool from slipping
                back. We'll talk through whether that's the right fit for you.
              </p>
            </div>
          </div>

          <aside className="md:col-span-1">
            <div className="sticky top-24 rounded-xl border border-border bg-card p-6">
              <p className="text-sm font-semibold text-primary">Start a cleanup</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Send us photos and your pool details and we'll respond with a plan.
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
