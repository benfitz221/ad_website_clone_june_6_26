import DiagnosticShuffler from './DiagnosticShuffler'
import TelemetryTypewriter from './TelemetryTypewriter'
import WorkflowStatus from './WorkflowStatus'

export default function Features() {
  return (
    <section id="about" className="py-0 bg-charcoal border-b border-cream/10">
      {/* Section title bar — app panel header */}
      <div className="border-b border-cream/10 bg-moss/30 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-cream/30 font-mono text-xs uppercase tracking-widest">Diagnostic Suite</span>
          <span className="text-cream/15 font-mono text-xs">·</span>
          <span className="text-cream/20 font-mono text-xs">3 modules active</span>
        </div>
        <span className="text-cream/15 font-mono text-xs hidden md:block">agent-done · ops platform v2</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Dashboard label strip */}
        <div className="mb-10">
          <h2 className="text-cream font-sans font-bold text-3xl md:text-4xl mb-2">
            Your Operation, Instrumented.
          </h2>
          <p className="text-cream/40 font-mono text-sm max-w-xl">
            Three data layers your property management firm likely does not have — but should.
          </p>
        </div>

        {/* 3-panel dashboard grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px border border-cream/10 rounded-lg overflow-hidden bg-cream/10">

          {/* Panel 1 — Ops Metrics */}
          <div className="bg-charcoal p-0 flex flex-col">
            <div className="border-b border-cream/10 bg-moss/30 px-5 py-3 flex items-center justify-between">
              <span className="text-cream/50 font-mono text-xs uppercase tracking-wider">Operations Metrics</span>
              <div className="w-1.5 h-1.5 rounded-full bg-clay animate-pulse" />
            </div>
            <div className="p-5 flex-1">
              <p className="text-cream/30 font-mono text-xs mb-5 leading-relaxed">
                Live portfolio health — maintenance velocity, occupancy, unit economics — updated continuously as your workflows produce data.
              </p>
              <DiagnosticShuffler />
            </div>
          </div>

          {/* Panel 2 — AI Engine */}
          <div className="bg-charcoal p-0 flex flex-col">
            <div className="border-b border-cream/10 bg-moss/30 px-5 py-3 flex items-center justify-between">
              <span className="text-cream/50 font-mono text-xs uppercase tracking-wider">AI Workflow Engine</span>
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </div>
            <div className="p-5 flex-1">
              <p className="text-cream/30 font-mono text-xs mb-5 leading-relaxed">
                Automated dispatching, escalation routing, and vendor management — running in the background while your team handles what needs judgment.
              </p>
              <TelemetryTypewriter />
            </div>
          </div>

          {/* Panel 3 — Workflow Automation Status */}
          <div className="bg-charcoal p-0 flex flex-col">
            <div className="border-b border-cream/10 bg-moss/30 px-5 py-3 flex items-center justify-between">
              <span className="text-cream/50 font-mono text-xs uppercase tracking-wider">Workflow Automation</span>
              <div className="w-1.5 h-1.5 rounded-full bg-clay animate-pulse" />
            </div>
            <div className="p-5 flex-1">
              <p className="text-cream/30 font-mono text-xs mb-5 leading-relaxed">
                Which of your operational processes are still running on manual effort — and what they cost in time and leakage.
              </p>
              <WorkflowStatus />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
