export default function Partnerships() {
  return (
    <section
      id="partnerships"
      className="w-full bg-background text-text py-16 px-6 sm:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-primary">Partnerships</h2>

        <div className="max-w-4xl">
          <table className="w-full border-collapse border border-gray-300 text-left">
            <thead>
              <tr className="bg-primary text-background">
                <th className="px-4 py-2 border border-gray-300">Partner Type</th>
                <th className="px-4 py-2 border border-gray-300">Role</th>
                <th className="px-4 py-2 border border-gray-300">Example Partners</th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-background even:bg-gray-50">
                <td className="px-4 py-2 border border-gray-300 font-semibold">Governments</td>
                <td className="px-4 py-2 border border-gray-300">Land licensing</td>
                <td className="px-4 py-2 border border-gray-300">Ghana Minerals Commission</td>
              </tr>
              <tr className="odd:bg-background even:bg-gray-50">
                <td className="px-4 py-2 border border-gray-300 font-semibold">NGOs</td>
                <td className="px-4 py-2 border border-gray-300">Youth training</td>
                <td className="px-4 py-2 border border-gray-300">UNDP YouthConnekt</td>
              </tr>
              <tr className="odd:bg-background even:bg-gray-50">
                <td className="px-4 py-2 border border-gray-300 font-semibold">Exchanges</td>
                <td className="px-4 py-2 border border-gray-300">SVG liquidity</td>
                <td className="px-4 py-2 border border-gray-300">Binance, Yellow Card</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
