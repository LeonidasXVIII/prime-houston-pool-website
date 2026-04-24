import Link from "next/link"
import { Waves, Phone, Mail } from "lucide-react"
import { nav, services, site } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/50">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2" aria-label={`${site.name} home`}>
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <Waves className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="text-base font-semibold tracking-tight text-primary">
                {site.name}
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Locally owned residential pool cleaning, maintenance, and repair for Houston and Humble, Texas.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-primary">Navigation</h3>
            <ul className="mt-4 space-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-foreground/80 hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-primary">Services</h3>
            <ul className="mt-4 space-y-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}/`}
                    className="text-sm text-foreground/80 hover:text-primary"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-primary">Contact</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a href={site.phoneHref} className="inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-primary">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={site.emailHref} className="inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-primary">
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  {site.email}
                </a>
              </li>
              <li className="text-sm text-muted-foreground">
                Serving Houston, TX &amp; Humble, TX
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Service availability may vary by route density.</p>
        </div>
      </div>
    </footer>
  )
}
