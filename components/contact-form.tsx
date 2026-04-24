"use client"

import { useState, type FormEvent } from "react"
import { CheckCircle2 } from "lucide-react"
import { site } from "@/lib/site"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    const form = e.currentTarget
    // If a real endpoint is configured, let the browser submit normally.
    if (site.formEndpoint && site.formEndpoint !== "FORM_ENDPOINT_HERE") {
      return
    }

    // Otherwise, intercept and show a static success state.
    e.preventDefault()
    setSubmitting(true)
    setError(null)
    try {
      // Placeholder: no backend configured yet.
      await new Promise((r) => setTimeout(r, 400))
      setSubmitted(true)
      form.reset()
    } catch {
      setError("Something went wrong. Please call or email us instead.")
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-border bg-card p-8 text-center">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/30 text-primary">
          <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
        </span>
        <h2 className="mt-4 text-2xl font-bold text-primary">Thanks — we got your request</h2>
        <p className="mt-2 text-muted-foreground">
          We'll review your details and follow up shortly. If you need us sooner, call{" "}
          <a href={site.phoneHref} className="font-semibold text-primary hover:underline">{site.phone}</a>.
        </p>
      </div>
    )
  }

  return (
    <form
      action={site.formEndpoint}
      method="POST"
      onSubmit={handleSubmit}
      className="rounded-xl border border-border bg-card p-6 md:p-8"
      noValidate
    >
      <h2 className="text-xl font-semibold text-primary md:text-2xl">Quote request</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Fields marked with <span aria-hidden="true">*</span> are required.
      </p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" required autoComplete="name" />
        <Field label="Phone" name="phone" type="tel" required autoComplete="tel" />
        <Field label="Email" name="email" type="email" required autoComplete="email" className="sm:col-span-2" />
        <Field
          label="Service address or ZIP code"
          name="address"
          required
          autoComplete="street-address"
          className="sm:col-span-2"
        />

        <SelectField
          label="Pool type"
          name="pool_type"
          required
          options={[
            { value: "", label: "Select pool type" },
            { value: "chlorine", label: "Chlorine" },
            { value: "saltwater", label: "Saltwater" },
            { value: "not_sure", label: "Not sure" },
          ]}
        />
        <SelectField
          label="Service needed"
          name="service"
          required
          options={[
            { value: "", label: "Select a service" },
            { value: "weekly", label: "Weekly service" },
            { value: "filter_cleaning", label: "Filter cleaning" },
            { value: "salt_cell_cleaning", label: "Salt cell cleaning" },
            { value: "green_pool", label: "Green pool cleanup" },
            { value: "repair", label: "Repair" },
            { value: "other", label: "Other" },
          ]}
        />

        <div className="sm:col-span-2">
          <label htmlFor="message" className="block text-sm font-semibold text-primary">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Tell us about your pool, what's going on, and anything we should know (size, equipment, recent issues, photos you can share)."
            className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2.5 text-base text-foreground outline-none ring-0 placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/30"
          />
        </div>
      </div>

      {error ? (
        <p role="alert" className="mt-4 text-sm text-destructive">
          {error}
        </p>
      ) : null}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-sm transition hover:opacity-90 disabled:opacity-60"
        >
          {submitting ? "Sending…" : "Request Pool Service"}
        </button>
        <p className="text-xs text-muted-foreground">
          By submitting, you agree to be contacted about your request.
        </p>
      </div>
    </form>
  )
}

type FieldProps = {
  label: string
  name: string
  type?: string
  required?: boolean
  autoComplete?: string
  className?: string
}

function Field({ label, name, type = "text", required, autoComplete, className }: FieldProps) {
  return (
    <div className={className}>
      <label htmlFor={name} className="block text-sm font-semibold text-primary">
        {label} {required ? <span aria-hidden="true">*</span> : null}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2.5 text-base text-foreground outline-none ring-0 placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/30"
      />
    </div>
  )
}

type SelectFieldProps = {
  label: string
  name: string
  required?: boolean
  options: { value: string; label: string }[]
}

function SelectField({ label, name, required, options }: SelectFieldProps) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-semibold text-primary">
        {label} {required ? <span aria-hidden="true">*</span> : null}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        defaultValue=""
        className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2.5 text-base text-foreground outline-none ring-0 focus:border-ring focus:ring-2 focus:ring-ring/30"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value} disabled={o.value === ""}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  )
}
