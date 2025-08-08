import BudgetFunding from "./components/sections/BudgetFunding";
import CallToAction from "./components/sections/CallToAction";
import ExecutiveSummary from "./components/sections/ExecutiveSummary";
import HeroSection from "./components/sections/HeroSection";
import ImpactMetrics from "./components/sections/ImpactMetrics";
import PilotProgram from "./components/sections/PilotProgram";
import ProblemStatement from "./components/sections/ProblemStatement";
import RisksMitigation from "./components/sections/RisksMitigation";
import SolutionFramework from "./components/sections/SolutionFramework";
import TechnicalImplementation from "./components/sections/TechnicalImplementation";
import Partnerships from "./components/sections/Partner";
import Tokenomics from "./components/sections/Tokenomics";


export default function HomePage() {
  return (
    <main className="flex flex-col items-center w-full overflow-x-hidden">
       <HeroSection />  
       <ExecutiveSummary />
       <ProblemStatement />
      <SolutionFramework />
      <TechnicalImplementation />
      <PilotProgram />
      <Partnerships />
      <ImpactMetrics />
      <BudgetFunding />
      <RisksMitigation />
      <CallToAction />
    </main>
  );
}
