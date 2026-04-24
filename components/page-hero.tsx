import Link from "next/link"
import { Phone } from "lucide-react"
import { site } from "@/lib/site"

type Props = {
  eyebrow?: string
  title: string
  description?: string
  showCtas?: boolean
}

export function PageHero({ eyebrow, title, description, showCtas = true }: Props) {
  return (
    <section className="border-b border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        {eyebrow ? (
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-foreground/70">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-2 text-balance text-3xl font-bold tracking-tight text-primary md:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
            {description}
          </p>
        ) : null}
        {showCtas ? (
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-base font-semibold text-primary-foreground shadow-sm transition hover:opacity-90"
            >
              Request Pool Service
            </Link>
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-background px-5 py-3 text-base font-semibold text-primary transition hover:bg-secondary"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call Now
            </a>
          </div>
        ) : null}
      </div>
    </section>
  )
}
