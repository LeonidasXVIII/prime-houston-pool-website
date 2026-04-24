export const site = {
  name: "Prime Houston Pool",
  phone: "+1 (346) 746-7509",
  phoneHref: "tel:+13467467509",
  email: "Info@primehoustonpools.com",
  emailHref: "mailto:Info@primehoustonpools.com",
  url: "https://primehoustonpools.com",
  address: "Humble, TX 77338",
  areas: ["Humble, TX", "Houston, TX", "Kingwood, TX", "Atascocita, TX", "Katy, TX", "Cypress, TX"],
  formEndpoint: "https://formspree.io/f/xpwzgkrn",
} as const

export const nav = [
  { href: "/", label: "Home" },
  { href: "/services/", label: "Services" },
  { href: "/service-areas/", label: "Service Areas" },
  { href: "/contact/", label: "Contact" },
]

export const services = [
  {
    slug: "weekly-pool-service",
    title: "Weekly Pool Service",
    short: "Dependable weekly visits to keep your pool clean, balanced, and ready to enjoy.",
  },
  {
    slug: "filter-cleaning",
    title: "Filter Cleaning",
    short: "Filter cleans to restore flow and pressure when your system needs it.",
  },
  {
    slug: "salt-cell-cleaning",
    title: "Salt Cell Cleaning",
    short: "Scale removal and inspection for saltwater pool generators.",
  },
  {
    slug: "green-pool-cleanup",
    title: "Green Pool Cleanup",
    short: "Recovery service for algae-filled or neglected pools.",
  },
  {
    slug: "pool-repair",
    title: "Pool Repair",
    short: "Equipment troubleshooting and repair coordination, by quote.",
  },
] as const
