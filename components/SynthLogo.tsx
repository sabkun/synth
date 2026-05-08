export function SynthLogo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 text-synth-accent"
        aria-hidden
      >
        <path
          d="M4 20c2.5-6 6-10 12-10s9.5 4 12 10"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="M4 12c2.5 6 6 10 12 10s9.5-4 12-10"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          opacity="0.55"
        />
      </svg>
      <span className="font-medium tracking-tight text-white lowercase">
        synth
      </span>
    </span>
  );
}
