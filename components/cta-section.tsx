import Link from "next/link"
import { Phone } from "lucide-react"
import { site } from "@/lib/site"

type Props = {
  headline?: string
  subline?: string
  className?: string
}

export function CtaSection({
  headline = "Ready for reliable pool service?",
  subline = "Request a quote or call us directly. We serve Houston and Humble homeowners with dependable residential pool care.",
  className = "bg-primary text-primary-foreground",
}: Props) {
  return (
    <section className={className}>
      <div className="mx-auto max-w-6xl px-4 py-14 text-center md:px-6 md:py-20">
        <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
          {headline}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-primary-foreground/80 md:text-lg">
          {subline}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/contact/"
            className="inline-flex w-full items-center justify-center rounded-md bg-accent px-6 py-3 text-base font-semibold text-accent-foreground shadow-sm transition hover:opacity-90 sm:w-auto"
          >
            Request Pool Service
          </Link>
          <a
            href={site.phoneHref}
            className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-primary-foreground/30 bg-primary-foreground/5 px-6 py-3 text-base font-semibold text-primary-foreground transition hover:bg-primary-foreground/10 sm:w-auto"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call Now
          </a>
        </div>
      </div>
    </section>
  )
}
