import React, { useEffect, useState } from 'react';
import { initSmoothScroll } from './lib/smoothScroll';
import { KarthikNohoTopNav } from './components/KarthikNohoTopNav';
import { KarthikNohoHero } from './components/KarthikNohoHero';
import { KarthikNohoSummary } from './components/KarthikNohoSummary';
import { KarthikNohoSkills } from './components/KarthikNohoSkills';
import { KarthikNohoProjects } from './components/KarthikNohoProjects';
import { KarthikNohoLab } from './components/KarthikNohoLab';
import { KarthikNohoExperience } from './components/KarthikNohoExperience';
import { KarthikNohoStories } from './components/KarthikNohoStories';
import { KarthikNohoContact } from './components/KarthikNohoContact';
import { KarthikNohoFooter } from './components/KarthikNohoFooter';
import { KarthikNohoDrawer } from './components/KarthikNohoDrawer';
import { ResumeModal } from './components/ResumeModal';

export function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  useEffect(() => initSmoothScroll(), []);

  return (
    <div id="top" className="min-h-screen bg-[#EDE9E1] text-[#22211F] selection:bg-[#22211F] selection:text-white">

      {/* ---------------- PERSISTENT STICKY TOP NAV (Matches noho.ink's fixed header) ---------------- */}
      <KarthikNohoTopNav onOpenMenu={() => setIsMenuOpen(true)} />

      {/* ---------------- 1. SPLIT-SCREEN HERO (Exact noho.ink visual structure & layout) ---------------- */}
      <KarthikNohoHero
        onOpenMenu={() => setIsMenuOpen(true)}
        onOpenResume={() => setIsResumeModalOpen(true)}
      />

      {/* ---------------- 2. MULTIDISCIPLINARY FOUNDATION & PILLARS ---------------- */}
      <KarthikNohoSummary />

      {/* ---------------- 3. TECHNICAL SKILLS MATRIX & VERIFIED ASSESSMENTS ---------------- */}
      <KarthikNohoSkills />

      {/* ---------------- 4. APPLIED HARDWARE, IOT & CLOUD PROJECTS ---------------- */}
      <KarthikNohoProjects />

      {/* ---------------- 5. INTERACTIVE HARDWARE & TELEMETRY WORKBENCH ---------------- */}
      <KarthikNohoLab />

      {/* ---------------- 6. WORK EXPERIENCE, EDUCATION & CERTIFICATIONS ---------------- */}
      <KarthikNohoExperience />

      {/* ---------------- 7. ENGINEERING NOTES — HORIZONTAL SCROLL STRIP (noho.ink "Noho stories" pattern) ---------------- */}
      <KarthikNohoStories />

      {/* ---------------- 8. INITIATE COLLABORATION & CONTACT ---------------- */}
      <KarthikNohoContact onOpenResume={() => setIsResumeModalOpen(true)} />

      {/* ---------------- 8. FOOTER & COORDINATES ---------------- */}
      <KarthikNohoFooter onOpenResume={() => setIsResumeModalOpen(true)} />

      {/* ---------------- SLIDE-OVER NAVIGATION DRAWER ---------------- */}
      <KarthikNohoDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onOpenResume={() => setIsResumeModalOpen(true)}
      />

      {/* ---------------- PRINTABLE / DOWNLOADABLE CV MODAL ---------------- */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />

    </div>
  );
}

export default App;
