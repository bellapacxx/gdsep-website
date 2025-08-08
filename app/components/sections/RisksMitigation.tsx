export default function RisksMitigation() {
  const risks = [
    {
      risk: "Regulatory pushback",
      mitigation: "Engage central banks early",
    },
    {
      risk: "SVG volatility",
      mitigation: "Algorithmic stabilization pool",
    },
    {
      risk: "Low adoption",
      mitigation: "Gamified education (NFT certificates)",
    },
  ];

  return (
    <section
      id="risks-mitigation"
      className="w-full bg-primary text-background py-16 px-6 sm:px-12"
      aria-labelledby="risks-mitigation-heading"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          id="risks-mitigation-heading"
          className="text-3xl font-extrabold mb-12 text-background tracking-tight text-center"
        >
          Risks &amp; Mitigation
        </h2>

        <div className="grid gap-8 max-w-4xl mx-auto sm:grid-cols-2">
          {risks.map(({ risk, mitigation }) => (
            <article
              key={risk}
              className="bg-accent/10 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow cursor-default"
              tabIndex={0}
              aria-label={`Risk: ${risk}. Mitigation: ${mitigation}`}
            >
              <h3 className="text-xl font-semibold mb-3 text-accent">{risk}</h3>
              <p className="text-background text-sm leading-relaxed">{mitigation}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
