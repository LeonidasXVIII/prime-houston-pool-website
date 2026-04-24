import type { Metadata } from "next"
import { Droplets, Filter, Zap, Sparkles, Wrench, Cog } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { ServiceCard } from "@/components/service-card"
import { CtaSection } from "@/components/cta-section"
import { services } from "@/lib/site"

export const metadata: Metadata = {
  title: "Pool Services in Houston & Humble, TX",
  description:
    "Residential pool services from Prime Houston Pools: weekly pool service, filter cleaning, salt cell cleaning, green pool cleanup, and pool repair.",
  alternates: { canonical: "/services/" },
}

const icons = {
  "weekly-pool-service": Droplets,
  "filter-cleaning": Filter,
  "salt-cell-cleaning": Zap,
  "green-pool-cleanup": Sparkles,
  "pool-repair": Wrench,
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Residential pool services in Houston & Humble"
        description="We focus on the services most homeowners actually need — dependable weekly maintenance, filter and salt cell cleans, green pool recovery, and repair coordination."
      />

      <section className="bg-background py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard
                key={s.slug}
                title={s.title}
                description={s.short}
                href={`/services/${s.slug}/`}
                icon={icons[s.slug as keyof typeof icons]}
              />
            ))}
            <div className="flex flex-col rounded-lg border border-border bg-card p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-md bg-accent/20 text-primary">
                <Cog className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-primary">Equipment Checks</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Routine inspection of pumps, filters, and salt systems during service visits. Issues are flagged early so you can plan repairs before they grow.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-xl border border-border bg-secondary/40 p-6 md:p-8">
            <h2 className="text-xl font-semibold text-primary md:text-2xl">
              How our services fit together
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
              Weekly pool service is the foundation — it keeps your pool clean and balanced between visits.
              Filter cleaning and salt cell cleaning are separate, extra services scheduled when your pool actually needs them.
              Green pool cleanup is a recovery service, and pool repair is available by quote for equipment issues we identify.
              Chemicals are billed based on pool demand and are not included in the base monthly service price.
            </p>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
