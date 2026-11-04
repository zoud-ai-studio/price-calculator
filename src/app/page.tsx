"use client";

import { useMemo, useState } from "react";

import { EmailButton } from "../components/EmailButton";
import { PriceDisplay } from "../components/PriceDisplay";
import { ProjectTypeSelector } from "../components/ProjectTypeSelector";
import { UrgencyToggle } from "../components/UrgencyToggle";
import {
  buildQuoteMailto,
  calculatePrice,
  formatPrice,
  type ProjectType,
} from "../lib/pricing";

export default function Home() {
  const [projectType, setProjectType] = useState<ProjectType>("landing-page");
  const [isUrgent, setIsUrgent] = useState(false);
  const total = useMemo(() => calculatePrice(projectType, isUrgent), [projectType, isUrgent]);

  return (
    <main>
      <div className="calculator">
        <header>
          <h1>Price your project</h1>
          <p>Pick a project type and see your price straight away.</p>
        </header>
        <ProjectTypeSelector value={projectType} onChange={setProjectType} />
        <UrgencyToggle value={isUrgent} onChange={setIsUrgent} />
        <PriceDisplay total={formatPrice(total)} />
        <EmailButton href={buildQuoteMailto(projectType, total)} />
      </div>
    </main>
  );
}
