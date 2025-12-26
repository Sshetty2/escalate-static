import Image from "next/image";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <div className="flex h-screen flex-col bg-background font-sans">
      {/* Header */}
      <header className="flex items-center gap-2 px-6 py-4 sm:gap-3 sm:px-8 sm:py-6">
        <Image
          src="/imgs/1.png"
          alt="Escalate LLC Logo"
          width={500}
          height={500}
          className="h-10 w-auto sm:h-14 md:h-16"
        />
        <Image
          src="/imgs/3.png"
          alt="Escalate LLC"
          width={800}
          height={200}
          className="h-6 w-auto sm:h-8 md:h-10"
        />
      </header>

      {/* Main Content */}
      <main className="flex flex-1 flex-col items-center justify-start px-6 pt-4 sm:px-8 sm:pt-8">
        {/* Products Section */}
        <section className="w-full max-w-4xl">
          <h2 className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-gray-400 sm:text-sm">
            Products & Projects
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
            <ProductCard
              title="Radar7"
              description="Map-first event discovery with AI-powered search"
              imageSrc="/imgs/icon-512.png"
              href="https://radar7.app"
              accentColor="bg-black"
            />
            <ProductCard
              title="Vulnerability Mitigation Assistant"
              description="AI-powered CVE analysis generating actionable mitigation strategies with prioritized remediation steps"
              imageSrc="/imgs/vulnerability_mitigation"
              href="https://vulnerability-mitigation-assistant.onrender.com"
              accentColor="bg-escalate-blue"
            />
            <ProductCard
              title="CPE Matching Agent"
              description="LangGraph-based agent matching software configs to CPEs via vector search and LLM reasoning"
              imageSrc="/imgs/cpe_matching_agent"
              accentColor="bg-escalate-blue"
            />
          </div>
        </section>
      </main>

      {/* Founder Section */}
      <section className="border-t border-gray-100 px-6 py-4 sm:px-8 sm:py-6">
        <div className="mx-auto flex max-w-4xl items-center gap-4 sm:gap-5">
          <Image
            src="/imgs/sachit-shetty.jpg"
            alt="Sachit Shetty"
            width={80}
            height={80}
            className="h-14 w-14 flex-shrink-0 rounded-full object-cover sm:h-16 sm:w-16"
          />
          <div className="min-w-0">
            <h3 className="text-sm font-semibold text-gray-900 sm:text-base">
              Sachit Shetty
            </h3>
            <p className="text-xs text-escalate-blue sm:text-sm">Founder</p>
            <p className="mt-1 text-xs leading-relaxed text-gray-600 sm:text-sm">
              Full-stack engineer passionate about AI technologies—LLMs, RAG, vector databases, and agentic AI.
              Outside of code, I explore philosophy, particularly metaphysics and epistemology.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 px-6 py-3 sm:px-8">
        <p className="text-center text-xs text-gray-400">
          &copy; 2025 - 2026 Escalate LLC. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
