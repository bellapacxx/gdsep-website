"use client";

import { MapPin, Target, CalendarDays } from "lucide-react";

const regions = [
  {
    country: "Ghana",
    asset: "Gold lands",
    startups: "500 Agritech",
    icon: <MapPin className="w-6 h-6 text-primary" />,
  },
  {
    country: "Kenya",
    asset: "Geothermal",
    startups: "300 EV ventures",
    icon: <MapPin className="w-6 h-6 text-primary" />,
  },
  {
    country: "Colombia",
    asset: "Emerald zones",
    startups: "200 Eco-tourism",
    icon: <MapPin className="w-6 h-6 text-primary" />,
  },
];

export default function PilotProgram() {
  return (
    <section
      id="pilot-program"
      className="w-full bg-background text-text py-20 px-6 sm:px-12"
      aria-labelledby="pilot-program-heading"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          id="pilot-program-heading"
          className="text-4xl font-extrabold mb-12 text-primary tracking-tight"
        >
          Pilot Program
        </h2>

        {/* Target Regions Cards */}
        <div className="mb-16 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {regions.map(({ country, asset, startups, icon }) => (
            <article
              key={country}
              className="border border-gray-300 rounded-xl bg-white p-6 shadow-sm hover:shadow-lg transition-shadow"
              tabIndex={0}
              aria-label={`${country} Pilot Program Details`}
            >
              <header className="flex items-center gap-3 mb-4">
                {icon}
                <h3 className="text-2xl font-semibold text-foreground">{country}</h3>
              </header>
              <dl className="space-y-2 text-sm text-muted-foreground">
                <div>
                  <dt className="font-medium text-primary">Focus Assets</dt>
                  <dd>{asset}</dd>
                </div>
                <div>
                  <dt className="font-medium text-primary">Target Startups</dt>
                  <dd>{startups}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>

        {/* Phase 1 (2025) */}
        <section className="max-w-4xl">
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3 text-foreground">
            <CalendarDays className="w-6 h-6 text-primary" />
            Phase 1 (2025)
          </h3>
          <ul className="list-disc list-inside space-y-3 text-muted-foreground text-base leading-relaxed">
            <li>Tokenize <strong>$50M</strong> in assets.</li>
            <li>Launch <strong>3 incubators</strong>.</li>
            <li>Train <strong>2,000 youths</strong>.</li>
          </ul>
        </section>
      </div>
    </section>
  );
}
