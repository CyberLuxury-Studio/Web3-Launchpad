import { IntegrationEcosystem } from "@/components/sections/IntegrationEcosystem";
import { LiveActivity } from "@/components/sections/LiveActivity";
import { DemoSandbox } from "@/components/sections/DemoSandbox";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] selection:bg-[var(--color-primary-container)]/30 selection:text-white">
      {/* 
        This is a boilerplate Next.js structure.
        Based on the UI/UX audit, the following sections were suggested and added:
      */}
      <div className="py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-black mb-4 font-mono text-[var(--color-on-surface)] text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary-container)] to-[var(--color-secondary-container)]">Web3 Launchpad</h1>
        <p className="text-[var(--color-on-surface-variant)] max-w-2xl mx-auto">Welcome to the future of decentralized launches. This project has been bootstrapped with Next.js and Tailwind CSS based on the CyberLuxury aesthetic.</p>
      </div>
      <DemoSandbox />
      <IntegrationEcosystem />
      <LiveActivity />
    </main>
  );
}
