export default function ImpactMetrics() {
  const metrics = [
    {
      kpi: "Startups Launched",
      target2025: "1,000",
      target2030: "10,000",
      icon: (
        <svg
          className="w-10 h-10 text-background mb-4"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      kpi: "Jobs Created",
      target2025: "5,000",
      target2030: "500,000",
      icon: (
        <svg
          className="w-10 h-10 text-background mb-4"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle cx="12" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5.5 21h13a3 3 0 00-13 0z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      kpi: "SVG Market Cap",
      target2025: "$100M",
      target2030: "$1B",
      icon: (
        <svg
          className="w-10 h-10 text-background mb-4"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            d="M12 1v22M17 5H9a4 4 0 100 8h6a4 4 0 110 8H7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="impact-metrics"
      className="w-full bg-primary text-background py-20 px-6 sm:px-12"
      aria-labelledby="impact-heading"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2
          id="impact-heading"
          className="text-4xl font-extrabold mb-12 tracking-tight"
        >
          Impact Metrics
        </h2>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto">
          {metrics.map(({ kpi, target2025, target2030, icon }) => (
            <div
              key={kpi}
              className="bg-primary/80 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center">{icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-background">{kpi}</h3>
              <div className="flex justify-between text-sm text-background font-medium">
                <span>
                  <span className="block mb-1 text-base font-bold">2025 Target</span>
                  {target2025}
                </span>
                <span>
                  <span className="block mb-1 text-base font-bold">2030 Target</span>
                  {target2030}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
