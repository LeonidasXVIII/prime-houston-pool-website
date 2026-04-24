import Link from "next/link"
import { ArrowRight, type LucideIcon } from "lucide-react"

type Props = {
  title: string
  description: string
  href: string
  icon: LucideIcon
}

export function ServiceCard({ title, description, href, icon: Icon }: Props) {
  return (
    <Link
      href={href}
      className="group relative flex flex-col rounded-lg border border-border bg-card p-6 transition hover:border-accent hover:shadow-md"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-md bg-accent/20 text-primary">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <h3 className="mt-4 text-lg font-semibold text-primary">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
        Learn more
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
      </span>
    </Link>
  )
}
