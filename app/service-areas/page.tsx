import type { Metadata } from "next"
import Link from "next/link"
import { MapPin } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { CtaSection } from "@/components/cta-section"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Service Areas: Houston & Humble, TX",
  description:
    "Prime Houston Pools serves residential pool customers in Houston and Humble, Texas. Service availability may vary by route density.",
  alternates: { canonical: "/service-areas/" },
}

const areas = [
  {
    name: "Humble, TX",
    blurb:
      "Primary service area for dependable residential pool care, from routine weekly maintenance to one-time cleanups and equipment checks.",
    primary: true,
  },
  {
    name: "Houston, TX",
    blurb:
      "Residential pool service across Houston neighborhoods, with weekly maintenance, filter and salt cell cleans, green pool recovery, and repair coordination.",
  },
]

export default function ServiceAreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Service Areas"
        title="Pool service in Humble, Houston & surrounding areas"
        description="We focus on residential pools in Humble first, then Houston and nearby areas, so we can offer consistent weekly visits and fast responses."
      />

      <section className="bg-background py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {areas.map((a) => (
              <article
                key={a.name}
                className={`rounded-xl border bg-card p-6 md:p-8 ${a.primary ? "border-primary/40 bg-primary/5" : "border-border"}`}
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-md bg-accent/30 text-primary">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h2 className="text-xl font-semibold text-primary md:text-2xl">{a.name}</h2>
                    {a.primary ? <p className="text-xs font-semibold uppercase tracking-wide text-accent-foreground">Primary service area</p> : null}
                  </div>
                </div>
                <p className="mt-4 text-muted-foreground">{a.blurb}</p>
                <Link
                  href="/contact/"
                  className="mt-5 inline-flex text-sm font-semibold text-primary hover:underline"
                >
                  Request service in {a.name.replace(", TX", "")} →
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-xl border border-border bg-secondary/40 p-6 md:p-8">
            <h2 className="text-xl font-semibold text-primary md:text-2xl">
              Not sure if you're in the service area?
            </h2>
            <p className="mt-3 text-muted-foreground">
              {site.name} currently serves Houston and Humble, Texas. Service availability may vary by route
              density. Send us your ZIP code and we'll confirm quickly.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-90"
              >
                Check availability
              </Link>
              <a
                href={site.phoneHref}
                className="inline-flex items-center justify-center rounded-md border border-border bg-background px-5 py-3 text-sm font-semibold text-primary transition hover:bg-background/80"
              >
                Call {site.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
