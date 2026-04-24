import type { Metadata } from "next"
import { Phone, Mail, MapPin } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { ContactForm } from "@/components/contact-form"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Contact & Quote Request",
  description:
    "Request a residential pool service quote from Prime Houston Pools in Houston or Humble, TX. Call, email, or submit a quick form.",
  alternates: { canonical: "/contact/" },
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Request pool service"
        description="Tell us about your pool and what you need. We'll follow up with next steps, availability, and pricing."
        showCtas={false}
      />

      <section className="bg-background py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-5 md:px-6">
          <div className="md:col-span-3">
            <ContactForm />
          </div>

          <aside className="md:col-span-2">
            <div className="rounded-xl border border-border bg-card p-6 md:p-8">
              <h2 className="text-xl font-semibold text-primary">Prefer to call or email?</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Contact {site.name} directly and we'll get back to you.
              </p>

              <ul className="mt-6 space-y-4">
                <li>
                  <a href={site.phoneHref} className="flex items-start gap-3 text-foreground hover:text-primary">
                    <span className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-md bg-accent/30 text-primary">
                      <Phone className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground">Phone</span>
                      <span className="block text-base font-semibold">{site.phone}</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a href={site.emailHref} className="flex items-start gap-3 text-foreground hover:text-primary">
                    <span className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-md bg-accent/30 text-primary">
                      <Mail className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground">Email</span>
                      <span className="block text-base font-semibold break-all">{site.email}</span>
                    </span>
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-3 text-foreground">
                    <span className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-md bg-accent/30 text-primary">
                      <MapPin className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground">Service area</span>
                      <span className="block text-base font-semibold">Houston, TX &amp; Humble, TX</span>
                      <span className="mt-1 block text-xs text-muted-foreground">Service availability may vary by route density.</span>
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-6 rounded-xl border border-border bg-secondary/40 p-6 text-sm text-muted-foreground">
              <p>
                Prefer to call or email? Contact {site.name} at{" "}
                <a href={site.phoneHref} className="font-semibold text-primary hover:underline">
                  {site.phone}
                </a>{" "}
                or{" "}
                <a href={site.emailHref} className="font-semibold text-primary hover:underline">
                  {site.email}
                </a>
                .
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
