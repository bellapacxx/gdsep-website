'use client';

import { AlertCircle } from 'lucide-react';
import { Badge } from '../ui/badge';

export default function ProblemStatement() {
  return (
    <section
      id="problem-statement"
      className="w-full bg-primary text-background py-20 px-6 sm:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <AlertCircle className="h-8 w-8 text-orange-300" />
          <h2 className="text-4xl font-bold tracking-tight">
            Problem Statement
          </h2>
        </div>

        <p className="text-lg max-w-3xl mb-10 text-orange-100">
          Despite the potential of emerging economies, youth are trapped in cycles of poverty, untapped capital, and migration risks.
        </p>

        {/* Challenges in Developing Economies */}
        <div className="mb-14 max-w-4xl">
          <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <Badge variant="outline" className="bg-orange-100 text-primary">
              Challenge #1
            </Badge>
            Challenges in Developing Economies
          </h3>
          <ul className="list-disc list-inside space-y-3 text-base leading-relaxed text-orange-50">
            <li>
              <span className="font-semibold">Unemployment:</span> 60% of African youth are underemployed <span className="text-sm italic text-orange-200">(World Bank)</span>.
            </li>
            <li>
              <span className="font-semibold">Dead Capital:</span> $9.3T in untapped land value globally <span className="text-sm italic text-orange-200">(Hernando de Soto)</span>.
            </li>
            <li>
              <span className="font-semibold">Illegal Immigration:</span> 250K+ Africans risk Mediterranean crossings annually <span className="text-sm italic text-orange-200">(IOM)</span>.
            </li>
          </ul>
        </div>

        {/* Systemic Barriers */}
        <div className="max-w-4xl">
          <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <Badge variant="outline" className="bg-orange-100 text-primary">
              Challenge #2
            </Badge>
            Systemic Barriers
          </h3>
          <ul className="list-disc list-inside space-y-3 text-base leading-relaxed text-orange-50">
            <li>
              <span className="font-semibold">No Collateral:</span> Most youth lack assets to qualify for business loans.
            </li>
            <li>
              <span className="font-semibold">Opaque Ownership:</span> Land and mineral rights are often undocumented.
            </li>
            <li>
              <span className="font-semibold">Capital Access:</span> Limited or no access to international funding and liquidity.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
