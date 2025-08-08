export default function BudgetFunding() {
  const budgetItems = [
    { item: "Tech Development", cost: "$2M", icon: "💻" },
    { item: "Incubator Hubs", cost: "$1.5M", icon: "🏢" },
    { item: "Legal Compliance", cost: "$500K", icon: "⚖️" },
    { item: "Marketing", cost: "$1M", icon: "📢" },
  ];

  const fundingSources = [
    { source: "Foundation Reserves", percent: "30%", color: "bg-primary/20 text-primary" },
    { source: "SVG Pre-sale", percent: "40%", color: "bg-accent/20 text-accent" },
    { source: "Impact Investors", percent: "30%", color: "bg-green-100 text-green-600" },
  ];

  return (
    <section
      id="budget-funding"
      className="w-full bg-background text-text py-20 px-6 sm:px-12"
      aria-labelledby="budget-funding-heading"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2
          id="budget-funding-heading"
          className="text-4xl font-extrabold mb-12 text-primary tracking-tight"
        >
          Budget &amp; Funding
        </h2>

        {/* Year 1 Budget Cards */}
        <div className="mb-16 max-w-5xl mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {budgetItems.map(({ item, cost, icon }) => (
            <div
              key={item}
              className="flex flex-col items-center bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-5xl mb-4">{icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-primary">{item}</h3>
              <p className="text-lg font-bold">{cost}</p>
            </div>
          ))}
        </div>

        {/* Funding Sources */}
<div className="max-w-4xl mx-auto">
  <h3 className="text-4xl font-extrabold mb-12 text-primary tracking-tight">
    Funding Sources
  </h3>
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-md mx-auto">
    {fundingSources.map(({ source, percent, color }) => (
      <div
        key={source}
        className={`
          flex flex-col items-center justify-center rounded-xl px-6 py-6
          ${color} font-semibold shadow-md
          w-full h-32
          text-center
          transition-transform duration-300 ease-in-out
          hover:scale-105
          overflow-hidden
        `}
      >
        <span className="text-3xl font-bold">{percent}</span>
        <span className="text-sm mt-1">{source}</span>
      </div>
    ))}
  </div>
</div>

      </div>
    </section>
  );
}
