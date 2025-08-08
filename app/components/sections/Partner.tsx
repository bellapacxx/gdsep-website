"use client";

import { Building, Users, DollarSign, Hammer } from "lucide-react";

const partners = [
  {
    type: "Governments",
    role: "Land licensing",
    examples: "Ghana Minerals Commission",
    icon: Building,
    colorClass: "bg-primary/10 text-primary",
  },
  {
    type: "NGOs",
    role: "Youth training",
    examples: "UNDP YouthConnekt",
    icon: Users,
    colorClass: "bg-accent/10 text-accent",
  },
  {
  type: "Private Sector",
  role: "Green Infrastructure & Economy Catalysts",
  examples: "EcoBuild Africa, GreenCo, IFC EDGE Partners",
  icon: Hammer, // or Building if you're using an icon library like Lucide or Heroicons
  colorClass: "bg-emerald-100 text-emerald-600",
},
  {
    type: "Exchanges",
    role: "SVG liquidity",
    examples: "Binance, Yellow Card",
    icon: DollarSign,
    colorClass: "bg-green-100 text-green-600",
  },
  
];

export default function Partnerships() {
  return (
    <section
      id="partnerships"
      className="w-full bg-primary text-text py-20 px-6 sm:px-12 text-center"
      aria-labelledby="partnerships-heading"
      role="region"
    >
      <div className="max-w-9xl mx-auto">
        <h2
          id="partnerships-heading"
          className="text-4xl font-extrabold mb-12 text-background tracking-tight"
        >
          Partnerships
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
          {partners.map(({ type, role, examples, icon: Icon, colorClass }) => (
            <article
              key={type}
              tabIndex={0}
              aria-labelledby={`${type.toLowerCase()}-heading`}
              className="group bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl hover:scale-[1.03] focus-within:shadow-2xl focus-within:scale-[1.03] transition-transform transition-shadow duration-300 ease-in-out cursor-pointer flex flex-col"
              role="article"
            >
              <header className="flex items-center gap-5 mb-6">
                <div
                  className={`${colorClass} rounded-full p-3 flex items-center justify-center shrink-0`}
                  aria-hidden="true"
                >
                  <Icon className="w-7 h-7" />
                </div>
                <h3
                  id={`${type.toLowerCase()}-heading`}
                  className="text-2xl font-semibold text-foreground group-focus-visible:outline group-focus-visible:outline-4 group-focus-visible:outline-primary/50"
                >
                  {type}
                </h3>
              </header>

              <dl className="flex flex-col gap-4 text-muted-foreground text-sm leading-relaxed flex-grow">
                <div>
                  <dt className="font-semibold text-primary mb-1">Role</dt>
                  <dd>{role}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-primary mb-1">Example Partners</dt>
                  <dd>{examples}</dd>
                </div>
              </dl>

              {/* Optional call-to-action for engagement */}
              <a
                href="#"
                className="mt-6 inline-block text-primary font-medium hover:underline self-start"
                aria-label={`Learn more about ${type} partnerships`}
                tabIndex={-1}
              >
                Learn more &rarr;
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
